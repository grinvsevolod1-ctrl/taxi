import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const requirements = [
  "Водительское удостоверение категории B",
  "Стаж вождения от 3 лет",
  "Знание города",
  "Опрятный внешний вид",
  "Коммуникабельность и вежливость",
  "Отсутствие судимостей",
]

export function Requirements() {
  return (
    <section className="px-4 py-12 sm:py-16">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Требования</h2>
        </div>

        <Card className="border-2 border-secondary/30 p-5 sm:p-8">
          <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {requirements.map((requirement, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                <span className="text-sm leading-relaxed text-card-foreground sm:text-base">{requirement}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  )
}
