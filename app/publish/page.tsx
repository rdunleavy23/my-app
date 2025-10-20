'use client';

import { useEffect, useState } from 'react';
import { trackFormStart, trackFormSubmit, trackFormError } from '@/lib/analytics';

export default function PublishPage() {
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('Ryan');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [publishedUrl, setPublishedUrl] = useState('');
  const [isFormStarted, setIsFormStarted] = useState(false);

  // Track form start when user begins typing
  useEffect(() => {
    if ((password || title || description || content) && !isFormStarted) {
      setIsFormStarted(true);
      trackFormStart({
        form_name: 'publish_post',
      });
    }
  }, [password, title, description, content, isFormStarted]);

  // Poll until new page is live
  useEffect(() => {
    if (!publishedUrl) return;
    const interval = setInterval(async () => {
      try {
        const res = await fetch(publishedUrl, { method: 'GET', cache: 'no-store' });
        if (res.ok) {
          setIsLive(true);
          clearInterval(interval);
        }
      } catch {}
    }, 5000);
    return () => clearInterval(interval);
  }, [publishedUrl]);

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setError('');
    
    // Track validation errors
    if (!password || !title || !description || !content) {
      const missingFields = [];
      if (!password) missingFields.push('password');
      if (!title) missingFields.push('title');
      if (!description) missingFields.push('description');
      if (!content) missingFields.push('content');
      
      trackFormError({
        form_name: 'publish_post',
        error_type: 'validation',
        field_name: missingFields.join(', '),
        error_message: 'All fields are required.',
      });
      
      setError('All fields are required.');
      return;
    }
    
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/publish-post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, title, description, author, content }),
      });
      const data = await res.json();
      setIsSubmitting(false);
      
      if (!res.ok) {
        trackFormError({
          form_name: 'publish_post',
          error_type: 'server',
          error_message: data.error || 'Failed to publish.',
        });
        setError(data.error || 'Failed to publish.');
        return;
      }
      
      // Track successful submission
      trackFormSubmit({
        form_name: 'publish_post',
        form_fields_count: 5,
      });
      
      if (data.url) setPublishedUrl(data.url);
    } catch (error) {
      setIsSubmitting(false);
      trackFormError({
        form_name: 'publish_post',
        error_type: 'network',
        error_message: 'Network error.',
      });
      setError('Network error.');
    }
  };

  const resetForm = () => {
    setPassword(''); setTitle(''); setDescription('');
    setAuthor('Ryan'); setContent('');
    setError(''); setPublishedUrl(''); setIsLive(false);
    setIsFormStarted(false); // Reset form start tracking
  };

  if (publishedUrl) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="text-6xl">✅</div>
          <h2 className="text-2xl font-bold text-foreground">Post Published</h2>
          <p className="text-muted-foreground">
            We’re deploying your site. Usually under a minute.
          </p>
          <div className="flex flex-col gap-3 items-center">
            <button
              onClick={() => isLive && window.open(publishedUrl, '_blank')}
              disabled={!isLive}
              className={`w-full px-6 py-3 rounded-md font-medium ${
                isLive
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                  : 'bg-muted text-muted-foreground cursor-not-allowed'
              }`}
            >
              {isLive ? 'View Post' : 'Waiting for site to update…'}
            </button>
            <button
              onClick={async () => {
                try { await navigator.clipboard.writeText(`${window.location.origin}${publishedUrl}`); } catch {}
              }}
              className="w-full px-6 py-3 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90"
            >
              Copy Link
            </button>
            <button
              onClick={resetForm}
              className="w-full px-6 py-3 border border-border rounded-md hover:bg-muted"
            >
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
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Password</label>
            <input type="password" className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:ring-2 focus:ring-primary" placeholder="Enter publish password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Title</label>
            <input type="text" className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:ring-2 focus:ring-primary" placeholder="Blog post title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Description</label>
            <input type="text" className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:ring-2 focus:ring-primary" placeholder="Short description for SEO" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Author</label>
            <input type="text" className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:ring-2 focus:ring-primary" placeholder="Author name" value={author} onChange={(e) => setAuthor(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Content (Markdown)</label>
            <textarea className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:ring-2 focus:ring-primary font-mono text-sm" rows={16} placeholder="Write your markdown content here..." value={content} onChange={(e) => setContent(e.target.value)} />
          </div>
          {error && <div className="p-4 bg-destructive/10 border border-destructive rounded-md"><p className="text-destructive text-sm">{error}</p></div>}
          <button type="submit" disabled={isSubmitting} className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 disabled:opacity-50">{isSubmitting ? 'Publishing…' : 'Publish Post'}</button>
        </form>
      </div>
    </div>
  );
}
