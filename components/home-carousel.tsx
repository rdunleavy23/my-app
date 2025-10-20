"use client"

import { useEffect, useState } from "react"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

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
            <div className="motion-safe:transition-shadow hover:shadow-lg bg-card border rounded-lg p-6">
              <div className="mb-3">
                <div className="h-8 w-8 bg-primary rounded flex items-center justify-center">
                  <span className="text-primary-foreground text-sm font-bold">⚡</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quick Wins in 30 Days</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We start executing in week one, not month three. While we're building your strategic foundation, you'll see immediate improvements—campaign optimizations, conversion fixes, budget reallocations—that impact your pipeline before the sprint ends.
              </p>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="motion-safe:transition-shadow hover:shadow-lg bg-card border rounded-lg p-6">
              <div className="mb-3">
                <div className="h-8 w-8 bg-primary rounded flex items-center justify-center">
                  <span className="text-primary-foreground text-sm font-bold">🏢</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Growth Infrastructure You Own</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We build custom systems tailored to how your business actually operates—then transfer complete ownership to you. Everything we create becomes yours: the frameworks, the documentation, the tools, the insights.
              </p>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="motion-safe:transition-shadow hover:shadow-lg bg-card border rounded-lg p-6">
              <div className="mb-3">
                <div className="h-8 w-8 bg-primary rounded flex items-center justify-center">
                  <span className="text-primary-foreground text-sm font-bold">📈</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Revenue-Connected Strategy</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Most marketing roadmaps prioritize busy work over business impact. We connect every initiative directly to revenue: what generates pipeline, what converts prospects, what drives growth you can measure.
              </p>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="motion-safe:transition-shadow hover:shadow-lg bg-card border rounded-lg p-6">
              <div className="mb-3">
                <div className="h-8 w-8 bg-primary rounded flex items-center justify-center">
                  <span className="text-primary-foreground text-sm font-bold">🎯</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Brand Positioning That Sells</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We clarify who you serve, why you're different, and how to say it consistently across every channel. Your positioning will work in outreach, on sales calls, in investor conversations, and throughout your customer experience.
              </p>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="motion-safe:transition-shadow hover:shadow-lg bg-card border rounded-lg p-6">
              <div className="mb-3">
                <div className="h-8 w-8 bg-primary rounded flex items-center justify-center">
                  <span className="text-primary-foreground text-sm font-bold">🔗</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Marketing & Revenue Alignment</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Whether you have a dedicated sales team or growth happens through product-led motion, we align your marketing to how revenue actually happens in your business. No more disconnected campaigns or metrics that don't predict growth.
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
