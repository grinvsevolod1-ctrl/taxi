import {
  Phone,
  Send,
  MessageCircle,
  MapPin,
  Clock,
  Briefcase,
} from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-background to-muted text-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* О компании */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-accent" />
              <h3 className="text-xl font-bold text-accent">Работа в такси</h3>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Лучшие условия для водителей: официальное оформление, гибкий график, стабильный доход.
            </p>
            <p className="text-xs text-muted-foreground">ООО "ИВЕНТ ТАЙМ" УНП: 491389890</p>
          </div>

          {/* Контакты */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">Контакты</h3>
            <div className="space-y-3">
              <ContactItem
                icon={<Phone className="h-5 w-5" />}
                label="+375 25 607 32 17"
                href="tel:+375256073217"
              />
              <ContactItem
                icon={<Send className="h-5 w-5" />}
                label="Telegram"
                href="https://t.me/+375256073217"
              />
              <ContactItem
                icon={<MessageCircle className="h-5 w-5" />}
                label="WhatsApp"
                href="https://wa.me/375256073217"
              />
              <ContactItem
                icon={<MessageCircle className="h-5 w-5" />}
                label="Viber"
                href="viber://chat?number=%2B375256073217"
              />
            </div>
          </div>

          {/* Режим работы */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">Режим работы</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <div>
                  <p className="font-medium">Круглосуточно</p>
                  <p className="text-xs text-muted-foreground">7 дней в неделю</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <div>
                  <p className="font-medium">Работаем по всей</p>
                  <p className="text-xs text-muted-foreground">Беларуси</p>
                </div>
              </div>
            </div>
          </div>

          {/* Преимущества */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">Преимущества</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                "40% от кассы",
                "Автомобиль от компании",
                "Официальное трудоустройство",
                "Гибкий график",
                "Обучение бесплатно",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground sm:flex-row sm:text-left">
            <p>© {new Date().getFullYear()} Работа в такси. Все права защищены.</p>
            <p className="text-xs">ООО "ИВЕНТ ТАЙМ" УНП: 491389890</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

function ContactItem({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode
  label: string
  href: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-accent"
    >
      {icon}
      <span>{label}</span>
    </a>
  )
}
