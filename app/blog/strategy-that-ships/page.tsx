import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategy That Ships: The 6-Week Growth Sprint | Pattern Growth",
  description: "Turn executive vision into a measurable growth engine—fast.",
  openGraph: {
    title: "Strategy That Ships: The 6-Week Growth Sprint",
    description: "Turn executive vision into a measurable growth engine—fast.",
    type: "article",
    url: "https://patterngrowth.com/blog/strategy-that-ships"
  },
  robots: { index: true, follow: true }
};

export default function BlogPost() {
  const published = "2025-08-25";
  const modified = "2025-08-25";
  const url = "https://patterngrowth.com/blog/strategy-that-ships";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Strategy That Ships: The 6-Week Growth Sprint",
    datePublished: published,
    dateModified: modified,
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: "Pattern Growth" },
    publisher: {
      "@type": "Organization",
      name: "Pattern Growth",
      logo: { "@type": "ImageObject", url: "https://patterngrowth.com/icon.png" }
    },
    description: "Turn executive vision into a measurable growth engine—fast."
  };

  return (
    <article className="prose prose-zinc dark:prose-invert max-w-none">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header>
        <p className="text-sm text-muted-foreground">{published}</p>
        <h1>Strategy That Ships: The 6-Week Growth Sprint</h1>
        <p className="lead">
          Most teams over-plan and under-ship. Here’s how to compress strategy and execution into a
          6-week sprint you can see, measure, and scale.
        </p>
      </header>

      <h2>Why sprints beat retainers</h2>
      <p>
        Retainers drag; sprints force clarity. In 6 weeks you can align leadership, codify
        positioning, and instrument KPIs.
      </p>

      <h2>The 6-week outline</h2>
      <ol>
        <li>
          <strong>Weeks 1–2:</strong> Alignment, positioning, messaging, journey map.
        </li>
        <li>
          <strong>Weeks 3–4:</strong> Channel plan, KPI framework, decision playbooks.
        </li>
        <li>
          <strong>Weeks 5–6:</strong> Live dashboards, enablement, optimization.
        </li>
      </ol>

      <h2>What “done” looks like</h2>
      <ul>
        <li>Dashboards showing pipeline, CAC, conversion, payback.</li>
        <li>Campaigns mapped to business metrics (not vanity).</li>
        <li>Team playbooks that scale beyond individuals.</li>
      </ul>

      <h2>Next step</h2>
      <p>
        Want the sprint outline tailored to your stage and stack? Book a strategy call.
      </p>
    </article>
  );
}
