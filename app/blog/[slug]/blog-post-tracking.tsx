// app/blog/[slug]/blog-post-tracking.tsx
"use client";

import { useEffect } from 'react';
import { trackBlogPostView } from '@/lib/analytics';

interface BlogPostTrackingProps {
  postTitle: string;
  postAuthor: string;
  postSlug: string;
}

export function BlogPostTracking({ postTitle, postAuthor, postSlug }: BlogPostTrackingProps) {
  useEffect(() => {
    // Track blog post view when component mounts
    trackBlogPostView({
      post_title: postTitle,
      post_author: postAuthor,
      post_slug: postSlug,
    });
  }, [postTitle, postAuthor, postSlug]);

  return null; // This component only handles tracking
}

