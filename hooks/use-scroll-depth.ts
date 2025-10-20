"use client"

// hooks/use-scroll-depth.ts
import { useEffect, useRef } from 'react';
import { trackScrollDepth } from '@/lib/analytics';

interface UseScrollDepthOptions {
  thresholds?: number[];
  enabled?: boolean;
}

export function useScrollDepth(options: UseScrollDepthOptions = {}) {
  const { thresholds = [25, 50, 75, 90], enabled = true } = options;
  const trackedThresholds = useRef<Set<number>>(new Set());

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') {
      return;
    }

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / documentHeight) * 100);

      // Track each threshold only once per page load
      thresholds.forEach(threshold => {
        if (scrollPercent >= threshold && !trackedThresholds.current.has(threshold)) {
          trackedThresholds.current.add(threshold);
          trackScrollDepth({
            scroll_depth_percent: threshold,
          });
        }
      });
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [thresholds, enabled]);

  // Reset tracked thresholds when component unmounts or dependencies change
  useEffect(() => {
    trackedThresholds.current.clear();
  }, [thresholds]);
}
