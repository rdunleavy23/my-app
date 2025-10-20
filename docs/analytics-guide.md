# GA4 Analytics Implementation Guide

## Overview

This document outlines the comprehensive GA4 event tracking implementation for Pattern Growth's marketing website. The implementation follows GA4 best practices and provides detailed insights into user engagement and conversion behavior.

## Current Implementation

### GA4 Configuration
- **Measurement ID**: `G-DQD43BSF5Q`
- **Implementation**: Direct gtag.js (not GTM)
- **IP Anonymization**: Enabled
- **Enhanced Measurement**: Enabled
- **Data Retention**: 2 months (default) - *needs manual extension to 14 months*

### Event Tracking Architecture

The implementation uses a type-safe event system with validation and sanitization:

- **Core Library**: `lib/analytics.ts` - Main tracking functions
- **Event Definitions**: `lib/analytics-events.ts` - Type-safe event schemas
- **Scroll Tracking**: `hooks/use-scroll-depth.ts` - Scroll depth monitoring

## Event Catalog

### 1. CTA Events (`cta_click`)

**Purpose**: Track all call-to-action button interactions

**Parameters**:
- `cta_location`: "navbar" | "hero" | "footer" | "content" | "mobile_menu"
- `cta_text`: Button text content
- `cta_destination`: Target URL
- `page_location`: Current page path

**Implementation Locations**:
- Navbar desktop/mobile "Schedule a Call" buttons
- Homepage CTA section
- Blog post CTA sections
- All Cal.com booking links

### 2. Form Events

#### Form Start (`form_start`)
**Purpose**: Track when users begin filling forms

**Parameters**:
- `form_name`: "publish_post" | "contact" | "newsletter"
- `page_location`: Current page path

#### Form Submit (`form_submit`)
**Purpose**: Track successful form submissions

**Parameters**:
- `form_name`: Form identifier
- `page_location`: Current page path
- `form_fields_count`: Number of form fields (optional)

#### Form Error (`form_error`)
**Purpose**: Track form validation and submission errors

**Parameters**:
- `form_name`: Form identifier
- `error_type`: "validation" | "network" | "server" | "unknown"
- `field_name`: Specific field causing error (optional)
- `error_message`: Error description (optional)
- `page_location`: Current page path

**Implementation**: `/publish` page form tracking

### 3. Engagement Events

#### Scroll Depth (`scroll_depth`)
**Purpose**: Track user scroll engagement

**Parameters**:
- `scroll_depth_percent`: 25 | 50 | 75 | 90
- `page_location`: Current page path
- `page_title`: Page title

**Implementation**: Automatic tracking via `useScrollDepth` hook

#### Section View (`section_view`)
**Purpose**: Track when users scroll to key sections

**Parameters**:
- `section_name`: Section identifier
- `page_location`: Current page path
- `page_title`: Page title

#### Outbound Click (`outbound_click`)
**Purpose**: Track external link clicks

**Parameters**:
- `link_url`: External URL
- `link_text`: Link text content
- `page_location`: Current page path

### 4. Navigation Events (`navigation_click`)

**Purpose**: Track main navigation usage

**Parameters**:
- `navigation_type`: "desktop" | "mobile" | "footer"
- `link_text`: Navigation link text
- `link_destination`: Target page
- `page_location`: Current page path

**Implementation**: Navbar desktop and mobile menu tracking

### 5. Content Events

#### Blog Post View (`blog_post_view`)
**Purpose**: Track blog post engagement

**Parameters**:
- `post_title`: Blog post title
- `post_author`: Author name
- `post_slug`: URL slug
- `page_location`: Current page path

**Implementation**: Automatic tracking on blog post pages

#### FAQ Expand (`faq_expand`)
**Purpose**: Track FAQ interactions

**Parameters**:
- `faq_question`: FAQ question text
- `faq_section`: FAQ section identifier
- `page_location`: Current page path

### 6. Legacy Events (Existing)

#### Approach Tab Click (`approach_tab_click`)
**Purpose**: Track approach section tab navigation

**Parameters**:
- `tab_name`: Tab identifier
- `event_category`: "engagement"
- `event_label`: Tab-specific label

#### Approach How Open (`approach_how_open`)
**Purpose**: Track "How we do it" modal opens

**Parameters**:
- `approach_title`: Approach section title
- `event_category`: "engagement"
- `event_label`: "approach_details"

#### Approach Deliverables Open (`approach_deliverables_open`)
**Purpose**: Track deliverables modal opens

**Parameters**:
- `approach_title`: Approach section title
- `event_category`: "engagement"
- `event_label`: "approach_deliverables"

## Implementation Files

### Core Files
- `lib/analytics.ts` - Main tracking functions with validation
- `lib/analytics-events.ts` - Type-safe event definitions and schemas
- `hooks/use-scroll-depth.ts` - Scroll depth tracking hook

### Component Updates
- `app/layout.tsx` - Enhanced GA4 configuration
- `app/page.tsx` - Homepage CTA tracking and scroll depth
- `components/Navbar.tsx` - Navigation and CTA tracking
- `app/publish/page.tsx` - Form event tracking
- `app/blog/[slug]/page.tsx` - Blog post tracking
- `app/blog/[slug]/blog-post-tracking.tsx` - Blog tracking component

## Testing & Validation

### GA4 DebugView Testing

1. **Enable Debug Mode**:
   - Add `?debug_mode=true` to URL
   - Or install GA4 DebugView Chrome extension

2. **Test Checklist**:
   - [ ] CTA buttons fire `cta_click` events
   - [ ] Form interactions track start/submit/error events
   - [ ] Scroll depth triggers at 25%, 50%, 75%, 90%
   - [ ] Navigation clicks tracked on desktop/mobile
   - [ ] Blog post views tracked with metadata
   - [ ] Outbound links tracked
   - [ ] Event parameters populated correctly
   - [ ] No duplicate events fired

3. **Validation Steps**:
   - Check GA4 DebugView for real-time events
   - Verify parameter values match expected format
   - Test on both desktop and mobile
   - Validate event naming consistency

## GA4 Property Configuration

### Required Settings Updates

1. **Data Retention**:
   - Navigate to Admin > Data Settings > Data Retention
   - Extend from 2 months to 14 months
   - Enable "Reset user data on new activity"

2. **Enhanced Measurement**:
   - Admin > Data Streams > Web > Enhanced Measurement
   - Enable all features: scrolls, outbound clicks, site search, video engagement, file downloads

3. **Internal Traffic Filter**:
   - Admin > Data Settings > Data Filters
   - Create filter to exclude development/office IPs
   - Add filter for Cal.com referrals if needed

4. **Session Timeout**:
   - Admin > Data Settings > Session Settings
   - Adjust to 45-60 minutes for B2B context

### Conversion Setup

Mark these events as conversions in GA4:
- `cta_click` (all CTA interactions)
- `form_submit` (successful form submissions)
- `blog_post_view` (content engagement)

## Privacy & Compliance

### Current Implementation
- ✅ IP anonymization enabled
- ✅ No PII collection in custom events
- ✅ Event data sanitization

### Recommendations
- Document data collection in privacy policy
- Consider consent mode for EU traffic
- Implement cookie banner if required
- Regular privacy audits

## GTM vs Direct Implementation Analysis

### Current Approach: Direct gtag.js

**Pros**:
- Simple, lightweight implementation
- No additional script load (~30KB saved)
- Developer-controlled tracking
- Easy to understand and debug

**Cons**:
- Requires code changes for new events
- No visual debugging interface
- Harder to manage multiple marketing pixels
- Limited flexibility for non-developers

### GTM Alternative

**Pros**:
- Centralized tag management
- Visual trigger/tag builder
- Built-in preview/debug mode
- Version control and rollback
- Non-developer friendly
- Better for A/B testing

**Cons**:
- Additional script load (~30KB)
- Initial setup complexity
- Learning curve for team
- Potential performance impact

### Recommendation

**Current Status**: Direct implementation works well for current needs
**Future Consideration**: Migrate to GTM if:
- Marketing team needs self-service tracking
- Multiple pixels/tags required
- A/B testing becomes frequent
- Performance optimization needed

## Monitoring & Optimization

### Key Metrics to Track

1. **Conversion Funnel**:
   - Page views → Scroll depth → CTA clicks → Form submissions
   - Blog post views → CTA clicks

2. **Engagement Metrics**:
   - Scroll depth distribution
   - Time on page by content type
   - Navigation usage patterns

3. **Error Tracking**:
   - Form validation errors
   - Network/server errors
   - Missing field patterns

### Regular Maintenance

- Weekly GA4 data validation
- Monthly event audit
- Quarterly conversion goal review
- Annual privacy compliance check

## Troubleshooting

### Common Issues

1. **Events Not Firing**:
   - Check browser console for validation warnings
   - Verify gtag is loaded
   - Test with DebugView

2. **Missing Parameters**:
   - Check parameter validation in console
   - Verify event schema compliance
   - Test parameter sanitization

3. **Duplicate Events**:
   - Check for multiple event listeners
   - Verify useEffect dependencies
   - Review component re-renders

### Debug Commands

```javascript
// Check if gtag is loaded
console.log(typeof window.gtag);

// Test event manually
window.gtag('event', 'test_event', { test_param: 'test_value' });

// Check dataLayer
console.log(window.dataLayer);
```

## Future Enhancements

### Planned Features
- E-commerce tracking (if applicable)
- Video engagement tracking
- Advanced user journey mapping
- Custom dimensions for user segments

### Integration Opportunities
- Google Search Console linking
- Google Ads conversion import
- BigQuery data export
- Custom reporting dashboards

---

*Last Updated: January 2025*
*Implementation Version: 1.0*
