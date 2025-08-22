"use client"

import { useState } from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Menu } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  company: z.string().optional(),
  note: z.string().optional(),
})

export default function Home() {
  const [openDemo, setOpenDemo] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", company: "", note: "" },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // For now, just log; later you can POST to an API route or Formspree.
    console.log("Contact form:", values)
    alert("Thanks! We’ll reach out shortly.")
    form.reset()
  }

  return (
    <TooltipProvider>
      <main className="flex min-h-screen flex-col">
        {/* Top bar */}
        <header className="sticky top-0 z-40 w-full border-b bg-white/70 backdrop-blur">
          <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              Pattern Growth
            </Link>

            <div className="hidden md:block">
              <NavigationMenu>
                <NavigationMenuList className="items-center gap-2">
                  <NavigationMenuItem>
                    <Link href="#sprint" legacyBehavior passHref>
                      <NavigationMenuLink className="px-3 py-2 text-sm">
                        Sprint
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="#who" legacyBehavior passHref>
                      <NavigationMenuLink className="px-3 py-2 text-sm">
                        Who
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="#compare" legacyBehavior passHref>
                      <NavigationMenuLink className="px-3 py-2 text-sm">
                        Why Us
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="#proof" legacyBehavior passHref>
                      <NavigationMenuLink className="px-3 py-2 text-sm">
                        Proof
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="#contact" legacyBehavior passHref>
                      <NavigationMenuLink className="px-3 py-2 text-sm">
                        Contact
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="sm">Book a Call</Button>
                      </TooltipTrigger>
                      <TooltipContent>Connect to Calendly later</TooltipContent>
                    </Tooltip>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <nav className="mt-8 grid gap-4">
                  <a href="#sprint">Sprint</a>
                  <a href="#who">Who</a>
                  <a href="#compare">Why Us</a>
                  <a href="#proof">Proof</a>
                  <a href="#faq">FAQ</a>
                  <a href="#contact">Contact</a>
                  <Button className="mt-2">Book a Call</Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </header>

        {/* Hero */}
        <section className="mx-auto max-w-4xl px-4 py-20 text-center space-y-6">
          <Badge className="mx-auto w-fit">Growth Strategy Sprints</Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Skip the Fractional CMO. Get Strategy That Ships.
          </h1>
          <p className="text-lg text-neutral-600">
            Turn executive vision into measurable growth—in weeks, not months.
          </p>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Most companies get stuck between big strategy and daily tactics. Pattern Growth bridges that gap with
            focused 4–8 week sprints that deliver strategic clarity and the dashboards to track what actually moves the
            needle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Book Your Strategy Call</Button>
            <Dialog open={openDemo} onOpenChange={setOpenDemo}>
              <DialogTrigger asChild>
                <Button size="lg" variant="outline">
                  See Live Dashboard Examples
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Sample Dashboard (placeholder)</DialogTitle>
                </DialogHeader>
                <div className="rounded-md border p-6 text-sm text-neutral-600">
                  Drop an image or Loom embed later. Use this dialog as a lightweight demo.
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        <Separator />

        {/* Sprint breakdown using Tabs */}
        <section id="sprint" className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold text-center mb-8">The Pattern Growth Sprint</h2>

          <Tabs defaultValue="foundation" className="mx-auto max-w-5xl">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="foundation">Week 1–2: Foundation</TabsTrigger>
              <TabsTrigger value="design">Week 3–4: Execution Design</TabsTrigger>
              <TabsTrigger value="instrument">Week 5–8: Instrumentation</TabsTrigger>
            </TabsList>

            <TabsContent value="foundation">
              <div className="mt-6 grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Executive Alignment</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-neutral-600">
                    Goals, constraints, and success metrics clarified with leadership.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Positioning & Messaging</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-neutral-600">
                    Narrative, value props, and ICP reality check.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Journey Mapping</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-neutral-600">
                    Funnel friction and opportunity analysis.
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="design">
              <div className="mt-6 grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Channel Strategy</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-neutral-600">
                    Paid, content, lifecycle, and partner motions prioritized.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>KPI Framework</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-neutral-600">
                    Measurable outcomes mapped to business metrics.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Playbooks</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-neutral-600">
                    Decision cadences, experiment logs, enablement.
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="instrument">
              <div className="mt-6 grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Dashboards</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-neutral-600">
                    Live KPIs across paid, owned, and pipeline.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Tracking</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-neutral-600">
                    Source mapping, unified attribution, alerting.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Optimization</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-neutral-600">
                    Weekly reviews drive spend reallocation and wins.
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Who this is for */}
        <section id="who" className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold text-center mb-10">Who This Is For</h2>
          <div className="grid gap-6 md:grid-cols-3 text-neutral-700">
            <Card>
              <CardContent className="p-6">
                Series A–B companies ($1M–$20M ARR) needing senior strategy fast without a full-time CMO or long
                fractional retainer.
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                Venture-backed startups with board pressure to show ROI and limited bandwidth to hire and onboard.
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                Growing companies with scattered tactics—ads, content, campaigns—without measurement or alignment.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why us (comparison) */}
        <section id="compare" className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold text-center mb-10">Why This Beats Other Options</h2>
          <div className="grid gap-6 md:grid-cols-3 text-sm text-neutral-700">
            <Card>
              <CardHeader>
                <CardTitle>vs. Fractional CMO</CardTitle>
              </CardHeader>
              <CardContent>4–8 weeks vs. 3–6 months • Fixed sprint cost vs. $8K–15K/mo • Working dashboards, not just decks</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>vs. Agencies</CardTitle>
              </CardHeader>
              <CardContent>C‑suite vision translation • Business metrics over vanity metrics • Time‑boxed sprints</CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>vs. Full‑Time Hire</CardTitle>
              </CardHeader>
              <CardContent>Available in weeks • $25K–50K vs. $200K+ • Specialized sprint methodology</CardContent>
            </Card>
          </div>
        </section>

        {/* Proof points carousel */}
        <section id="proof" className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-semibold text-center mb-6">Proof Points</h2>
          <p className="text-center text-neutral-600 mb-8">Recent outcomes from Pattern Growth sprints</p>

          <div className="relative mx-auto max-w-4xl">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <Card>
                    <CardHeader>
                      <CardTitle>Series A SaaS</CardTitle>
                    </CardHeader>
                    <CardContent className="text-neutral-700 space-y-1">
                      <p><strong>+40%</strong> lead→customer conversion in 90 days</p>
                      <p>Messaging overhaul, lifecycle KPIs, unified attribution</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card>
                    <CardHeader>
                      <CardTitle>B2B Startup</CardTitle>
                    </CardHeader>
                    <CardContent className="text-neutral-700 space-y-1">
                      <p><strong>–25%</strong> CAC via channel focus</p>
                      <p>Experiment logs, spend reallocation, dashboard alerts</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
                <CarouselItem>
                  <Card>
                    <CardHeader>
                      <CardTitle>FinTech Scale‑up</CardTitle>
                    </CardHeader>
                    <CardContent className="text-neutral-700 space-y-1">
                      <p>5 tracking systems → 1 executive dashboard</p>
                      <p>Source mapping, KPI design, weekly exec review</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          {/* Testimonial with Avatar */}
          <div className="mx-auto mt-10 max-w-3xl">
            <Card>
              <CardContent className="flex items-start gap-4 p-6">
                <Avatar>
                  <AvatarFallback>HC</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-lg leading-relaxed">
                    “They turned our complicated product into a simple story the whole org can tell. Sales ramped faster
                    and our site finally converts.”
                  </p>
                  <p className="mt-2 text-sm text-neutral-500">— Happy Client, VP of Marketing</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Investment */}
        <section id="investment" className="mx-auto max-w-4xl px-4 py-16 text-center space-y-6">
          <h2 className="text-2xl font-semibold">Investment & Timeline</h2>
          <p className="text-neutral-600">
            Sprint Investment: <strong>$25K–$50K</strong> depending on scope. 50% at start, 50% at dashboard delivery.
            Includes 30 days post‑sprint support.
          </p>
          <p className="text-neutral-600">
            Timeline: Discovery starts within 1 week. Dashboard live in ≤6 weeks. Full team handoff with documented
            playbooks.
          </p>
        </section>

        {/* FAQ with Accordion */}
        <section id="faq" className="mx-auto max-w-4xl px-4 py-16">
          <h2 className="text-2xl font-semibold text-center mb-8">Common Questions</h2>
          <Accordion type="single" collapsible className="mx-auto max-w-3xl">
            <AccordionItem value="q1">
              <AccordionTrigger>How do I know you understand our business?</AccordionTrigger>
              <AccordionContent>
                First week includes deep‑dive interviews, competitive analysis, and an existing data audit. No generic
                templates—everything is custom.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger>What if our data is messy?</AccordionTrigger>
              <AccordionContent>
                We handle data cleanup and integration (HubSpot, Salesforce, GA, etc.) to produce unified reporting.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger>Who actually does the work?</AccordionTrigger>
              <AccordionContent>
                Sprint team = strategic lead (ex‑CMO level) + specialists in analytics, dashboards, and growth ops. No
                juniors on strategy.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q4">
              <AccordionTrigger>What happens after the sprint?</AccordionTrigger>
              <AccordionContent>
                You own dashboards, frameworks, and docs. Continue with us for implementation—or use outputs to hire
                internally with clear direction.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Contact form */}
        <section id="contact" className="mx-auto max-w-3xl px-4 pb-20">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Ready to See Your Growth Patterns?</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="you@company.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Company name (optional)" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="note"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>What are you trying to solve?</FormLabel>
                        <FormControl>
                          <Textarea placeholder="A sentence or two is great." rows={4} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex items-center justify-center gap-4">
                    <Button type="submit" size="lg">Book Your Strategy Call</Button>
                    <Button type="button" size="lg" variant="outline" onClick={() => setOpenDemo(true)}>
                      Request Dashboard Access
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="border-t">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 text-sm text-neutral-500">
            <span>© {new Date().getFullYear()} Pattern Growth.</span>
            <div className="flex gap-4">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </footer>
      </main>
    </TooltipProvider>
  )
}
