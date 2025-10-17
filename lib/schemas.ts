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
}

export interface Organization {
  name: string;
  description: string;
  url: string;
  logo?: string;
  sameAs?: string[];
}

export function createPersonSchema(person: Person) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.jobTitle,
    description: person.description,
    ...(person.image && { image: person.image }),
  };
}

export function createServiceSchema(service: Service) {
  return {
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
      url: "https://www.patterngrowth.com",
    },
  };
}
