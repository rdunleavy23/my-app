// components/process/framework-4ps.tsx
import { processSections } from "@/config/process"
import { Card, CardHeader, CardContent } from "@/components/ui/card"

export function FourPsGrid() {
  const framework = processSections
    .find(s => s.framework?.id === "4ps")
    ?.framework

  if (!framework) return null

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <p className="text-sm text-muted-foreground italic">
          {framework.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {framework.items.map((item, idx) => {
          const Icon = item.icon
          return (
            <Card
              key={idx}
              className="bg-tertiary/30 border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold">{item.title}</h4>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
