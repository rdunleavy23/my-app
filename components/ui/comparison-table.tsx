import { Check, X, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

type CellValue = "check" | "x" | "question"

interface ComparisonRow {
  label: string
  isHighlighted?: boolean
  values: Record<string, CellValue>
}

interface ComparisonTableProps {
  columns: string[]
  rows: ComparisonRow[]
  className?: string
}

function CellIcon({ value }: { value: CellValue }) {
  switch (value) {
    case "check":
      return <Check className="h-5 w-5 text-green-600 dark:text-green-500" aria-label="Yes" />
    case "x":
      return <X className="h-5 w-5 text-red-600 dark:text-red-500" aria-label="No" />
    case "question":
      return <HelpCircle className="h-5 w-5 text-amber-600 dark:text-amber-500" aria-label="Maybe" />
  }
}

export function ComparisonTable({ columns, rows, className }: ComparisonTableProps) {
  return (
    <div className={cn("w-full overflow-x-auto", className)}>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border border-border bg-muted/50 p-4 text-left font-semibold"></th>
            {columns.map((column) => (
              <th
                key={column}
                className="border border-border bg-muted/50 p-4 text-center font-semibold"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              className={cn(
                row.isHighlighted && "bg-primary/10 dark:bg-primary/20"
              )}
            >
              <td
                className={cn(
                  "border border-border p-4 text-left",
                  row.isHighlighted && "font-bold border-primary/30"
                )}
              >
                {row.label}
              </td>
              {columns.map((column) => (
                <td
                  key={column}
                  className={cn(
                    "border border-border p-4 text-center",
                    row.isHighlighted && "border-primary/30"
                  )}
                >
                  <div className="flex items-center justify-center">
                    <CellIcon value={row.values[column]} />
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

