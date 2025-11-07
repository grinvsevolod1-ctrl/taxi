import { Phone, Send, MessageCircle } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-secondary/20 bg-primary/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <div className="text-lg font-bold text-secondary sm:text-xl">Быстрее Ветра</div>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="tel:+375256073217"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-primary transition-all hover:scale-110 active:scale-95"
            aria-label="Позвонить"
          >
            <Phone className="h-4 w-4" />
          </a>

          <a
            href="https://t.me/+375256073217"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-primary transition-all hover:scale-110 active:scale-95"
            aria-label="Telegram"
          >
            <Send className="h-4 w-4" />
          </a>

          <a
            href="https://wa.me/375256073217"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-primary transition-all hover:scale-110 active:scale-95"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  )
}
