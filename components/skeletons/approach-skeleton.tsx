import { Skeleton } from "@/components/ui/skeleton"

export function ApproachSkeleton() {
  return (
    <section className="py-12 sm:py-16 bg-muted/30" aria-label="Loading approach content">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Skeleton className="h-8 w-48 mb-6" />
        
        {/* Mobile: Vertical stepper skeleton */}
        <div className="md:hidden space-y-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <Skeleton className="w-8 h-8 rounded-full" />
                {i < 2 && <Skeleton className="w-0.5 h-8 mt-2" />}
              </div>
              <div className="flex-1 pt-1">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Desktop: Tabs skeleton */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-2 mb-6">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
          </div>
        </div>
      </div>
    </section>
  )
}

