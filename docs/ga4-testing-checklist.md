# GA4 Event Tracking Testing Checklist

## Pre-Testing Setup

### 1. Enable GA4 Debug Mode
- [ ] Add `?debug_mode=true` to URL parameters
- [ ] Or install GA4 DebugView Chrome extension
- [ ] Verify debug events appear in GA4 DebugView

### 2. Browser Console Setup
- [ ] Open browser developer tools
- [ ] Monitor console for validation warnings
- [ ] Check for gtag loading errors

## Event Testing Checklist

### CTA Events (`cta_click`)

#### Desktop Navigation
- [ ] Click "Schedule a Call" in navbar
- [ ] Verify event fires with parameters:
  - `cta_location`: "navbar"
  - `cta_text`: "Schedule a Call"
  - `cta_destination`: "https://cal.com/pattern-growth"
  - `page_location`: current page path

#### Mobile Navigation
- [ ] Open mobile menu
- [ ] Click "Schedule a Call" in mobile menu
- [ ] Verify event fires with parameters:
  - `cta_location`: "mobile_menu"
  - `cta_text`: "Schedule a Call"
  - `cta_destination`: "https://cal.com/pattern-growth"
  - `page_location`: current page path

#### Homepage CTA Section
- [ ] Scroll to CTA section on homepage
- [ ] Click "Schedule a Call" button
- [ ] Verify event fires with parameters:
  - `cta_location`: "cta_section"
  - `cta_text`: "Schedule a Call"
  - `cta_destination`: "https://cal.com/pattern-growth/30min"
  - `page_location`: "/"

#### Blog Post CTA
- [ ] Navigate to any blog post
- [ ] Scroll to bottom CTA section
- [ ] Click "Schedule Your Call" button
- [ ] Verify event fires with parameters:
  - `cta_location`: "content"
  - `cta_text`: "Schedule Your Call"
  - `cta_destination`: "https://cal.com/pattern-growth/30min"
  - `page_location`: "/blog/[slug]"

### Navigation Events (`navigation_click`)

#### Desktop Navigation
- [ ] Click "Our Story" link in navbar
- [ ] Verify event fires with parameters:
  - `navigation_type`: "desktop"
  - `link_text`: "Our Story"
  - `link_destination`: "/about"
  - `page_location`: current page path

- [ ] Click "How It Works" link in navbar
- [ ] Verify event fires with parameters:
  - `navigation_type`: "desktop"
  - `link_text`: "How It Works"
  - `link_destination`: "/process"
  - `page_location`: current page path

#### Mobile Navigation
- [ ] Open mobile menu
- [ ] Click "Our Story" link
- [ ] Verify event fires with parameters:
  - `navigation_type`: "mobile"
  - `link_text`: "Our Story"
  - `link_destination`: "/about"
  - `page_location`: current page path

- [ ] Click "How It Works" link
- [ ] Verify event fires with parameters:
  - `navigation_type`: "mobile"
  - `link_text`: "How It Works"
  - `link_destination`: "/process"
  - `page_location`: current page path

### Form Events

#### Form Start (`form_start`)
- [ ] Navigate to `/publish` page
- [ ] Start typing in any form field
- [ ] Verify event fires with parameters:
  - `form_name`: "publish_post"
  - `page_location`: "/publish"

#### Form Submit (`form_submit`)
- [ ] Fill out all required fields on `/publish` page
- [ ] Click "Publish Post" button
- [ ] Verify event fires with parameters:
  - `form_name`: "publish_post"
  - `page_location`: "/publish"
  - `form_fields_count`: 5

#### Form Error (`form_error`)
- [ ] Navigate to `/publish` page
- [ ] Click "Publish Post" without filling fields
- [ ] Verify event fires with parameters:
  - `form_name`: "publish_post"
  - `error_type`: "validation"
  - `field_name`: "password, title, description, content"
  - `error_message`: "All fields are required."
  - `page_location`: "/publish"

### Scroll Depth Events (`scroll_depth`)

#### Homepage Scroll Tracking
- [ ] Navigate to homepage
- [ ] Scroll to 25% of page height
- [ ] Verify event fires with parameters:
  - `scroll_depth_percent`: 25
  - `page_location`: "/"
  - `page_title`: current page title

- [ ] Continue scrolling to 50%
- [ ] Verify event fires with parameters:
  - `scroll_depth_percent`: 50
  - `page_location`: "/"
  - `page_title`: current page title

- [ ] Continue scrolling to 75%
- [ ] Verify event fires with parameters:
  - `scroll_depth_percent`: 75
  - `page_location`: "/"
  - `page_title`: current page title

- [ ] Continue scrolling to 90%
- [ ] Verify event fires with parameters:
  - `scroll_depth_percent`: 90
  - `page_location`: "/"
  - `page_title`: current page title

#### Blog Post Scroll Tracking
- [ ] Navigate to any blog post
- [ ] Test scroll depth tracking at all thresholds
- [ ] Verify events fire with correct page_location and page_title

### Content Events

#### Blog Post View (`blog_post_view`)
- [ ] Navigate to any blog post
- [ ] Verify event fires automatically with parameters:
  - `post_title`: blog post title
  - `post_author`: author name
  - `post_slug`: URL slug
  - `page_location`: "/blog/[slug]"

### Legacy Events (Existing)

#### Approach Tab Click (`approach_tab_click`)
- [ ] Navigate to homepage
- [ ] Scroll to approach section
- [ ] Click different approach tabs
- [ ] Verify events fire with parameters:
  - `tab_name`: tab identifier
  - `event_category`: "engagement"
  - `event_label`: "approach_[tab_name]"

#### Approach How Open (`approach_how_open`)
- [ ] Navigate to homepage
- [ ] Scroll to approach section
- [ ] Click "How we do it" button
- [ ] Verify event fires with parameters:
  - `approach_title`: approach section title
  - `event_category`: "engagement"
  - `event_label`: "approach_details"

#### Approach Deliverables Open (`approach_deliverables_open`)
- [ ] Navigate to homepage
- [ ] Scroll to approach section
- [ ] Click "Deliverables" button
- [ ] Verify event fires with parameters:
  - `approach_title`: approach section title
  - `event_category`: "engagement"
  - `event_label`: "approach_deliverables"

## Cross-Device Testing

### Desktop Testing
- [ ] Test all events on desktop Chrome
- [ ] Test all events on desktop Firefox
- [ ] Test all events on desktop Safari (if available)

### Mobile Testing
- [ ] Test all events on mobile Chrome
- [ ] Test all events on mobile Safari
- [ ] Verify mobile-specific navigation events

### Responsive Testing
- [ ] Test events at different screen sizes
- [ ] Verify mobile menu events work correctly
- [ ] Check scroll depth tracking on mobile

## Performance Testing

### Event Timing
- [ ] Verify events fire quickly (< 100ms)
- [ ] Check for event firing delays
- [ ] Monitor for duplicate events

### Error Handling
- [ ] Test with slow network connection
- [ ] Verify graceful handling of gtag errors
- [ ] Check console for validation warnings

## Data Validation

### Parameter Validation
- [ ] All string parameters are properly sanitized
- [ ] No special characters in event/parameter names
- [ ] Parameter values are within expected ranges
- [ ] No undefined or null values in required parameters

### Event Consistency
- [ ] Event names follow GA4 naming conventions
- [ ] Parameter names are consistent across events
- [ ] No duplicate events fired for single actions
- [ ] Events fire only once per user action

## GA4 Property Validation

### DebugView Verification
- [ ] All events appear in GA4 DebugView
- [ ] Event parameters are correctly populated
- [ ] No missing or malformed events
- [ ] Real-time data flow is working

### Property Settings
- [ ] Enhanced measurement is enabled
- [ ] IP anonymization is active
- [ ] Data retention settings are configured
- [ ] Internal traffic filters are set up

## Troubleshooting Common Issues

### Events Not Firing
- [ ] Check browser console for gtag errors
- [ ] Verify gtag script is loaded
- [ ] Check for JavaScript errors
- [ ] Test with DebugView enabled

### Missing Parameters
- [ ] Check parameter validation warnings
- [ ] Verify event schema compliance
- [ ] Test parameter sanitization
- [ ] Check for undefined values

### Duplicate Events
- [ ] Check for multiple event listeners
- [ ] Verify useEffect dependencies
- [ ] Review component re-renders
- [ ] Check for event bubbling

## Post-Testing Actions

### Documentation Updates
- [ ] Update analytics guide with any changes
- [ ] Document any issues found during testing
- [ ] Record performance metrics
- [ ] Note any browser-specific issues

### GA4 Configuration
- [ ] Set up conversion goals for key events
- [ ] Configure custom reports
- [ ] Set up data alerts
- [ ] Link to Google Search Console

### Monitoring Setup
- [ ] Set up weekly data validation
- [ ] Create monthly event audit process
- [ ] Establish error monitoring
- [ ] Plan quarterly optimization reviews

---

**Testing Completed By**: _________________  
**Date**: _________________  
**Browser/Device**: _________________  
**Notes**: _________________

