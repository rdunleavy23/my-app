// lib/analytics.ts
// GA4 tracking implementation following best practices
// Reference: https://developers.google.com/analytics/devguides/collection/ga4
import {
  GA4_EVENTS,
  validateEventName,
  validateParameterName,
  sanitizeString,
  getCurrentPageInfo,
  type GA4EventParams,
  type GenerateLeadParams,
  type LeadMethod,
  type CTALocation,
  type FormStartParams,
  type FormSubmitParams,
  type FormErrorParams,
  type ScrollDepthParams,
  type SectionViewParams,
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

// === GA4 RECOMMENDED EVENT: generate_lead ===
// Use this for all lead generation CTAs (Schedule Call, Contact forms, etc.)
// Benefits: Unlocks predictive lead scoring, pre-built conversion reports, Google Ads optimization
export function trackGenerateLead(params: Omit<GenerateLeadParams, 'page_location'>) {
  const pageInfo = getCurrentPageInfo();
  trackEvent(GA4_EVENTS.GENERATE_LEAD, {
    ...params,
    page_location: pageInfo.page_location,
  });
}

// Legacy CTA tracking - DEPRECATED, use trackGenerateLead instead
// Keeping for backward compatibility temporarily
export function trackCTAClick(params: {
  cta_location: CTALocation;
  cta_text: string;
  cta_destination: string;
}) {
  console.warn('trackCTAClick is deprecated. Use trackGenerateLead for lead generation CTAs.');
  const pageInfo = getCurrentPageInfo();
  trackGenerateLead({
    currency: 'USD',
    value: 500, // Estimated lead value for B2B consulting
    method: 'schedule_call_button',
    button_location: params.cta_location,
    button_text: params.cta_text,
    destination_url: params.cta_destination,
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

// Approach section tracking (legacy events - kept for data continuity)
// Updated to remove UA patterns (event_category, event_label)
export function trackApproachTab(tab: string) {
  trackEvent(GA4_EVENTS.APPROACH_TAB_CLICK, {
    tab_name: tab,
    engagement_type: 'tab_navigation'
  });
}

export function trackApproachHowOpen(approachTitle: string) {
  trackEvent(GA4_EVENTS.APPROACH_HOW_OPEN, {
    approach_title: approachTitle,
    interaction_type: 'how_modal_open'
  });
}

export function trackApproachDeliverablesOpen(approachTitle: string) {
  trackEvent(GA4_EVENTS.APPROACH_DELIVERABLES_OPEN, {
    approach_title: approachTitle,
    interaction_type: 'deliverables_modal_open'
  });
}

// === CONSULTING BUSINESS TRACKING ===
// Following GA4 best practices: use recommended events + meaningful parameters

// Consultation booking - use generate_lead (GA4 recommended)
export function trackConsultationBooking(source: string, consultationType?: string) {
  trackGenerateLead({
    currency: 'USD',
    value: 500, // Realistic B2B consulting lead value
    method: 'schedule_call_button',
    button_text: consultationType || 'strategy_session',
    destination_url: source,
  });
}

// Lead generation - use generate_lead (GA4 recommended)
export function trackLeadGeneration(leadType: string, source: string, value?: number) {
  trackGenerateLead({
    currency: 'USD',
    value: value || 500,
    method: leadType as LeadMethod,
    button_location: 'content',
    destination_url: source,
  });
}

// Content engagement - custom event with GA4-style parameters
export function trackContentEngagement(contentType: string, contentTitle: string, engagementType: string) {
  trackEvent('content_engagement', {
    content_type: contentType,
    content_title: contentTitle,
    engagement_action: engagementType,
  });
}

// Service interest - custom event with value
export function trackServiceInterest(serviceType: string, interestLevel: 'low' | 'medium' | 'high') {
  trackEvent('service_interest', {
    service_type: serviceType,
    interest_level: interestLevel,
    currency: 'USD',
    value: interestLevel === 'high' ? 300 : interestLevel === 'medium' ? 150 : 50
  });
}

// Pricing inquiry - use generate_lead since it shows purchase intent
export function trackPricingInquiry(priceRange?: string) {
  trackGenerateLead({
    currency: 'USD',
    value: 400,
    method: 'contact_form',
    button_location: 'content',
    button_text: `pricing_${priceRange || 'inquiry'}`,
  });
}

// Case study view - content engagement
export function trackCaseStudyView(caseStudyTitle: string) {
  trackEvent('case_study_view', {
    case_study_title: caseStudyTitle,
    content_type: 'case_study',
    currency: 'USD',
    value: 100, // Engagement value
  });
}

// Consultation funnel tracking
export function trackConsultationFlowStep(step: string, stepNumber: number, totalSteps: number) {
  trackEvent('consultation_flow_step', {
    step_name: step,
    step_number: stepNumber,
    total_steps: totalSteps,
    progress_percent: Math.round((stepNumber / totalSteps) * 100)
  });
}
