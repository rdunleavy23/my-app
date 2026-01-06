"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Force light mode - dark mode toggle is hidden
  React.useEffect(() => {
    if (typeof window === 'undefined') return

    // Always force light mode
    const html = document.documentElement
    html.classList.remove('dark')
    html.classList.add('light')
    localStorage.setItem('theme', 'light')

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
