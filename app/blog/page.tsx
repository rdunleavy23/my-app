import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  summary: string;
  date: string; // YYYY-MM-DD
};

const posts: Post[] = [
  {
    slug: "strategy-that-ships",
    title: "Strategy That Ships: The 6-Week Growth Sprint",
    summary: "How to translate executive vision into a measurable growth engine—fast.",
    date: "2025-08-25"
  },
  // Add more posts here as you publish new pages in /blog/<slug>/page.tsx
];

export default function BlogIndex() {
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-tight">Pattern Growth Blog</h1>
      <p className="mt-2 text-muted-foreground">
        Practical playbooks for go-to-market, measurement, and compounding growth.
      </p>

      <ul className="mt-8 space-y-6">
        {posts.map((p) => (
          <li key={p.slug} className="group rounded-2xl border p-5 hover:shadow-sm transition">
            <time className="text-xs text-muted-foreground">{p.date}</time>
            <h2 className="mt-1 text-xl font-medium">
              <Link href={`/blog/${p.slug}`} className="underline-offset-4 group-hover:underline">
                {p.title}
              </Link>
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
