# Google Search Console Setup Guide

## Overview

This guide provides step-by-step instructions for setting up Google Search Console (GSC) for Pattern Growth and submitting the sitemap for indexing.

## Prerequisites

- Google account with access to Google Search Console
- Website deployed to production (https://www.patterngrowth.com)
- Sitemap accessible at: https://www.patterngrowth.com/sitemap.xml

## Step 1: Add Property to Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Select "URL prefix" method
4. Enter: `https://www.patterngrowth.com`
5. Click "Continue"

## Step 2: Verify Ownership

Choose one of the following verification methods:

### Option A: HTML File Upload (Recommended)
1. Download the HTML verification file from GSC
2. Upload it to `/public/` directory in your Next.js project
3. Commit and deploy
4. Click "Verify" in GSC

### Option B: HTML Tag
1. Copy the meta tag from GSC
2. Add it to `app/layout.tsx` in the `<head>` section
3. Commit and deploy
4. Click "Verify" in GSC

### Option C: DNS Record
1. Add the TXT record provided by GSC to your domain's DNS
2. Wait for DNS propagation (can take up to 48 hours)
3. Click "Verify" in GSC

## Step 3: Submit Sitemap

1. In Google Search Console, navigate to **Sitemaps** (left sidebar)
2. Enter: `sitemap.xml`
3. Click "Submit"
4. Wait for Google to process (usually within a few hours)

**Expected Result:**
- Status: "Success"
- Discovered URLs: Should show all pages from your sitemap

## Step 4: Configure Settings

### Coverage Settings
1. Go to **Settings** → **Crawling**
2. Verify "Crawl rate" is set to "Let Google optimize"
3. Enable "Mobile-first indexing" (if not already enabled)

### URL Inspection
1. Use **URL Inspection** tool to test individual pages
2. Test homepage: `https://www.patterngrowth.com/`
3. Verify canonical URL is correct
4. Check for any indexing issues

## Step 5: Set Up Monitoring

### Performance Monitoring
1. Go to **Performance** section
2. Monitor:
   - Total clicks
   - Total impressions
   - Average CTR
   - Average position
3. Set up date range filters for monthly reporting

### Coverage Monitoring
1. Go to **Coverage** section
2. Monitor for:
   - Valid pages (should increase over time)
   - Errors (404s, server errors)
   - Excluded pages (verify they should be excluded)

### Mobile Usability
1. Go to **Mobile Usability** section
2. Check for mobile-friendly issues
3. Fix any reported problems

## Step 6: Set Up Alerts

### Email Notifications
1. Go to **Settings** → **Users and permissions**
2. Add email addresses for notifications
3. Configure alert preferences:
   - Security issues
   - Manual actions
   - Coverage issues

### Search Console API (Optional)
For automated monitoring, set up Search Console API:
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable "Google Search Console API"
4. Create credentials (OAuth 2.0)
5. Use API to programmatically fetch data

## Step 7: Initial Checks

After setup, verify:

- [ ] Sitemap submitted successfully
- [ ] Homepage is indexed (check with `site:www.patterngrowth.com`)
- [ ] Key pages are indexed (about, process, blog)
- [ ] No critical errors in Coverage report
- [ ] Mobile usability passes
- [ ] Core Web Vitals data is available (may take a few days)

## Step 8: Regular Maintenance

### Weekly
- Check Coverage report for new errors
- Review Performance data
- Monitor for security issues

### Monthly
- Review top-performing pages
- Identify pages with low CTR (optimize meta descriptions)
- Check for new indexing opportunities
- Review search queries for keyword opportunities

### Quarterly
- Full site audit using GSC data
- Review and update sitemap priorities
- Analyze competitor performance (if applicable)
- Update documentation based on findings

## Troubleshooting

### Sitemap Not Processing
- Verify sitemap is accessible: `https://www.patterngrowth.com/sitemap.xml`
- Check for XML syntax errors
- Ensure all URLs in sitemap are absolute
- Verify robots.txt doesn't block sitemap

### Pages Not Indexing
- Use URL Inspection tool to test individual pages
- Check for `noindex` tags in page metadata
- Verify canonical URLs are correct
- Check for crawl errors in Coverage report

### Low Impressions
- Review search queries in Performance report
- Optimize title tags and meta descriptions
- Improve internal linking
- Create more targeted content

## Resources

- [Google Search Console Help](https://support.google.com/webmasters)
- [Sitemap Guidelines](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [Search Console API Documentation](https://developers.google.com/webmaster-tools)

## Notes

- It can take several days for Google to fully crawl and index your site
- Sitemap submission doesn't guarantee indexing, but helps discovery
- Regular content updates help maintain indexing freshness
- Monitor GSC regularly for best results

