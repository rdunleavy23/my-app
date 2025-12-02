import { NavItem } from "@/lib/types"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Pattern Growth",
  url: "https://www.patterngrowth.com",
  description:
    "We don't just design strategy. We operationalize it into custom systems you can actually run.",
  mainNav: [
    {
      title: "Services",
      href: "/#services",
      description: "Our growth strategy services"
    },
    {
      title: "About Us",
      href: "/about",
      description: "Meet the team behind Pattern Growth"
    },
    {
      title: "How It Works",
      href: "/process",
      description: "How we build scalable marketing operations"
    },
    {
      title: "Blog",
      href: "/blog",
      description: "Growth strategy insights and case studies"
    },
    {
      title: "Schedule a Call →",
      href: "https://cal.com/pattern-growth",
      description: "Free strategy consultation"
    }
  ],
  links: {
    twitter: "https://twitter.com/patterngrowth",
    github: "https://github.com/rdunleavy",
    docs: "https://www.patterngrowth.com",
  },
}
