// components/process/framework-5cs.tsx
import { processSections } from "@/config/process"
import { Card, CardContent } from "@/components/ui/card"

export function Framework5Cs() {
  const framework = processSections
    .find(s => s.framework?.id === "5cs")
    ?.framework

  if (!framework) return null

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-semibold mb-2">
          {framework.title}
        </h3>
        <p className="text-muted-foreground">
          {framework.description}
        </p>
      </div>

      <div className="space-y-4">
        {framework.items.map((item, idx) => {
          const Icon = item.icon
          return (
            <Card
              key={idx}
              className="bg-tertiary/30 border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
