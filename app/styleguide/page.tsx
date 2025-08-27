import Link from "next/link";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Styleguide — Pattern Growth",
  description: "Visual check for Tailwind tokens and shadcn/ui components.",
};

function Swatch({ name, className }: { name: string; className: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`h-8 w-8 rounded-md border ${className}`} />
      <span className="text-sm text-muted-foreground">{name}</span>
    </div>
  );
}

export default function StyleguidePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-semibold tracking-tight">Styleguide</h1>
        <div className="flex items-center gap-2">
          <Button asChild variant="outline">
            <Link href="/">Back to site</Link>
          </Button>
          <Button asChild>
            <Link href="https://cal.com/pattern-growth" target="_blank" rel="noreferrer">
              Primary CTA
            </Link>
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="gap-2">
          <Badge className="w-fit">Tokens</Badge>
          <CardTitle className="text-base">Color tokens (bg/text/border)</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-3">
          <div className="space-y-3">
            <Swatch name="background" className="bg-background" />
            <Swatch name="foreground (text)" className="bg-foreground" />
            <Swatch name="card" className="bg-card" />
            <Swatch name="popover" className="bg-popover" />
          </div>
          <div className="space-y-3">
            <Swatch name="primary" className="bg-primary" />
            <Swatch name="primary-foreground" className="bg-primary-foreground" />
            <Swatch name="secondary" className="bg-secondary" />
            <Swatch name="secondary-foreground" className="bg-secondary-foreground" />
          </div>
          <div className="space-y-3">
            <Swatch name="muted" className="bg-muted" />
            <Swatch name="muted-foreground" className="bg-muted-foreground" />
            <Swatch name="accent" className="bg-accent" />
            <Swatch name="accent-foreground" className="bg-accent-foreground" />
          </div>
        </CardContent>
      </Card>

      <Separator className="my-8" />

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="gap-2">
            <Badge variant="secondary" className="w-fit">Buttons</Badge>
            <CardTitle className="text-base">Variants & States</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Button>Primary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link" asChild>
              <a href="https://patterngrowth.com" target="_blank" rel="noreferrer">Link</a>
            </Button>
            <Button disabled>Disabled</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="gap-2">
            <Badge variant="secondary" className="w-fit">Typography</Badge>
            <CardTitle className="text-base">Scale & Contrast</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <h1 className="text-3xl font-semibold tracking-tight">Heading H1</h1>
            <h2 className="text-2xl font-semibold tracking-tight">Heading H2</h2>
            <p className="text-muted-foreground">
              Body text using <code>text-muted-foreground</code> for secondary tone. Ensure legibility on both light and dark backgrounds.
            </p>
            <p>
              <strong>Emphasis:</strong> Buttons should use <code>bg-primary</code> with <code>text-primary-foreground</code>.
            </p>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-8" />

      <Card>
        <CardHeader className="gap-2">
          <Badge variant="secondary" className="w-fit">Cards</Badge>
          <CardTitle className="text-base">Surface & Elevation</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border bg-card p-4 shadow-sm">
            <div className="text-sm text-muted-foreground">bg-card + border</div>
            <div className="mt-2 text-foreground">Card content sample</div>
          </div>
          <div className="rounded-lg border bg-secondary p-4">
            <div className="text-sm text-muted-foreground">bg-secondary</div>
            <div className="mt-2 text-foreground">Secondary surface</div>
          </div>
          <div className="rounded-lg border bg-accent p-4">
            <div className="text-sm text-accent-foreground">bg-accent</div>
            <div className="mt-2 text-accent-foreground">Accent surface</div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 text-center text-sm text-muted-foreground">
        Toggle your system dark mode to validate tokens map correctly in both themes.
      </div>
    </main>
  );
}
