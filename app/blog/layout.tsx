import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Pattern Growth",
  description: "Insights on go-to-market, sprints, measurement, and growth systems.",
  openGraph: {
    title: "Blog | Pattern Growth",
    description: "Insights on go-to-market, sprints, measurement, and growth systems.",
    type: "website"
  }
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-10">
      {children}
    </section>
  );
}
