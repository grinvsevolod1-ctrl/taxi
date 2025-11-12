import { Briefcase } from "lucide-react"

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-yellow-300 to-yellow-400 shadow-md">
        <Briefcase className="h-5 w-5 text-gray-800" />
      </div>
      <span className="text-lg font-bold text-foreground sm:text-xl">Работа в такси</span>
    </div>
  )
}
