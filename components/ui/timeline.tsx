"use client";
import {
  useScroll,
  useTransform,
  motion,
  useInView,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <div
      className="w-full bg-background font-sans"
      ref={containerRef}
    >
      <div className="max-w-6xl mx-auto py-16 px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            The Momentum System
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Seven stages that transform scattered tactics into a unified growth framework. 
            When we're done, you own everything—the strategy, the systems, the playbooks.
          </p>
        </div>

        <div ref={ref} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 w-0.5 h-full bg-border">
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-primary/80 to-primary/40"
            />
          </div>

          {/* Timeline Items */}
          {data.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TimelineItem = ({ item, index }: { item: TimelineEntry; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex items-start mb-16 last:mb-0"
    >
      {/* Timeline Dot */}
      <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-6 z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
          className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"
        />
      </div>

      {/* Content */}
      <div className={`ml-16 md:ml-0 w-full ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
          className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <h3 className="text-xl font-semibold text-foreground mb-2">
            {item.title}
          </h3>
          <div className="text-muted-foreground">
            {item.content}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
