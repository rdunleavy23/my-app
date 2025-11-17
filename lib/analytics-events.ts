// lib/analytics-events.ts
// Type-safe event definitions for GA4 tracking
// Following GA4 best practices: https://developers.google.com/analytics/devguides/collection/ga4

export type CTALocation = 'navbar' | 'hero' | 'footer' | 'content' | 'mobile_menu';
export type FormName = 'publish_post' | 'contact' | 'newsletter';
export type ErrorType = 'validation' | 'network' | 'server' | 'unknown';
export type NavigationType = 'desktop' | 'mobile' | 'footer';
export type LeadMethod = 'schedule_call_button' | 'contact_form' | 'newsletter_signup';

// Event name constants following GA4 naming conventions
// Recommended events are marked with [GA4 RECOMMENDED]
export const GA4_EVENTS = {
  // === GA4 RECOMMENDED EVENTS ===
  // These unlock predictive metrics and pre-built reports
  GENERATE_LEAD: 'generate_lead', // [GA4 RECOMMENDED] For lead generation

  // === CUSTOM EVENTS ===
  // Used when recommended events don't fit the use case

  // Form events (funnel tracking)
  FORM_START: 'form_start',
  FORM_SUBMIT: 'form_submit',
  FORM_ERROR: 'form_error',

  // Engagement events
  SCROLL_DEPTH: 'scroll_depth',
  SECTION_VIEW: 'section_view',

  // Navigation events
  NAVIGATION_CLICK: 'navigation_click',

  // Content events
  BLOG_POST_VIEW: 'blog_post_view',
  FAQ_EXPAND: 'faq_expand',

  // Approach section events (legacy - keeping for continuity)
  APPROACH_TAB_CLICK: 'approach_tab_click',
  APPROACH_HOW_OPEN: 'approach_how_open',
  APPROACH_DELIVERABLES_OPEN: 'approach_deliverables_open',
} as const;

// Event parameter interfaces

// GA4 Recommended Event: generate_lead
// Used for all lead generation CTAs (Schedule Call, Contact, etc.)
export interface GenerateLeadParams {
  currency: string; // ISO 4217 format (e.g., 'USD')
  value: number; // Estimated lead value in specified currency
  method: LeadMethod; // How the lead was generated
  button_location?: CTALocation; // Where the CTA button was located
  button_text?: string; // CTA button text (max 100 chars)
  destination_url?: string; // Where CTA leads (max 100 chars)
  page_location: string; // Current page path
}

export interface FormStartParams {
  form_name: FormName;
  page_location: string;
}

export interface FormSubmitParams {
  form_name: FormName;
  page_location: string;
  form_fields_count?: number;
}

export interface FormErrorParams {
  form_name: FormName;
  error_type: ErrorType;
  field_name?: string;
  error_message?: string;
  page_location: string;
}

export interface ScrollDepthParams {
  scroll_depth_percent: number;
  page_location: string;
  page_title: string;
}

export interface SectionViewParams {
  section_name: string;
  page_location: string;
  page_title: string;
}

export interface NavigationClickParams {
  navigation_type: NavigationType;
  link_text: string;
  link_destination: string;
  page_location: string;
}

export interface BlogPostViewParams {
  post_title: string;
  post_author: string;
  post_slug: string;
  page_location: string;
}

export interface FAQExpandParams {
  faq_question: string;
  faq_section: string;
  page_location: string;
}

// Union type for all event parameters
export type GA4EventParams =
  | GenerateLeadParams
  | FormStartParams
  | FormSubmitParams
  | FormErrorParams
  | ScrollDepthParams
  | SectionViewParams
  | NavigationClickParams
  | BlogPostViewParams
  | FAQExpandParams
  | { tab_name: string; engagement_type: string } // Approach tab events
  | { approach_title: string; interaction_type: string }; // Approach modal events

// Event validation helpers
export function validateEventName(eventName: string): boolean {
  return /^[a-z][a-z0-9_]*$/.test(eventName) && eventName.length <= 40;
}

export function validateParameterName(paramName: string): boolean {
  return /^[a-z][a-z0-9_]*$/.test(paramName) && paramName.length <= 40;
}

export function sanitizeString(value: string, maxLength: number = 100): string {
  return value.slice(0, maxLength).replace(/[^\w\s-]/g, '');
}

// Helper to get current page info
export function getCurrentPageInfo() {
  if (typeof window === 'undefined') {
    return { page_location: '', page_title: '' };
  }
  
  return {
    page_location: window.location.pathname,
    page_title: document.title,
  };
}

