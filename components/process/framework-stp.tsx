// components/process/framework-stp.tsx
import { processSections } from "@/config/process"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowDown } from "lucide-react"

export function STPFramework() {
  const framework = processSections
    .find(s => s.framework?.id === "stp")
    ?.framework

  if (!framework) return null

  const bgColors = [
    "bg-tertiary/30 border-primary/20",
    "bg-tertiary/50 border-primary/30",
    "bg-primary/10 border-primary"
  ]

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <p className="text-sm text-muted-foreground italic">
          {framework.description}
        </p>
      </div>

      <div className="space-y-8">
        {framework.items.map((item, idx) => {
          const Icon = item.icon
          return (
            <div key={idx} className="relative">
              <Card className={`${bgColors[idx]} transition-all duration-300`}>
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                      <span className="font-bold">{idx + 1}</span>
                    </div>
                    <h4 className="text-2xl font-semibold">{item.title}</h4>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {item.description}
                  </p>

                  {item.subItems && (
                    <div className="mt-6 space-y-3">
                      {item.subItems.map((subItem, subIdx) => (
                        <Card key={subIdx} className="bg-background border-border p-4">
                          <p className="text-sm italic text-muted-foreground">
                            {subItem}
                          </p>
                        </Card>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {idx < framework.items.length - 1 && (
                <div className="flex justify-center -my-4 relative z-10">
                  <div className="w-12 h-12 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                    <ArrowDown className="h-6 w-6 text-primary" />
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
