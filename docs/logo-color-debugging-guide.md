# Logo Color Debugging - Diagnostic Logging Guide

## Overview

Comprehensive diagnostic logging has been added to identify the root cause of the logo color issue. All logs are prefixed with `[Logo Debug]`, `[Theme Toggle]`, or `[Theme Provider]` for easy filtering.

## Log Locations

### 1. Logo Component (`components/Logo.tsx`)

Logs appear when:
- Component mounts
- Theme changes (light ↔ dark)
- Image loads

**Log Categories:**

#### `[Logo Debug] Image Properties`
- `src`: Full image URL
- `alt`: Alt text value
- `altExact`: Exact alt text with quotes (for selector matching)
- `width` / `height`: Rendered dimensions
- `naturalWidth` / `naturalHeight`: Actual image dimensions

**What to check:**
- ✅ Alt text is exactly `"Pattern Growth"` (case-sensitive)
- ✅ Image src is correct: `/patterngrowth-full-logo.png`

#### `[Logo Debug] Theme State`
- `theme`: Current theme from `useTheme()` hook
- `resolvedTheme`: Resolved theme value
- `htmlHasDarkClass`: Whether `<html>` has `.dark` class
- `htmlClasses`: All classes on `<html>` element

**What to check:**
- ✅ `htmlHasDarkClass` is `true` in dark mode
- ✅ `htmlClasses` includes `"dark"` when dark mode is active

#### `[Logo Debug] Selector Matching`
- `html.querySelector(.dark img[alt="Pattern Growth"])`: First selector test
- `html.querySelector(html.dark img[alt="Pattern Growth"])`: Second selector test
- `document.querySelector(.dark img[alt="Pattern Growth"])`: Third selector test
- `img matches selector`: Whether the found element is our logo image

**What to check:**
- ✅ At least one selector returns `true`
- ✅ `img matches selector` is `true` (confirms our image is matched)

#### `[Logo Debug] CSS Filter`
- `filterValue`: Computed CSS filter value
- `filterApplied`: Whether filter is not `none` or empty
- `allComputedStyles`: Breakdown of filter properties

**What to check:**
- ✅ `filterApplied` is `true` in dark mode
- ✅ `filterValue` contains `brightness`, `saturate`, `hue-rotate`
- ✅ Filter value matches expected: `brightness(1.1) saturate(1.4) hue-rotate(-10deg) contrast(1.05)`

#### `[Logo Debug] Image Status`
- Logs when image finishes loading

**What to check:**
- ✅ Image loads successfully

### 2. Theme Toggle (`components/theme-toggle.tsx`)

Logs appear when:
- User clicks theme toggle button

**Log Categories:**

#### `[Theme Toggle] Toggling theme:`
- `currentTheme`: Theme before toggle
- `resolvedTheme`: Resolved theme before toggle
- `newTheme`: Theme being set
- `htmlHasDarkBefore`: Whether `<html>` had `.dark` class before toggle

#### `[Theme Toggle] After toggle:`
- `newTheme`: Theme that was set
- `htmlHasDarkAfter`: Whether `<html>` has `.dark` class after toggle
- `htmlClasses`: All classes on `<html>` after toggle

**What to check:**
- ✅ `htmlHasDarkAfter` changes correctly (false → true for dark, true → false for light)
- ✅ `htmlClasses` includes/excludes `"dark"` appropriately

### 3. Theme Provider (`components/theme-provider.tsx`)

Logs appear when:
- Component initializes
- `<html>` class attribute changes (via MutationObserver)

**Log Categories:**

#### `[Theme Provider] Initialized:`
- `htmlHasDarkClass`: Initial state of `.dark` class
- `htmlClasses`: Initial classes on `<html>`

#### `[Theme Provider] HTML class changed:`
- `hasDarkClass`: Whether `.dark` class is present after change
- `htmlClasses`: All classes after change
- `timestamp`: When the change occurred

**What to check:**
- ✅ MutationObserver detects class changes
- ✅ `.dark` class is added/removed correctly

## How to Use

1. **Open browser DevTools Console**
2. **Filter logs** by typing `[Logo Debug]`, `[Theme Toggle]`, or `[Theme Provider]` in console filter
3. **Toggle theme** using the theme toggle button
4. **Observe logs** to identify which validation fails

## Expected Behavior

### Light Mode
- `htmlHasDarkClass`: `false`
- `filterApplied`: `false` (no filter)
- Selector matching: All `false` (expected - no `.dark` class)

### Dark Mode
- `htmlHasDarkClass`: `true`
- `filterApplied`: `true`
- Selector matching: At least one `true`
- `img matches selector`: `true`

## Common Issues & Solutions

### Issue: Selector not matching
**Symptoms:**
- `img matches selector`: `false`
- All selector tests: `false`

**Possible causes:**
- Alt text doesn't match exactly (check `altExact` log)
- `.dark` class not on `<html>` (check `htmlHasDarkClass`)

### Issue: Filter not applying
**Symptoms:**
- `filterApplied`: `false` in dark mode
- `filterValue`: `"none"` or empty

**Possible causes:**
- CSS selector not matching (see above)
- CSS file not loaded
- Specificity conflict

### Issue: Theme not applying
**Symptoms:**
- `htmlHasDarkClass`: `false` when it should be `true`
- No `[Theme Provider] HTML class changed` logs

**Possible causes:**
- `next-themes` not working
- Hydration mismatch
- Theme state not persisting

## Next Steps

After reviewing logs:
1. Identify which validation fails
2. Check corresponding "What to check" items
3. Implement fix based on findings
4. Remove diagnostic logging after fix is confirmed

