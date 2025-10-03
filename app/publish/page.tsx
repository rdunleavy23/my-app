"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const metadata = { robots: 'noindex, nofollow' };

export default function PublishPage() {
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("Ryan");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [publishedUrl, setPublishedUrl] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    if (!password || !title || !description || !content) {
      setError("All fields are required");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/publish-post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, title, description, author, content }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to publish");
        setIsSubmitting(false);
        return;
      }

      setPublishedUrl(data.url);
      router.refresh();
    } catch (err) {
      setError("Network error");
      setIsSubmitting(false);
    }
  };

  if (publishedUrl) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="text-6xl">✅</div>
          <h2 className="text-2xl font-bold text-foreground">Blog Published!</h2>
          <p className="text-muted-foreground">Your post is live and will appear after deployment.</p>
          <div className="flex gap-4 justify-center">
            <Link href={publishedUrl} className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
              View Post
            </Link>
            <button onClick={() => { setPublishedUrl(""); setTitle(""); setDescription(""); setContent(""); setPassword(""); }} 
              className="px-6 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90">
              Write Another
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Publish Blog Post</h1>
          <p className="text-muted-foreground">Write and publish directly to your site</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Password</label>
            <input type="password" className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:ring-2 focus:ring-primary" 
              placeholder="Enter publish password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Title</label>
            <input type="text" className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:ring-2 focus:ring-primary" 
              placeholder="Blog post title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Description</label>
            <input type="text" className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:ring-2 focus:ring-primary" 
              placeholder="Short description for SEO" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Author</label>
            <input type="text" className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:ring-2 focus:ring-primary" 
              placeholder="Author name" value={author} onChange={(e) => setAuthor(e.target.value)} />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Content (Markdown)</label>
            <textarea className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:ring-2 focus:ring-primary font-mono text-sm" 
              placeholder="Write your markdown content here..." rows={16} value={content} onChange={(e) => setContent(e.target.value)} />
          </div>

          {error && (
            <div className="p-4 bg-destructive/10 border border-destructive rounded-md">
              <p className="text-destructive text-sm">{error}</p>
            </div>
          )}

          <button onClick={handleSubmit} disabled={isSubmitting} 
            className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 disabled:opacity-50">
            {isSubmitting ? "Publishing..." : "Publish Post"}
          </button>
        </div>
      </div>
    </div>
  );
}
