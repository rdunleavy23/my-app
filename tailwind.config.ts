import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx,mdx}",
    "./lib/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        md: "8px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(15,26,38,0.06)",
      },
      transitionTimingFunction: {
        calm: "cubic-bezier(0.2, 0, 0, 1)",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
            a: {
              color: 'hsl(var(--primary))',
              '&:hover': {
                color: 'hsl(var(--primary) / 0.8)',
              },
              textDecoration: 'none',
            },
            h1: {
              color: 'hsl(var(--foreground))',
              fontWeight: '700',
            },
            h2: {
              color: 'hsl(var(--foreground))',
              fontWeight: '700',
            },
            h3: {
              color: 'hsl(var(--foreground))',
              fontWeight: '600',
            },
            h4: {
              color: 'hsl(var(--foreground))',
              fontWeight: '600',
            },
            strong: {
              color: 'hsl(var(--foreground))',
              fontWeight: '600',
            },
            p: {
              color: 'hsl(var(--muted-foreground))',
            },
            blockquote: {
              borderLeftColor: 'hsl(var(--primary))',
              color: 'hsl(var(--muted-foreground))',
              fontStyle: 'italic',
            },
            code: {
              color: 'hsl(var(--foreground))',
              backgroundColor: 'hsl(var(--muted))',
              borderRadius: '0.25rem',
              padding: '0.125rem 0.25rem',
              fontWeight: '500',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: 'hsl(var(--muted))',
              color: 'hsl(var(--foreground))',
            },
            thead: {
              borderBottomColor: 'hsl(var(--border))',
            },
            'tbody tr': {
              borderBottomColor: 'hsl(var(--border))',
            },
            table: {
              width: '100%',
              tableLayout: 'auto',
            },
            th: {
              color: 'hsl(var(--foreground))',
              fontWeight: '600',
              textAlign: 'left',
            },
            td: {
              color: 'hsl(var(--muted-foreground))',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;