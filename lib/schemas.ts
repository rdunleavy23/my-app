// lib/schemas.ts
export interface Person {
  name: string;
  jobTitle: string;
  description: string;
  image?: string;
}

export interface Service {
  name: string;
  description: string;
  url: string;
  provider: string;
  serviceType?: string;
  areaServed?: string;
  offers?: {
    price: string;
    priceCurrency: string;
    availability: string;
  };
}

export interface Organization {
  name: string;
  description: string;
  url: string;
  logo?: string;
  sameAs?: string[];
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint?: {
    contactType: string;
    email: string;
    telephone?: string;
  };
}

export interface BlogPosting {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author: {
    name: string;
    url?: string;
  };
  publisher: {
    name: string;
    logo: string;
  };
  mainEntityOfPage: {
    "@type": string;
    "@id": string;
  };
  keywords?: string[];
}

export interface FAQPage {
  mainEntity: Array<{
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }>;
}

export interface BreadcrumbList {
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }>;
}

export interface Review {
  reviewBody: string;
  author: {
    name: string;
    jobTitle: string;
    worksFor: string;
  };
}

export function createPersonSchema(person: Person) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.jobTitle,
    description: person.description,
    ...(person.image && { image: person.image }),
    worksFor: {
      "@type": "Organization",
      name: "Pattern Growth",
      url: "https://www.patterngrowth.com/"
    }
  };
}

export function createServiceSchema(service: Service) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      "@type": "Organization",
      name: service.provider,
    },
  };

  if (service.serviceType) schema.serviceType = service.serviceType;
  if (service.areaServed) schema.areaServed = service.areaServed;
  if (service.offers) schema.offers = service.offers;

  return schema;
}

export function createOrganizationSchema(org: Organization) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: org.name,
    description: org.description,
    url: org.url,
    ...(org.logo && { logo: org.logo }),
    ...(org.sameAs && { sameAs: org.sameAs }),
    ...(org.address && { address: org.address }),
    ...(org.contactPoint && { contactPoint: org.contactPoint }),
  };
}

export function createWebPageSchema(title: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: url,
    isPartOf: {
      "@type": "WebSite",
      name: "Pattern Growth",
      url: "https://www.patterngrowth.com/",
    },
  };
}

export function createBlogPostingSchema(post: BlogPosting) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.headline,
    description: post.description,
    url: post.url,
    datePublished: post.datePublished,
    ...(post.dateModified && { dateModified: post.dateModified }),
    author: {
      "@type": "Person",
      name: post.author.name,
      ...(post.author.url && { url: post.author.url }),
    },
    publisher: {
      "@type": "Organization",
      name: post.publisher.name,
      logo: {
        "@type": "ImageObject",
        url: post.publisher.logo,
      },
    },
    mainEntityOfPage: post.mainEntityOfPage,
    ...(post.keywords && { keywords: post.keywords.join(", ") }),
  };
}

export function createFAQSchema(faqs: FAQPage["mainEntity"]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs,
  };
}

export function createBreadcrumbSchema(breadcrumbs: BreadcrumbList["itemListElement"]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

export function createBreadcrumbListSchema(items: Array<{ label: string; href?: string; position: number }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: item.position || index + 1,
      name: item.label,
      item: item.href ? `https://www.patterngrowth.com${item.href}` : undefined,
    })),
  };
}

export function createReviewSchema(review: Review) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    reviewBody: review.reviewBody,
    author: {
      "@type": "Person",
      name: review.author.name,
      jobTitle: review.author.jobTitle,
      worksFor: {
        "@type": "Organization",
        name: review.author.worksFor,
      },
    },
    itemReviewed: {
      "@type": "Organization",
      name: "Pattern Growth",
      url: "https://www.patterngrowth.com/",
    },
  };
}

export function createComparisonPageSchema(title: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: url,
    isPartOf: {
      "@type": "WebSite",
      name: "Pattern Growth",
      url: "https://www.patterngrowth.com/",
    },
    about: [
      {
        "@type": "Service",
        name: "Strategy Sprint",
        description: "8-week growth strategy sprint delivering complete strategic architecture"
      },
      {
        "@type": "Service",
        name: "Fractional CMO",
        description: "Part-time CMO providing ongoing strategic leadership and oversight"
      }
    ]
  };
}
