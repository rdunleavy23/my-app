// components/ui/newsletter-signup.tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Loader2 } from "lucide-react"

interface NewsletterSignupProps {
  title?: string
  description?: string
  placeholder?: string
  buttonText?: string
  source?: string // Track where signup came from
  variant?: "default" | "inline" | "compact"
}

export function NewsletterSignup({
  title = "Get free growth tools",
  description = "Download our templates and calculators. No fluff, just tools you'll actually use.",
  placeholder = "your@email.com",
  buttonText = "Get Free Tools",
  source = "blog",
  variant = "default"
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      // TODO: Replace with actual Loops.so API call tomorrow
      // For now, just show success after 1 second
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Placeholder: This is where you'll add Loops.so integration
      // const response = await fetch('/api/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, source })
      // })

      setStatus("success")
      setMessage("Check your email for the download links!")
      setEmail("")
    } catch (error) {
      setStatus("error")
      setMessage("Something went wrong. Please try again.")
    }
  }

  if (variant === "inline") {
    return (
      <div className="my-8 p-6 bg-primary/5 border-l-4 border-primary rounded-r-lg">
        {status === "success" ? (
          <div className="flex items-start gap-3 text-primary">
            <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">You're all set!</p>
              <p className="text-sm text-muted-foreground mt-1">{message}</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <p className="font-semibold text-foreground mb-1">{title}</p>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder={placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
                disabled={status === "loading"}
              />
              <Button
                type="submit"
                disabled={status === "loading"}
                className="whitespace-nowrap"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  buttonText
                )}
              </Button>
            </div>
            {status === "error" && (
              <p className="text-sm text-destructive">{message}</p>
            )}
          </form>
        )}
      </div>
    )
  }

  if (variant === "compact") {
    return (
      <div className="space-y-3">
        {status === "success" ? (
          <div className="flex items-center gap-2 text-primary text-sm">
            <CheckCircle2 className="h-4 w-4" />
            <span>{message}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              type="email"
              placeholder={placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="text-sm"
              disabled={status === "loading"}
            />
            <Button
              type="submit"
              size="sm"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <Loader2 className="h-3 w-3 animate-spin" />
              ) : (
                "Subscribe"
              )}
            </Button>
          </form>
        )}
      </div>
    )
  }

  return (
    <Card className="border-primary/20">
      <CardContent className="p-6">
        {status === "success" ? (
          <div className="flex flex-col items-center text-center gap-3">
            <CheckCircle2 className="h-12 w-12 text-primary" />
            <div>
              <p className="font-semibold text-foreground mb-1">You're all set!</p>
              <p className="text-sm text-muted-foreground">{message}</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder={placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
                disabled={status === "loading"}
              />
              <Button
                type="submit"
                disabled={status === "loading"}
                className="sm:w-auto"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  buttonText
                )}
              </Button>
            </div>
            {status === "error" && (
              <p className="text-sm text-destructive">{message}</p>
            )}
          </form>
        )}
      </CardContent>
    </Card>
  )
}
