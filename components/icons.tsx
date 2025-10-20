import * as React from "react"
import { LucideProps } from "lucide-react"

export const Icons = {
  logo: (props: LucideProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label="Pattern Growth logo"
      role="img"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12l2 2l4-4" />
    </svg>
  ),
}
