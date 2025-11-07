"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()

  const handleToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    console.log('[Theme Toggle] Toggling theme:', {
      currentTheme: theme,
      resolvedTheme,
      newTheme,
      htmlHasDarkBefore: document.documentElement.classList.contains('dark'),
    })
    
    // Force apply theme class immediately (for React 19 compatibility)
    // This ensures the class is applied even if next-themes has a delay
    const html = document.documentElement
    if (newTheme === 'dark') {
      html.classList.remove('light')
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
      html.classList.add('light')
    }
    
    // Update localStorage to persist theme
    localStorage.setItem('theme', newTheme)
    
    // Call setTheme (next-themes will sync this)
    setTheme(newTheme)
    
    // Log after a brief delay to catch the change
    setTimeout(() => {
      console.log('[Theme Toggle] After toggle:', {
        newTheme,
        htmlHasDarkAfter: document.documentElement.classList.contains('dark'),
        htmlClasses: Array.from(document.documentElement.classList),
        localStorageTheme: localStorage.getItem('theme'),
      })
    }, 100)
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      className="h-9 w-9"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" aria-hidden="true" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" aria-hidden="true" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
