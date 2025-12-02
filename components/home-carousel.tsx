"use client"

import { useEffect, useState } from "react"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import { 
  Zap, 
  Building2, 
  TrendingUp, 
  Target, 
  Link as LinkIcon
} from "lucide-react"

export function HomeCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="md:hidden">
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent>
          <CarouselItem>
            <div className="card-hover-lift bg-card border rounded-lg p-6">
              <div className="mb-3">
                <Zap className="h-8 w-8 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quick Wins Start Week One</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We start executing week one, not month three. While building your strategic foundation, you'll see immediate improvements that impact your pipeline before the sprint ends. We work fast because you need results now.
              </p>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="card-hover-lift bg-card border rounded-lg p-6">
              <div className="mb-3">
                <Building2 className="h-8 w-8 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Growth Infrastructure You Own</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We build custom systems for how your business actually operates—then hand over everything. Everything we create becomes yours: frameworks, documentation, tools, insights.
              </p>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="card-hover-lift bg-card border rounded-lg p-6">
              <div className="mb-3">
                <TrendingUp className="h-8 w-8 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Strategy Connected to Revenue</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Most marketing roadmaps prioritize busy work over revenue. We connect every initiative directly to revenue: what generates pipeline, what converts prospects, what drives growth you can measure.
              </p>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="card-hover-lift bg-card border rounded-lg p-6">
              <div className="mb-3">
                <Target className="h-8 w-8 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Brand Positioning That Sells</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We clarify who you serve, why they'd choose you, and how to say it everywhere. Your positioning will work in outreach, on sales calls, in investor conversations, and throughout your customer experience.
              </p>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="card-hover-lift bg-card border rounded-lg p-6">
              <div className="mb-3">
                <LinkIcon className="h-8 w-8 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Marketing That Drives Revenue</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Whether you have a sales team or growth happens product-led, we align your marketing to how revenue actually happens in your business. No more disconnected campaigns or vanity metrics.
              </p>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: 5 }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "h-2 w-2 rounded-full bg-primary transition-opacity duration-300",
              current === index ? "opacity-100" : "opacity-30"
            )}
            aria-label={`Go to slide ${index + 1} of 5`}
          />
        ))}
      </div>
    </div>
  )
}
