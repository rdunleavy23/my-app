"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Diagnostic logging and theme sync for theme provider
  React.useEffect(() => {
    if (typeof window === 'undefined') return

    // Sync theme from localStorage on mount (fallback for React 19 compatibility)
    const storedTheme = localStorage.getItem('theme')
    const html = document.documentElement
    if (storedTheme === 'dark') {
      html.classList.remove('light')
      html.classList.add('dark')
    } else if (storedTheme === 'light') {
      html.classList.remove('dark')
      html.classList.add('light')
    }

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const html = document.documentElement
          const hasDark = html.classList.contains('dark')
          console.log('[Theme Provider] HTML class changed:', {
            hasDarkClass: hasDark,
            htmlClasses: Array.from(html.classList),
            timestamp: new Date().toISOString(),
          })
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    // Initial log
    console.log('[Theme Provider] Initialized:', {
      htmlHasDarkClass: document.documentElement.classList.contains('dark'),
      htmlClasses: Array.from(document.documentElement.classList),
      storedTheme,
    })

    return () => observer.disconnect()
  }, [])

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
      storageKey="theme"
      enableColorScheme={false}
    >
      {children}
    </NextThemesProvider>
  );
}
