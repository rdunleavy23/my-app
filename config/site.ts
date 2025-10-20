import { NavItem } from "@/lib/types"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "PatternGrowth",
  url: "https://www.patterngrowth.com",
  description:
    "We don't just design strategy. We operationalize it into systems your team can actually run.",
  mainNav: [
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
      title: "Schedule a Call →",
      href: "https://cal.com/pattern-growth",
      description: "Free strategy consultation"
    }
  ],
  links: {
    twitter: "https://twitter.com/patterngrowth",
    github: "https://github.com/rdunleavy",
    docs: "https://patterngrowth.com",
  },
}
