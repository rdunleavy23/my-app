# GA4 Custom Dimensions & Metrics Setup Guide

**Property ID**: G-DQD43BSF5Q
**Last Updated**: 2025-01-17

## ⚠️ CRITICAL: Why This Matters

**Custom event parameters will NOT appear in standard GA4 reports until you register them as custom dimensions.**

- ✅ They WILL appear in: DebugView, Realtime reports, BigQuery exports
- ❌ They WON'T appear in: Standard reports, Explorations, Audiences (until registered)

**You have 48 hours after deleting a dimension before you can create a new one**, so plan carefully.

---

## Quota Limits (Standard GA4 Property)

| Scope | Limit | Current Usage | Remaining |
|-------|-------|---------------|-----------|
| **Event-scoped dimensions** | 50 | 0 | 50 |
| **User-scoped dimensions** | 25 | 0 | 25 |
| **Item-scoped dimensions** | 10 | 0 | 10 |

**Note**: We only need event-scoped dimensions for Pattern Growth tracking.

---

## Required Custom Dimensions

### Priority 1: Register Immediately (Critical for Reporting)

These dimensions are essential for conversion tracking and lead attribution:

| Dimension Name | Event Parameter | Scope | Description | Used In Events |
|----------------|-----------------|-------|-------------|----------------|
| **Lead Method** | `method` | Event | How lead was generated | `generate_lead` |
| **Button Location** | `button_location` | Event | Where CTA button appears | `generate_lead` |
| **Form Name** | `form_name` | Event | Form identifier | `form_start`, `form_submit`, `form_error` |
| **Error Type** | `error_type` | Event | Type of form error | `form_error` |
| **Scroll Depth** | `scroll_depth_percent` | Event | Engagement depth | `scroll_depth` |

---

### Priority 2: Register Within 30 Days (Important for Analysis)

| Dimension Name | Event Parameter | Scope | Description | Used In Events |
|----------------|-----------------|-------|-------------|----------------|
| **Navigation Type** | `navigation_type` | Event | Desktop/mobile menu | `navigation_click` |
| **Post Slug** | `post_slug` | Event | Blog post identifier | `blog_post_view` |
| **Post Author** | `post_author` | Event | Content author | `blog_post_view` |
| **Button Text** | `button_text` | Event | CTA copy | `generate_lead` |
| **Link Destination** | `link_destination` | Event | Navigation target | `navigation_click` |

---

### Priority 3: Optional (Register As Needed)

| Dimension Name | Event Parameter | Scope | Description | Used In Events |
|----------------|-----------------|-------|-------------|----------------|
| **Section Name** | `section_name` | Event | Page section | `section_view` |
| **FAQ Question** | `faq_question` | Event | FAQ text (truncated) | `faq_expand` |
| **Content Type** | `content_type` | Event | Type of content | Various |
| **Interaction Type** | `interaction_type` | Event | User action type | Approach events |
| **Engagement Type** | `engagement_type` | Event | Engagement category | Approach events |

---

## Step-by-Step Registration Process

### Step 1: Access Custom Dimensions

1. Go to **GA4 Property**
2. Click **Admin** (bottom left gear icon)
3. Under **Property** column, click **Custom definitions**
4. Click **Create custom dimension** button

### Step 2: Register Each Dimension

For each dimension in the table above:

**Example: Registering "Lead Method"**

1. **Dimension name**: `Lead Method`
   - This is what appears in GA4 reports
   - Use Title Case with spaces
   - Max 40 characters

2. **Scope**: `Event`
   - Choose "Event" for all our custom dimensions
   - User scope is for user properties (we don't use these)
   - Item scope is for ecommerce (not applicable)

3. **Description** (optional but recommended):
   ```
   How the lead was generated (schedule_call_button, contact_form, newsletter_signup)
   ```

4. **Event parameter**: `method`
   - This MUST match exactly what you send in your tracking code
   - Case-sensitive
   - Must match `analytics-events.ts` definition

5. Click **Save**

### Step 3: Verify Registration

1. After saving, dimension appears in Custom dimensions list
2. **Wait 24-48 hours** for data to populate in reports
3. Test in: **Explore** > Create exploration > Add dimension

---

## Complete Registration Script

Copy this checklist and check off as you register:

### Priority 1 (Do First)

- [ ] **Lead Method**
  - Name: `Lead Method`
  - Scope: Event
  - Parameter: `method`
  - Description: `How the lead was generated`

- [ ] **Button Location**
  - Name: `Button Location`
  - Scope: Event
  - Parameter: `button_location`
  - Description: `Where the CTA button appears on page`

- [ ] **Form Name**
  - Name: `Form Name`
  - Scope: Event
  - Parameter: `form_name`
  - Description: `Identifier for form being tracked`

- [ ] **Error Type**
  - Name: `Error Type`
  - Scope: Event
  - Parameter: `error_type`
  - Description: `Category of form error (validation, network, server)`

- [ ] **Scroll Depth Percent**
  - Name: `Scroll Depth Percent`
  - Scope: Event
  - Parameter: `scroll_depth_percent`
  - Description: `Percentage of page scrolled (25, 50, 75, 90)`

### Priority 2 (Within 30 Days)

- [ ] **Navigation Type**
  - Name: `Navigation Type`
  - Scope: Event
  - Parameter: `navigation_type`
  - Description: `Type of navigation menu (desktop, mobile, footer)`

- [ ] **Post Slug**
  - Name: `Post Slug`
  - Scope: Event
  - Parameter: `post_slug`
  - Description: `URL slug of blog post`

- [ ] **Post Author**
  - Name: `Post Author`
  - Scope: Event
  - Parameter: `post_author`
  - Description: `Author of blog post`

- [ ] **Button Text**
  - Name: `Button Text`
  - Scope: Event
  - Parameter: `button_text`
  - Description: `Text displayed on CTA button`

- [ ] **Link Destination**
  - Name: `Link Destination`
  - Scope: Event
  - Parameter: `link_destination`
  - Description: `Target page for navigation link`

---

## Built-in Dimensions (Do NOT Create)

These are automatically available in GA4 - **DO NOT register as custom dimensions**:

- ❌ `page_location` - Auto-collected
- ❌ `page_title` - Auto-collected
- ❌ `page_referrer` - Auto-collected
- ❌ `currency` - Standard ecommerce parameter
- ❌ `value` - Standard ecommerce parameter
- ❌ `event_name` - Always available
- ❌ `session_id` - Auto-collected
- ❌ `user_id` - Auto-collected (if set)

**Why not?** Creating custom dimensions for these wastes your quota and creates duplicate data.

---

## Validation After Registration

### 24 Hours After Registration

1. **Check DebugView**:
   - Go to: **Realtime** > **DebugView**
   - Add `?debug_mode=true` to your URL
   - Trigger events
   - Verify parameters appear

2. **Check Realtime Reports**:
   - Go to: **Realtime**
   - Click on event name
   - Check if custom parameters show up

### 48 Hours After Registration

1. **Create Exploration**:
   - Go to: **Explore** > **Create new exploration**
   - Add your custom dimension
   - Check if data populates

2. **Create Segment**:
   - Go to: **Explore** > **Create segment**
   - Try using your custom dimension as a condition
   - Verify it appears in dropdown

---

## Common Issues & Solutions

### Issue: "Parameter not appearing in reports"

**Solutions**:
1. **Wait 24-48 hours** - Data takes time to process
2. **Check exact parameter name** - Must match code exactly (`method` not `Method`)
3. **Verify events are firing** - Check DebugView first
4. **Ensure parameter has data** - Check if value is being sent

### Issue: "Dimension quota exceeded"

**Solutions**:
1. **Audit existing dimensions** - Delete unused ones
2. **Wait 48 hours** after deletion before creating new
3. **Prioritize** - Only register dimensions you'll actually use in reports
4. **Combine dimensions** - Use one dimension with multiple values instead of multiple dimensions

### Issue: "Can't delete dimension"

**Fact**: You can archive but not truly delete dimensions in GA4.
**Solution**: Archive unused dimensions to free up namespace, but quota remains used for 48 hours.

### Issue: "Parameter showing (not set)"

**Possible Causes**:
1. Parameter not sent with event
2. Parameter value is empty string
3. Parameter name mismatch
4. Event not firing correctly

**Debug**:
- Check browser console for validation warnings
- Verify in DebugView that parameter exists
- Check `analytics.ts` for proper parameter passing

---

## Advanced: High-Cardinality Warning

⚠️ **Dimensions with >500 unique values may trigger:**
- Data sampling
- Values grouped into "(other)" row
- Report limitations

**High-cardinality dimensions in our implementation**:
- `button_text` - Limited to ~10 variations ✅
- `post_slug` - Could grow to hundreds ⚠️
- `faq_question` - Limited to ~20 questions ✅

**Mitigation**:
- For `post_slug`: This is OK, we need post-level detail
- Monitor cardinality in reports
- Use explorations for high-cardinality analysis

---

## Naming Conventions

**GA4 UI vs. Code**:

| In GA4 UI (Dimension Name) | In Code (Parameter) |
|---------------------------|---------------------|
| Lead Method ← **Title Case** | `method` ← **snake_case** |
| Button Location | `button_location` |
| Form Name | `form_name` |
| Error Type | `error_type` |

**Best Practices**:
- UI: Use clear, human-readable names with spaces
- Code: Use snake_case matching `analytics-events.ts`
- Descriptions: Include example values for clarity

---

## Testing Custom Dimensions

### Quick Test

```javascript
// In browser console on your site
window.gtag('event', 'generate_lead', {
  currency: 'USD',
  value: 500,
  method: 'test_dimension',
  button_location: 'test_location'
});
```

Then check:
1. **DebugView** (immediate) - Parameter appears
2. **Realtime** (5 min delay) - Event shows up
3. **Explore** (24-48 hrs) - Dimension available

---

## Maintenance Checklist

### Monthly Review

- [ ] Check quota usage: Admin > Custom definitions
- [ ] Audit unused dimensions
- [ ] Verify critical dimensions collecting data
- [ ] Review high-cardinality dimensions

### Quarterly Cleanup

- [ ] Archive dimensions not used in 90 days
- [ ] Document dimension purpose
- [ ] Update this guide with new dimensions
- [ ] Review and optimize dimension usage

---

## Quick Reference: Registration Lookup

| I Want To Analyze... | Register This Dimension | Parameter Name |
|---------------------|------------------------|----------------|
| Which CTA performs best | Button Location | `button_location` |
| Lead source effectiveness | Lead Method | `method` |
| Form abandonment points | Form Name | `form_name` |
| Error patterns | Error Type | `error_type` |
| Content engagement depth | Scroll Depth Percent | `scroll_depth_percent` |
| Navigation patterns | Navigation Type | `navigation_type` |
| Blog performance | Post Slug | `post_slug` |
| Author performance | Post Author | `post_author` |

---

## Support

**Questions?**
- Check: `docs/ga4-tracking-plan.md`
- Reference: https://support.google.com/analytics/answer/14240153
- Contact: analytics@patterngrowth.com

---

**Last Updated**: 2025-01-17
**Next Review**: 2025-02-17
