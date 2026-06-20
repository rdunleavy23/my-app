import { NavItem } from "@/lib/types"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Pattern Growth",
  url: "https://www.patterngrowth.com",
  description:
    "A senior-led growth strategy partner. We embed with your leadership and build a custom marketing strategy your team owns.",
  mainNav: [
    {
      title: "Services",
      href: "/#services",
      description: "How we partner with you on growth strategy"
    },
    {
      title: "About Us",
      href: "/about",
      description: "Meet the senior partners behind Pattern Growth"
    },
    {
      title: "How It Works",
      href: "/process",
      description: "How we embed and build your custom strategy"
    },
    {
      title: "Blog",
      href: "/blog",
      description: "Growth strategy insights and case studies"
    },
    {
      title: "Schedule a Call →",
      href: "https://cal.com/pattern-growth/30min",
      description: "Talk with a senior partner about fit"
    }
  ],
  links: {
    email: "mailto:hello@patterngrowth.com",
    phone: "tel:+14697089802",
    x: "https://x.com/patterngrowthco",
    instagram: "https://instagram.com/patterngrowthco",
    linkedin: "https://linkedin.com/company/patterngrowth",
    twitter: "https://twitter.com/patterngrowth",
    github: "https://github.com/rdunleavy",
    docs: "https://www.patterngrowth.com",
  },
}
