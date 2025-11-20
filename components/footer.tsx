import { Phone, Send, MessageCircle, MapPin, Clock, Briefcase } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* О компании */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-accent" />
              <h3 className="text-xl font-bold text-accent">Работа в такси</h3>
            </div>
            <p className="text-pretty text-sm leading-relaxed text-slate-300">
              Лучшие условия для водителей такси. Официальное трудоустройство, гибкий график и стабильный доход.
            </p>
            <div className="space-y-1">
              <p className="text-xs font-semibold text-slate-400">ООО "ИвентТайм"</p>
              <p className="text-xs text-slate-400">УНП: 491389890</p>
            </div>
          </div>

          {/* Контакты */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">Контакты</h3>
            <div className="space-y-3">
              <a
                href="tel:+375256073217"
                className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-accent"
              >
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+375 25 607 32 17</span>
              </a>
              <a
                href="https://t.me/+375256073217"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-accent"
              >
                <Send className="h-5 w-5 flex-shrink-0" />
                <span>Telegram</span>
              </a>
              <a
                href="https://wa.me/375256073217"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-accent"
              >
                <MessageCircle className="h-5 w-5 flex-shrink-0" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Режим работы */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">Режим работы</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-slate-300">
                <Clock className="mt-0.5 h-5 w-5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Круглосуточно</p>
                  <p className="text-xs text-slate-400">7 дней в неделю</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-300">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Работаем по всей</p>
                  <p className="text-xs text-slate-400">Беларуси</p>
                </div>
              </div>
            </div>
          </div>

          {/* Преимущества */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">Преимущества</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"></span>
                <span>40% от кассы</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"></span>
                <span>Автомобиль от компании</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"></span>
                <span>Официальное трудоустройство</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"></span>
                <span>Гибкий график</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"></span>
                <span>Обучение бесплатно</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-slate-700 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-400 sm:flex-row sm:text-left">
            <div className="flex flex-col gap-2 sm:gap-1">
              <p>© {new Date().getFullYear()} Работа в такси. Все права защищены.</p>
              <p className="text-xs">ООО "ИвентТайм" УНП 491389890</p>
            </div>
            {/* Добавлена информация о разработчике со ссылкой */}
            <div className="text-xs">
              <p>Designed And Developed by</p>
              <a
                href="https://www.netnext.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-accent transition-colors hover:text-accent/80"
              >
                NetNext Studio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
