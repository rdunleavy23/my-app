import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://patterngrowth.com";
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1.0 },
  ];
}
