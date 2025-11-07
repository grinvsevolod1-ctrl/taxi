import { Phone, Send, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary px-4 py-8 text-primary-foreground sm:py-12">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="mb-3 text-xl font-bold text-secondary">Быстрее Ветра</h3>
            <p className="text-pretty text-sm leading-relaxed text-primary-foreground/80">
              Лучшие условия для водителей такси: 40% от кассы, предоставление авто и круглосуточная поддержка.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold text-secondary">Контакты</h3>
            <div className="space-y-2">
              <a
                href="tel:+375256073217"
                className="flex items-center gap-2 text-sm text-primary-foreground/90 transition-colors hover:text-secondary"
              >
                <Phone className="h-4 w-4" />
                +375 25 607 32 17
              </a>
              <a
                href="https://t.me/+375256073217"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary-foreground/90 transition-colors hover:text-secondary"
              >
                <Send className="h-4 w-4" />
                Telegram
              </a>
              <a
                href="https://wa.me/375256073217"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary-foreground/90 transition-colors hover:text-secondary"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/20 pt-6 text-center text-xs text-primary-foreground/60 sm:text-sm">
          © {new Date().getFullYear()} Быстрее Ветра. Работа 24/7
        </div>
      </div>
    </footer>
  )
}
