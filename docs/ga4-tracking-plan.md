# GA4 Tracking Plan - Pattern Growth

**Last Updated**: 2025-01-17
**GA4 Property ID**: G-DQD43BSF5Q
**Business Model**: B2B Consulting (8-week growth strategy sprints)

## Overview

This tracking plan follows GA4 best practices, prioritizing **recommended events** over custom events to unlock:
- Predictive analytics (lead scoring, churn prediction)
- Pre-built conversion reports
- Google Ads optimization
- Better attribution modeling

---

## Event Hierarchy

Following GA4 best practices, we use events in this priority:

1. ✅ **Automatically Collected Events** - Built into GA4
2. ✅ **Enhanced Measurement Events** - Enabled in GA4 settings
3. ✅ **Recommended Events** - Google's predefined events (WE USE THESE)
4. ✅ **Custom Events** - Only when recommended don't fit

---

## GA4 Recommended Events (PRIMARY)

### 1. `generate_lead` 🎯 **[GA4 RECOMMENDED]**

**Purpose**: Track all lead generation interactions
**When to Fire**: When user clicks any "Schedule a Call" CTA
**Why Recommended Event**: Unlocks GA4 predictive lead scoring and pre-built conversion funnels

**Parameters** (all ≤40 chars):
| Parameter | Type | Required | Description | Max Length | Example |
|-----------|------|----------|-------------|------------|---------|
| `currency` | string | ✅ Yes | ISO 4217 currency code | 3 chars | `USD` |
| `value` | number | ✅ Yes | Estimated lead value | - | `500` |
| `method` | string | ✅ Yes | How lead was generated | 40 chars | `schedule_call_button` |
| `button_location` | string | No | Where CTA appears | 40 chars | `navbar`, `hero`, `footer` |
| `button_text` | string | No | CTA button text | 100 chars | `Schedule a Call` |
| `destination_url` | string | No | Target URL | 100 chars | `https://cal.com/...` |
| `page_location` | string | Auto | Current page path | 100 chars | `/about` |

**Implementation Locations**:
- ✅ `GetStartedButton` component (hero, content, footer)
- ✅ Navbar desktop "Schedule a Call"
- ✅ Mobile menu "Schedule a Call"
- ✅ `trackConsultationBooking()` function
- ✅ `trackLeadGeneration()` function
- ✅ `trackPricingInquiry()` function

**Estimated Values by Source**:
- Direct CTA click: **$500** (intent to book)
- Contact form: **$400** (qualified inquiry)
- Pricing inquiry: **$400** (high intent)
- Newsletter: **$100** (nurture lead)

**Mark as Key Event in GA4**: ✅ YES (primary conversion)

---

## Custom Events (SECONDARY)

These events serve specific business needs not covered by GA4 recommended events.

### 2. `form_start`

**Purpose**: Track form funnel beginning
**Use Case**: Identify form abandonment points

**Parameters**:
| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| `form_name` | string | Form identifier | `publish_post`, `contact` |
| `page_location` | string | Current page | `/publish` |

**Implementation**: Publish form tracking

---

### 3. `form_submit`

**Purpose**: Track successful form submissions
**Use Case**: Form completion tracking

**Parameters**:
| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| `form_name` | string | Form identifier | `publish_post` |
| `form_fields_count` | number | Number of fields | `5` |
| `page_location` | string | Current page | `/publish` |

**Mark as Key Event in GA4**: ✅ YES (for publish form)

---

### 4. `form_error`

**Purpose**: Track form validation/submission errors
**Use Case**: Identify UX friction points

**Parameters**:
| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| `form_name` | string | Form identifier | `publish_post` |
| `error_type` | string | Error category | `validation`, `network`, `server` |
| `field_name` | string | Problem field | `title`, `content` |
| `error_message` | string | Error description (max 100) | `All fields required` |
| `page_location` | string | Current page | `/publish` |

---

### 5. `scroll_depth`

**Purpose**: Track content engagement depth
**Use Case**: Understand content consumption patterns

**Parameters**:
| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| `scroll_depth_percent` | number | Scroll threshold | `25`, `50`, `75`, `90` |
| `page_location` | string | Current page | `/blog/post-slug` |
| `page_title` | string | Page title | `Blog Post Title` |

**Thresholds**: 25%, 50%, 75%, 90%
**Implementation**: `useScrollDepth` hook (automatic)

---

### 6. `navigation_click`

**Purpose**: Track main navigation usage
**Use Case**: Optimize navigation based on usage patterns

**Parameters**:
| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| `navigation_type` | string | Menu type | `desktop`, `mobile`, `footer` |
| `link_text` | string | Link label | `About`, `Process` |
| `link_destination` | string | Target page | `/about` |
| `page_location` | string | Current page | `/` |

---

### 7. `blog_post_view`

**Purpose**: Track blog content engagement
**Use Case**: Content performance analysis

**Parameters**:
| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| `post_title` | string | Blog post title | `GA4 Best Practices` |
| `post_author` | string | Author name | `Ryan` |
| `post_slug` | string | URL slug | `ga4-best-practices` |
| `page_location` | string | Current page | `/blog/ga4-best-practices` |

---

### 8. `section_view`

**Purpose**: Track when key page sections come into view
**Use Case**: Understand content visibility

**Parameters**:
| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| `section_name` | string | Section identifier | `pricing`, `testimonials` |
| `page_location` | string | Current page | `/` |
| `page_title` | string | Page title | `Home` |

---

### 9. `faq_expand`

**Purpose**: Track FAQ interactions
**Use Case**: Identify common questions

**Parameters**:
| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| `faq_question` | string | Question text (max 100) | `What if strategy doesn't work?` |
| `faq_section` | string | FAQ section | `general`, `pricing` |
| `page_location` | string | Current page | `/` |

---

## Legacy Events (DEPRECATED UA PATTERNS REMOVED)

These events are kept for data continuity but updated to GA4 best practices:

### 10. `approach_tab_click`

**Updated Parameters** (UA patterns removed):
- ✅ `tab_name` (NEW: descriptive)
- ✅ `engagement_type: 'tab_navigation'` (NEW: replaces event_category)
- ❌ ~~`event_category`~~ (REMOVED: UA pattern)
- ❌ ~~`event_label`~~ (REMOVED: UA pattern)

### 11. `approach_how_open`

**Updated Parameters**:
- ✅ `approach_title`
- ✅ `interaction_type: 'how_modal_open'` (NEW)
- ❌ ~~`event_category`~~ (REMOVED)
- ❌ ~~`event_label`~~ (REMOVED)

### 12. `approach_deliverables_open`

**Updated Parameters**:
- ✅ `approach_title`
- ✅ `interaction_type: 'deliverables_modal_open'` (NEW)
- ❌ ~~`event_category`~~ (REMOVED)
- ❌ ~~`event_label`~~ (REMOVED)

---

## Parameter Naming Standards

**Following GA4 Best Practices**:

✅ **DO**:
- Use `snake_case` (all lowercase, underscores)
- Start with letter
- Max 40 characters for parameter names
- Max 100 characters for parameter values
- Use descriptive names (`button_location` not `btn_loc`)
- Be consistent across events

❌ **DON'T**:
- Use spaces (`button location`)
- Use camelCase (`buttonLocation`)
- Use hyphens (`button-location`)
- Exceed character limits
- Use reserved names (`page_location`, `page_title` are auto-collected)
- Use UA patterns (`event_category`, `event_label`, `event_action`)

---

## Key Events (Conversions) Configuration

**Mark these events as "Key Events" in GA4**:

1. ✅ `generate_lead` - Primary conversion (all Schedule Call CTAs)
2. ✅ `form_submit` - Form completions
3. ✅ `blog_post_view` - Content engagement indicator

**How to Mark**:
1. Go to GA4 > Admin > Events
2. Find event name
3. Toggle "Mark as key event"

---

## Custom Dimensions Registration

**CRITICAL**: Custom parameters must be registered in GA4 to appear in standard reports.

See: `docs/ga4-custom-dimensions-setup.md` for complete registration guide.

**Priority Parameters to Register** (within 50 event-scoped limit):

**High Priority** (Register First):
1. `method` - How leads are generated
2. `button_location` - CTA placement
3. `form_name` - Form identifier
4. `error_type` - Error categorization
5. `scroll_depth_percent` - Engagement depth
6. `navigation_type` - Navigation patterns
7. `post_slug` - Content tracking

**Medium Priority**:
8. `button_text` - CTA copy testing
9. `consultation_type` - Service type
10. `interest_level` - Lead quality

---

## Enhanced Measurement Settings

**Enable in GA4**: Admin > Data Streams > Web > Enhanced Measurement

✅ **Enabled Features**:
- Page views (automatic)
- Scrolls (automatic - 90% threshold)
- Outbound clicks (automatic)
- Site search (if implemented)
- Video engagement (if applicable)
- File downloads (automatic)

**Note**: Our custom `scroll_depth` event tracks 25%, 50%, 75%, 90% for more granular data.

---

## Data Retention Settings

**REQUIRED Manual Configuration**:

1. Go to: GA4 > Admin > Data Settings > Data Retention
2. Change from **2 months** to **14 months**
3. Enable "Reset user data on new activity"

**Why**: Default 2-month retention is insufficient for B2B sales cycles.

---

## Value Tracking Strategy

**All conversion events include `currency` and `value` for ROI analysis**:

| Event Type | Currency | Value | Reasoning |
|------------|----------|-------|-----------|
| Schedule Call CTA | USD | $500 | Average B2B consulting lead |
| Contact Form | USD | $400 | Qualified inquiry |
| Pricing Inquiry | USD | $400 | High purchase intent |
| Newsletter | USD | $100 | Nurture lead |
| High Service Interest | USD | $300 | Qualified prospect |
| Medium Service Interest | USD | $150 | Warm lead |
| Case Study View | USD | $100 | Engagement value |

**Adjust these values** based on actual conversion rates and deal sizes.

---

## Testing Checklist

**Before Go-Live**:

- [ ] Enable GA4 DebugView (`?debug_mode=true`)
- [ ] Test all `generate_lead` triggers
- [ ] Verify `currency` and `value` appear correctly
- [ ] Check parameter character limits (40/100)
- [ ] Confirm no duplicate events firing
- [ ] Test mobile and desktop
- [ ] Verify scroll depth thresholds
- [ ] Test form tracking (start, submit, error)
- [ ] Check navigation tracking
- [ ] Validate blog post tracking

**After Launch** (First Week):

- [ ] Monitor DebugView for errors
- [ ] Check standard reports for custom parameters
- [ ] Verify Key Events are recording
- [ ] Review Real-time reports
- [ ] Check conversion funnel data
- [ ] Register missing custom dimensions
- [ ] Adjust lead values if needed

---

## Migration Notes

**Changes from Previous Implementation**:

1. ✅ **Replaced** `cta_click` → `generate_lead` (GA4 recommended)
2. ✅ **Removed** UA patterns (`event_category`, `event_label`)
3. ✅ **Added** `currency` and `value` to all conversions
4. ✅ **Updated** parameter names to GA4 standards
5. ✅ **Removed** `outbound_click` (Enhanced Measurement handles this)
6. ✅ **Added** `GetStartedButton` tracking (was missing!)
7. ✅ **Simplified** navigation tracking
8. ✅ **Improved** parameter structure

**Backward Compatibility**:
- Legacy `trackCTAClick()` function deprecated but redirects to `trackGenerateLead()`
- Console warning alerts developers to use new function
- No data loss during transition

---

## Maintenance Schedule

**Weekly**:
- Monitor GA4 DebugView for errors
- Check event counts in Realtime reports

**Monthly**:
- Review custom dimension usage
- Audit event parameter values
- Check for duplicate/unused events
- Validate lead value estimates

**Quarterly**:
- Update lead value estimates based on conversion data
- Review Key Events performance
- Optimize tracking based on insights
- Consider new events for product changes

**Annually**:
- Privacy compliance audit
- GA4 property health check
- Documentation update
- Custom dimension cleanup

---

## Support Resources

- **GA4 Event Reference**: https://developers.google.com/analytics/devguides/collection/ga4/reference/events
- **GA4 Best Practices**: https://support.google.com/analytics/topic/9756175
- **Custom Dimensions Guide**: `docs/ga4-custom-dimensions-setup.md`
- **Implementation Summary**: `GA4_IMPLEMENTATION_SUMMARY.md`

---

**Questions?** Contact: analytics@patterngrowth.com
