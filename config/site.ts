import { NavItem } from "@/lib/types"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "PatternGrowth",
  url: "https://www.patterngrowth.com",
  description:
    "We don't just design strategy. We operationalize it into systems your team can actually run.",
  mainNav: [
    {
      title: "About",
      href: "/about",
      description: "Meet the team behind Pattern Growth"
    },
    {
      title: "Our Process",
      href: "/process",
      description: "How we build scalable marketing operations"
    },
    {
      title: "Start a Conversation",
      href: "https://cal.com/pattern-growth/30min",
      description: "Free strategy consultation"
    }
  ],
  links: {
    twitter: "https://twitter.com/patterngrowth",
    github: "https://github.com/rdunleavy",
    docs: "https://patterngrowth.com",
  },
}
