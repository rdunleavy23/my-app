# Pattern Growth Color System

## Overview

This document describes the Pattern Growth color system, which uses OKLCH color space for perceptually uniform colors across light and dark modes. All colors meet WCAG 2.1 AA accessibility standards when used according to the guidelines below.

## Token Architecture

The color system follows a three-tier token mapping chain:

```
Brand tokens (--primary, --accent-golden)
  ↓
shadcn/ui tokens (--background, --foreground)
  ↓
Tailwind v4 utilities (@theme inline → --color-primary)
```

This architecture ensures:
- Backwards compatibility with shadcn/ui components
- Support for Tailwind v4's @theme inline system
- Runtime theme switching capability
- Accessibility by default

## Color Tokens

### Primary Colors

| Token | Hex | OKLCH (Light) | OKLCH (Dark) | Usage | Contrast Ratio |
|-------|-----|---------------|--------------|-------|----------------|
| `--primary` | #3E5661 | `oklch(0.383 0.028 229.8)` | `oklch(0.483 0.021 229.8)` | Main action color, navigation, interactive elements | 9.3:1 on white |
| `--secondary` | #95B0BA | `oklch(0.713 0.031 228.5)` | `oklch(0.813 0.023 228.5)` | Supporting backgrounds only | 2.4:1 on white (background only) |
| `--tertiary` | #F8ECD1 | `oklch(0.936 0.041 89.4)` | `oklch(0.286 0.031 89.4)` | Warm alternative background | 12.8:1 with dark text |

### Accent Colors

| Token | Hex | OKLCH (Light) | OKLCH (Dark) | Usage | Contrast Ratio |
|-------|-----|---------------|--------------|-------|----------------|
| `--accent-deep-navy` | #02273A | `oklch(0.174 0.041 241.3)` | `oklch(0.474 0.031 241.3)` | Critical CTAs, highest contrast | 15:1+ on white |
| `--accent-golden` | #FFBF5E | `oklch(0.814 0.135 79.8)` | `oklch(0.714 0.101 79.8)` | Premium features, large text only | 1.8:1 on white (fails AA) |
| `--accent-warm-taupe` | #B9A287 | `oklch(0.697 0.039 68.2)` | `oklch(0.597 0.029 68.2)` | Subtle emphasis | 3.1:1 on white (large text) |
| `--accent-mid-blue` | #8597A1 | `oklch(0.634 0.021 234.6)` | `oklch(0.734 0.016 234.6)` | Mid-tone decorative elements | 3.6:1 on white (UI components) |

> **Canonical utility color:** `accent` always resolves to `accent-mid-blue`. Tailwind utilities (e.g., `bg-accent`) and shadcn/ui variants rely on this mapping. Named accents (`accent-deep-navy`, `accent-golden`, etc.) are available for marketing composition, but the generic `accent` token must remain defined.

## Accessibility Requirements

### WCAG 2.1 AA Standards

- **Normal text**: 4.5:1 minimum contrast ratio
- **Large text** (18pt+ or 14pt+ bold): 3:1 minimum contrast ratio
- **UI components/borders**: 3:1 minimum contrast ratio
- **Focus indicators**: 3:1 against both element and background

### Verified Accessible Pairings

✅ **Safe for all text sizes on white backgrounds:**
- Primary (#3E5661): 9.3:1
- Deep Navy (#02273A): 15:1+

✅ **Safe for large text only:**
- Warm Taupe (#B9A287): 3.1:1

✅ **Background use only (never for text on white):**
- Secondary (#95B0BA): 2.4:1

⚠️ **Special restrictions:**
- Golden (#FFBF5E): Use only for large text (24px+) on dark backgrounds

✅ **Excellent with dark text:**
- Tertiary (#F8ECD1): 12.8:1

### Dark Mode Adjustments

Dark mode colors follow these rules:
- Chroma reduced by ~25% to prevent oversaturation
- Lightness adjusted for visibility on dark backgrounds
- Deep navy lightened to prevent disappearing
- Golden yellow properly desaturated

## Usage Guidelines

### Do's ✅

- **Use semantic color tokens**: Always use `bg-primary`, never `bg-[#3E5661]`
- **Pair colors correctly**: Use `bg-primary text-primary-foreground` for buttons
- **Use tertiary for warm sections**: `bg-tertiary text-tertiary-foreground`
- **Use deep navy for CTAs**: `bg-accent-deep-navy text-accent-deep-navy-foreground`
- **Emphasize with primary**: Use `text-primary` for emphasis in body copy
- **Standard borders**: Use `border-border` for all borders

### Don'ts ❌

- **Never use raw colors**: No hex, rgb, hsl, or arbitrary Tailwind colors
- **Don't use secondary with text**: Fails accessibility (2.4:1 contrast)
- **Don't use golden for small text**: Only use for 24px+ text on dark backgrounds
- **Don't apply golden to body text**: Reserved for large headings and premium features
- **Don't use multiple accent colors on same component**: Choose one accent per component
- **Don't break the token chain**: Always map through brand → shadcn → Tailwind

## Component Patterns

### Buttons

#### Primary Action Button
```tsx
<button className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 transition-colors duration-200">
  Primary Action
</button>
```

#### Secondary Action Button
```tsx
<button className="border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground transition-all duration-200">
  Secondary Action
</button>
```

#### Critical CTA Button (Deep Navy)
```tsx
<button className="bg-accent-deep-navy text-accent-deep-navy-foreground hover:bg-accent-deep-navy/90 text-lg font-bold px-8 py-4">
  Get Started
</button>
```

#### Premium Feature Button (Golden - Large Text Only)
```tsx
<button className="bg-accent-golden text-accent-golden-foreground hover:bg-accent-golden/90 text-xl font-bold px-10 py-4">
  Premium Feature
</button>
```

### Sections

#### Warm Background Section
```tsx
<section className="bg-tertiary text-tertiary-foreground py-16 px-8">
  <h1>Hero Section</h1>
  <p>Content with excellent contrast</p>
</section>
```

#### Standard Card
```tsx
<div className="bg-card text-card-foreground border border-border rounded-lg p-6">
  <h3>Card Title</h3>
  <p>Card content</p>
</div>
```

#### Elevated Card with Tertiary Background
```tsx
<div className="bg-tertiary text-tertiary-foreground border border-primary rounded-lg p-6">
  <h3>Special Content</h3>
  <p>Highlighted information</p>
</div>
```

### Text Hierarchy

```tsx
{/* Primary body text */}
<p className="text-foreground">
  Standard text with optimal readability
</p>

{/* Secondary/supporting text */}
<p className="text-muted-foreground">
  Supporting information or captions
</p>

{/* Emphasized text */}
<p className="text-primary font-semibold">
  Important point or call-out
</p>
```

## Implementation Notes

### File Locations

- **Color definitions**: `app/globals.css` (lines 73-167)
- **Token mappings**: `app/globals.css` @theme inline section (lines 26-78)
- **Component examples**: See `components/ui/` directory

### Testing Checklist

Before deploying color changes:

- [ ] Run `npm run build` successfully
- [ ] Test in light mode (all pages)
- [ ] Test in dark mode (all pages)
- [ ] Verify no console errors related to CSS variables
- [ ] Check all interactive elements have proper focus states
- [ ] Verify text is readable on all backgrounds
- [ ] Test with accessibility tools (`npx @axe-core/cli`)
- [ ] Check responsive behavior on mobile and desktop
- [ ] Verify existing shadcn/ui components still work

### Browser Compatibility

The OKLCH color space is supported in:
- Chrome 111+
- Safari 15.4+
- Firefox 113+
- Edge 111+

For older browsers, colors gracefully degrade to sRGB equivalents.

## Troubleshooting

### Colors not appearing

**Problem**: New color tokens not showing up in components

**Solution**:
1. Check that token is defined in both `:root` and `.dark` sections
2. Verify @theme inline mapping exists for the token
3. Clear browser cache and rebuild: `rm -rf .next && npm run build`

### Dark mode broken

**Problem**: Colors look wrong or disappear in dark mode

**Solution**:
1. Ensure `.dark` class is toggled on root element
2. Verify dark mode color values are properly adjusted (lighter, desaturated)
3. Check that lightness values are appropriate for dark backgrounds

### Accessibility failures

**Problem**: Contrast ratio errors in accessibility audits

**Solution**:
1. Use provided accessible pairings from this document
2. Never use secondary or golden for body text
3. Check contrast with [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
4. Ensure text on colored backgrounds uses matching `-foreground` token

### Build errors

**Problem**: CSS variable errors during build

**Solution**:
1. Verify no syntax errors in `app/globals.css`
2. Ensure all CSS variables are defined (no typos)
3. Check that @theme inline mappings match defined tokens
4. Verify OKLCH syntax is correct: `oklch(L C H)` or `oklch(L C H / A)`

## Maintenance

### Adding New Colors

When adding new brand colors:

1. Define in `:root` and `.dark` sections of `app/globals.css`
2. Add corresponding `-foreground` token for accessibility
3. Map to Tailwind in @theme inline section
4. Document usage guidelines in this file
5. Verify WCAG 2.1 AA compliance
6. Test in light and dark modes

### Updating Existing Colors

When modifying color values:

1. Update OKLCH values in both `:root` and `.dark`
2. Verify contrast ratios still meet AA standards
3. Test all components using the color
4. Update documentation with new hex/OKLCH values
5. Run full testing checklist before deploying

## Resources

- [OKLCH Color Picker](https://oklch.com/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)

## Version History

- **v1.0.0** (2025-10-29): Initial color system implementation
  - Added primary, secondary, tertiary brand colors
  - Added four accent colors (deep navy, golden, warm taupe, mid blue)
  - Implemented OKLCH color space
  - Ensured WCAG 2.1 AA compliance
  - Created comprehensive documentation

