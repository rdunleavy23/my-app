// lib/analytics.ts
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export function trackEvent(eventName: string, parameters?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
}

export function trackApproachTab(tab: string) {
  trackEvent('approach_tab_click', {
    tab_name: tab,
    event_category: 'engagement',
    event_label: `approach_${tab}`
  });
}

export function trackApproachHowOpen(approachTitle: string) {
  trackEvent('approach_how_open', {
    approach_title: approachTitle,
    event_category: 'engagement',
    event_label: 'approach_details'
  });
}

export function trackApproachDeliverablesOpen(approachTitle: string) {
  trackEvent('approach_deliverables_open', {
    approach_title: approachTitle,
    event_category: 'engagement',
    event_label: 'approach_deliverables'
  });
}
