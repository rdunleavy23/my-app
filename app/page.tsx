"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowRight, CheckCircle2, Target, Lightbulb, Users, TrendingUp, Calendar, FileText, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* Hero Section - Mobile Optimized */}
      <section className="px-4 py-12 md:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl text-center space-y-6">
          <Badge variant="secondary" className="mb-4">
            For growth-stage companies ($1-5MM revenue)
          </Badge>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Your growth vision, operationalized in 8 weeks
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            We diagnose what's blocking revenue, then build the systems your team needs to execute—without hiring a full-time CMO.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link href="https://cal.com/pattern-growth">
                Schedule 15-min Fit Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
              <Link href="#process">
                See Our Process
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto w-full" />

      {/* Qualification Section - Mobile Optimized */}
      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <Card className="border-2">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Is Pattern Growth Right For You?</CardTitle>
              <CardDescription>We work best with companies that check these boxes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">$1-5MM Revenue</p>
                    <p className="text-sm text-muted-foreground">Growth-stage, not startup</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Founder-Led</p>
                    <p className="text-sm text-muted-foreground">Direct access to decision-makers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Ready to Invest</p>
                    <p className="text-sm text-muted-foreground">$25-50K for transformation</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto w-full" />

      {/* Process Section with Tabs - Mobile Optimized */}
      <section id="process" className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              What we deliver in 8 weeks
            </h2>
            <p className="text-muted-foreground">
              A systematic approach to turning strategy into operational capability
            </p>
          </div>

          <Tabs defaultValue="diagnose" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto">
              <TabsTrigger value="diagnose" className="text-xs sm:text-sm">
                <span className="hidden sm:inline">Weeks 1-2: </span>Diagnose
              </TabsTrigger>
              <TabsTrigger value="design" className="text-xs sm:text-sm">
                <span className="hidden sm:inline">Weeks 3-4: </span>Design
              </TabsTrigger>
              <TabsTrigger value="build" className="text-xs sm:text-sm">
                <span className="hidden sm:inline">Weeks 5-6: </span>Build
              </TabsTrigger>
              <TabsTrigger value="transfer" className="text-xs sm:text-sm">
                <span className="hidden sm:inline">Weeks 7-8: </span>Transfer
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="diagnose" className="mt-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Target className="h-5 w-5" />
                    <CardTitle>Discovery & Diagnosis</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Extract vision and translate into measurable objectives</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Map customer journeys to surface highest-impact opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Audit current capabilities and identify critical gaps</span>
                    </li>
                  </ul>
                  <Alert>
                    <AlertDescription>
                      <strong>Deliverable:</strong> Growth Diagnostic Report with prioritized opportunities
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="design" className="mt-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Lightbulb className="h-5 w-5" />
                    <CardTitle>Strategy Design</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Design positioning and messaging framework</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Create channel strategy and resource allocation model</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Build measurement framework and KPI dashboard</span>
                    </li>
                  </ul>
                  <Alert>
                    <AlertDescription>
                      <strong>Deliverable:</strong> Growth Strategy Playbook with tactical roadmap
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="build" className="mt-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Zap className="h-5 w-5" />
                    <CardTitle>System Building</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Operationalize strategies into repeatable workflows</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Create templates, tools, and automation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Install feedback loops and optimization processes</span>
                    </li>
                  </ul>
                  <Alert>
                    <AlertDescription>
                      <strong>Deliverable:</strong> Operating System with templates and tools
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="transfer" className="mt-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5" />
                    <CardTitle>Capability Transfer</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Train your team on new systems and processes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Document everything for long-term sustainability</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Ensure complete ownership handoff</span>
                    </li>
                  </ul>
                  <Alert>
                    <AlertDescription>
                      <strong>Deliverable:</strong> Trained team with full documentation
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto w-full" />

      {/* Results Carousel - Mobile Optimized */}
      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Results from our diagnostic approach
            </h2>
            <p className="text-muted-foreground">
              Real transformations from our 8-week engagements
            </p>
          </div>

          <Carousel className="w-full max-w-xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <Card>
                  <CardHeader>
                    <Badge variant="outline" className="w-fit">B2B SaaS</Badge>
                    <CardTitle>From Scattered to Systematic</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="font-medium text-sm text-muted-foreground">Challenge:</p>
                      <p>Unclear ICP, inconsistent messaging across channels</p>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-muted-foreground">Diagnostic Revealed:</p>
                      <p>3 distinct segments being underserved with generic approach</p>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-muted-foreground">Result:</p>
                      <p className="text-lg font-semibold">40% increase in qualified pipeline</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
              
              <CarouselItem>
                <Card>
                  <CardHeader>
                    <Badge variant="outline" className="w-fit">Professional Services</Badge>
                    <CardTitle>From Referrals to Repeatable</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="font-medium text-sm text-muted-foreground">Challenge:</p>
                      <p>Over-reliance on founder network, no scalable lead generation</p>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-muted-foreground">Diagnostic Revealed:</p>
                      <p>Untapped thought leadership potential and partner channel</p>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-muted-foreground">Result:</p>
                      <p className="text-lg font-semibold">3x partner-sourced deals in 90 days</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
              
              <CarouselItem>
                <Card>
                  <CardHeader>
                    <Badge variant="outline" className="w-fit">E-commerce</Badge>
                    <CardTitle>From Campaigns to Capability</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="font-medium text-sm text-muted-foreground">Challenge:</p>
                      <p>High CAC, low retention, agency dependency</p>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-muted-foreground">Diagnostic Revealed:</p>
                      <p>Missing post-purchase journey and data infrastructure</p>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-muted-foreground">Result:</p>
                      <p className="text-lg font-semibold">60% reduction in CAC, team runs independently</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto w-full" />

      {/* Why Pattern Growth - Mobile Optimized */}
      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Why companies choose Pattern Growth
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Target className="h-5 w-5" />
                  <CardTitle className="text-lg">Diagnostic First</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We don't prescribe solutions until we understand your specific growth blockers. 
                  Our diagnostic reveals what others miss.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <CardTitle className="text-lg">Founder-Led</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We work directly with founders because transformation requires authority. 
                  No junior teams, no account managers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5" />
                  <CardTitle className="text-lg">Capability Transfer</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Success means your team can run without us. We build systems and transfer 
                  knowledge so you own the outcome.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto w-full" />

      {/* FAQ Section - Mobile Optimized */}
      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Common questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Why not just hire a full-time CMO?</AccordionTrigger>
              <AccordionContent>
                A full-time CMO costs $250K+ annually, takes 6 months to ramp, and brings one perspective. 
                We deliver CMO-level strategy in 8 weeks for $25-50K, with systems your existing team can run. 
                You get the strategy without the overhead.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>How is this different from hiring an agency?</AccordionTrigger>
              <AccordionContent>
                Agencies execute campaigns; we build capability. Instead of dependency, you get documented 
                systems, trained teams, and complete ownership. Our success is measured by how well you 
                run without us.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>What if we're not ready for an 8-week commitment?</AccordionTrigger>
              <AccordionContent>
                Start with a 15-minute fit call. We'll be direct about whether our approach matches your 
                needs. If we're not the right fit, we'll tell you and often can recommend alternatives.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Do you work with our existing team?</AccordionTrigger>
              <AccordionContent>
                Yes, that's the entire point. We work alongside your team, building their capabilities 
                while designing systems. The final two weeks focus entirely on knowledge transfer and 
                ensuring they can operate independently.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>What results can we expect?</AccordionTrigger>
              <AccordionContent>
                Every engagement is different, but clients typically see 30-60% improvements in key metrics 
                within 90 days. More importantly, they have the systems and knowledge to continue improving 
                without external support.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <Separator className="max-w-4xl mx-auto w-full" />

      {/* CTA Section - Mobile Optimized */}
      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          <Card className="border-2">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold">
                Ready to diagnose your growth gaps?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Schedule a 15-minute fit call. We'll discuss your situation and be direct about 
                whether our approach makes sense for you. No pitch, just clarity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <Link href="https://cal.com/pattern-growth">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule 15-min Call
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                  <Link href="mailto:hello@patterngrowth.com">
                    Email Instead
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
