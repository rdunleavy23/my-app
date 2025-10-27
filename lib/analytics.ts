// lib/analytics.ts
import { 
  GA4_EVENTS, 
  validateEventName, 
  validateParameterName, 
  sanitizeString, 
  getCurrentPageInfo,
  type GA4EventParams,
  type CTAClickParams,
  type FormStartParams,
  type FormSubmitParams,
  type FormErrorParams,
  type ScrollDepthParams,
  type SectionViewParams,
  type OutboundClickParams,
  type NavigationClickParams,
  type BlogPostViewParams,
  type FAQExpandParams,
} from './analytics-events';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

// Core tracking function with validation
export function trackEvent(eventName: string, parameters?: Record<string, any>) {
  if (typeof window === 'undefined' || !window.gtag) {
    return;
  }

  // Validate event name
  if (!validateEventName(eventName)) {
    console.warn(`Invalid GA4 event name: ${eventName}`);
    return;
  }

  // Validate and sanitize parameters
  const sanitizedParams: Record<string, any> = {};
  if (parameters) {
    for (const [key, value] of Object.entries(parameters)) {
      if (!validateParameterName(key)) {
        console.warn(`Invalid GA4 parameter name: ${key}`);
        continue;
      }
      
      // Sanitize string values
      if (typeof value === 'string') {
        sanitizedParams[key] = sanitizeString(value);
      } else {
        sanitizedParams[key] = value;
      }
    }
  }

  window.gtag('event', eventName, sanitizedParams);
}

// CTA tracking
export function trackCTAClick(params: Omit<CTAClickParams, 'page_location'>) {
  const pageInfo = getCurrentPageInfo();
  trackEvent(GA4_EVENTS.CTA_CLICK, {
    ...params,
    page_location: pageInfo.page_location,
  });
}

// Form tracking
export function trackFormStart(params: Omit<FormStartParams, 'page_location'>) {
  const pageInfo = getCurrentPageInfo();
  trackEvent(GA4_EVENTS.FORM_START, {
    ...params,
    page_location: pageInfo.page_location,
  });
}

export function trackFormSubmit(params: Omit<FormSubmitParams, 'page_location'>) {
  const pageInfo = getCurrentPageInfo();
  trackEvent(GA4_EVENTS.FORM_SUBMIT, {
    ...params,
    page_location: pageInfo.page_location,
  });
}

export function trackFormError(params: Omit<FormErrorParams, 'page_location'>) {
  const pageInfo = getCurrentPageInfo();
  trackEvent(GA4_EVENTS.FORM_ERROR, {
    ...params,
    page_location: pageInfo.page_location,
  });
}

// Engagement tracking
export function trackScrollDepth(params: Omit<ScrollDepthParams, 'page_location' | 'page_title'>) {
  const pageInfo = getCurrentPageInfo();
  trackEvent(GA4_EVENTS.SCROLL_DEPTH, {
    ...params,
    page_location: pageInfo.page_location,
    page_title: pageInfo.page_title,
  });
}

export function trackSectionView(params: Omit<SectionViewParams, 'page_location' | 'page_title'>) {
  const pageInfo = getCurrentPageInfo();
  trackEvent(GA4_EVENTS.SECTION_VIEW, {
    ...params,
    page_location: pageInfo.page_location,
    page_title: pageInfo.page_title,
  });
}

export function trackOutboundClick(params: Omit<OutboundClickParams, 'page_location'>) {
  const pageInfo = getCurrentPageInfo();
  trackEvent(GA4_EVENTS.OUTBOUND_CLICK, {
    ...params,
    page_location: pageInfo.page_location,
  });
}

// Navigation tracking
export function trackNavigationClick(params: Omit<NavigationClickParams, 'page_location'>) {
  const pageInfo = getCurrentPageInfo();
  trackEvent(GA4_EVENTS.NAVIGATION_CLICK, {
    ...params,
    page_location: pageInfo.page_location,
  });
}

// Content tracking
export function trackBlogPostView(params: Omit<BlogPostViewParams, 'page_location'>) {
  const pageInfo = getCurrentPageInfo();
  trackEvent(GA4_EVENTS.BLOG_POST_VIEW, {
    ...params,
    page_location: pageInfo.page_location,
  });
}

export function trackFAQExpand(params: Omit<FAQExpandParams, 'page_location'>) {
  const pageInfo = getCurrentPageInfo();
  trackEvent(GA4_EVENTS.FAQ_EXPAND, {
    ...params,
    page_location: pageInfo.page_location,
  });
}

// Legacy functions (keeping existing approach tracking)
export function trackApproachTab(tab: string) {
  trackEvent(GA4_EVENTS.APPROACH_TAB_CLICK, {
    tab_name: tab,
    event_category: 'engagement',
    event_label: `approach_${tab}`
  });
}

export function trackApproachHowOpen(approachTitle: string) {
  trackEvent(GA4_EVENTS.APPROACH_HOW_OPEN, {
    approach_title: approachTitle,
    event_category: 'engagement',
    event_label: 'approach_details'
  });
}

export function trackApproachDeliverablesOpen(approachTitle: string) {
  trackEvent(GA4_EVENTS.APPROACH_DELIVERABLES_OPEN, {
    approach_title: approachTitle,
    event_category: 'engagement',
    event_label: 'approach_deliverables'
  });
}

// Enhanced conversion tracking for consulting business
export function trackConsultationBooking(source: string, consultationType?: string) {
  trackEvent('consultation_booked', {
    event_category: 'conversion',
    event_label: source,
    consultation_type: consultationType || 'strategy_session',
    value: 100 // Estimated value of consultation
  });
}

export function trackLeadGeneration(leadType: string, source: string, value?: number) {
  trackEvent('lead_generated', {
    event_category: 'conversion',
    event_label: leadType,
    lead_source: source,
    value: value || 25
  });
}

export function trackContentEngagement(contentType: string, contentTitle: string, engagementType: string) {
  trackEvent('content_engagement', {
    event_category: 'engagement',
    event_label: contentType,
    content_title: contentTitle,
    engagement_type: engagementType
  });
}

export function trackServiceInterest(serviceType: string, interestLevel: 'low' | 'medium' | 'high') {
  trackEvent('service_interest', {
    event_category: 'engagement',
    event_label: serviceType,
    interest_level: interestLevel,
    value: interestLevel === 'high' ? 75 : interestLevel === 'medium' ? 50 : 25
  });
}

export function trackPricingInquiry(priceRange?: string) {
  trackEvent('pricing_inquiry', {
    event_category: 'conversion',
    event_label: 'pricing_interest',
    price_range: priceRange,
    value: 50
  });
}

export function trackCaseStudyView(caseStudyTitle: string) {
  trackEvent('case_study_view', {
    event_category: 'engagement',
    event_label: caseStudyTitle,
    value: 30
  });
}

// Consulting-specific conversion funnel tracking
export function trackConsultationFlowStep(step: string, stepNumber: number, totalSteps: number) {
  trackEvent('consultation_flow_step', {
    event_category: 'conversion',
    event_label: step,
    step_number: stepNumber,
    total_steps: totalSteps,
    progress_percentage: Math.round((stepNumber / totalSteps) * 100)
  });
}
