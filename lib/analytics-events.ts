// lib/analytics-events.ts
// Type-safe event definitions for GA4 tracking

export type CTALocation = 'navbar' | 'hero' | 'footer' | 'content' | 'mobile_menu';
export type FormName = 'publish_post' | 'contact' | 'newsletter';
export type ErrorType = 'validation' | 'network' | 'server' | 'unknown';
export type NavigationType = 'desktop' | 'mobile' | 'footer';

// Event name constants following GA4 naming conventions
export const GA4_EVENTS = {
  // CTA and conversion events
  CTA_CLICK: 'cta_click',
  FORM_START: 'form_start',
  FORM_SUBMIT: 'form_submit',
  FORM_ERROR: 'form_error',
  
  // Engagement events
  SCROLL_DEPTH: 'scroll_depth',
  SECTION_VIEW: 'section_view',
  OUTBOUND_CLICK: 'outbound_click',
  
  // Navigation events
  NAVIGATION_CLICK: 'navigation_click',
  
  // Content events
  BLOG_POST_VIEW: 'blog_post_view',
  FAQ_EXPAND: 'faq_expand',
  
  // Existing events (keeping current naming)
  APPROACH_TAB_CLICK: 'approach_tab_click',
  APPROACH_HOW_OPEN: 'approach_how_open',
  APPROACH_DELIVERABLES_OPEN: 'approach_deliverables_open',
} as const;

// Event parameter interfaces
export interface CTAClickParams {
  cta_location: CTALocation;
  cta_text: string;
  cta_destination: string;
  page_location: string;
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

export interface OutboundClickParams {
  link_url: string;
  link_text: string;
  page_location: string;
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
  | CTAClickParams
  | FormStartParams
  | FormSubmitParams
  | FormErrorParams
  | ScrollDepthParams
  | SectionViewParams
  | OutboundClickParams
  | NavigationClickParams
  | BlogPostViewParams
  | FAQExpandParams
  | { tab_name: string; event_category: string; event_label: string } // Existing approach events
  | { approach_title: string; event_category: string; event_label: string }; // Existing approach events

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

