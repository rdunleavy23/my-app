#!/usr/bin/env node

// Character count verification
const descriptions = {
  privacy: "Learn how Pattern Growth collects, uses, and protects your personal information. Our privacy policy explains data practices for our growth strategy consulting services and website visitors.",
  fractionalCMOServices: "Project-based fractional CMO services delivering complete growth strategy, marketing playbooks, and KPI models in 8 weeks—without ongoing retainers. Full ownership transfer for $1-5M B2B companies.",
  whatIsFractionalCMO: "Fractional CMO definition: Part-time marketing executive providing strategic leadership on retainer. Pattern Growth offers project-based alternative delivering complete 8-week growth strategy with full ownership transfer.",
  benefits: "Explore fractional CMO benefits and compare with Pattern Growth's alternative: complete ownership, faster delivery, no ongoing dependency. Learn why 8-week strategy sprints outperform traditional retainer models.",
  hourlyRate: "Fractional CMO rates typically $200-500/hour or $5K-15K/month on retainer. Pattern Growth offers fixed-price sprints: $9,500 for complete 8-week delivery with full ownership transfer."
};

console.log("Meta Description Character Counts:");
Object.entries(descriptions).forEach(([key, desc]) => {
  const length = desc.length;
  const status = length >= 150 && length <= 160 ? "✓" : "✗";
  console.log(`${key}: ${length} chars ${status}`);
});

