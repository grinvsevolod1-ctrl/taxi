import { Wind } from "lucide-react"

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-md">
        <Wind className="h-5 w-5 text-black" />
      </div>
      <span className="text-lg font-bold sm:text-xl">
        <span className="text-yellow-500">Быстрее</span> <span className="text-gray-800">Ветра</span>
      </span>
    </div>
  )
}
