// components/process/deliverables-list.tsx
import { CheckCircle2 } from "lucide-react"

interface DeliverablesListProps {
  items: string[]
}

export function DeliverablesList({ items }: DeliverablesListProps) {
  return (
    <div className="mt-16 pt-12 border-t border-border">
      <h3 className="text-2xl font-semibold mb-6">Deliverables</h3>
      <ul className="grid md:grid-cols-2 gap-4">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
