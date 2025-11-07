"use client"

import { Button } from "@/components/ui/button"
import { Car, Percent, Phone, MessageCircle, Send } from "lucide-react"

export function Hero() {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="bg-primary px-4 py-8 sm:py-12">
      <div className="container mx-auto max-w-4xl">
        <h1 className="mb-6 text-center text-4xl font-bold text-secondary sm:text-5xl">Работа в такси</h1>
        <p className="mb-8 text-center text-lg text-primary-foreground/90">Выгодные условия для водителей</p>
        {/* </CHANGE> */}

        <div className="mb-6 grid gap-4 sm:grid-cols-2">
          <div className="flex items-center gap-4 rounded-xl border-2 border-secondary bg-card/10 p-5 backdrop-blur-sm">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-secondary shadow-lg">
              <Percent className="h-7 w-7 text-primary" />
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary">40%</div>
              <div className="text-sm text-primary-foreground/90">от кассы</div>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-xl border-2 border-secondary bg-card/10 p-5 backdrop-blur-sm">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-secondary shadow-lg">
              <Car className="h-7 w-7 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary">Авто</div>
              <div className="text-sm text-primary-foreground/90">от компании</div>
            </div>
          </div>
        </div>

        <div className="mb-6 rounded-xl bg-card p-5 shadow-xl sm:p-6">
          <h2 className="mb-4 text-center text-xl font-bold text-foreground sm:text-2xl">Что вы получите</h2>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <div className="rounded-lg bg-muted/60 p-4">
              <h3 className="mb-2 flex items-center gap-2 font-semibold text-foreground">
                <Percent className="h-5 w-5 text-secondary" />
                Высокий процент от кассы
              </h3>
              <p>
                Получайте <strong className="text-secondary">40% от всех заработанных средств</strong> за смену. Никаких
                скрытых комиссий и вычетов. Прозрачная система расчетов с еженедельными выплатами. Чем больше работаете,
                тем больше зарабатываете.
              </p>
            </div>

            <div className="rounded-lg bg-muted/60 p-4">
              <h3 className="mb-2 flex items-center gap-2 font-semibold text-foreground">
                <Car className="h-5 w-5 text-secondary" />
                Автомобиль от компании
              </h3>
              <p>
                Предоставляем <strong className="text-secondary">комфортное авто премиум-класса</strong> в отличном
                техническом состоянии. Все расходы на топливо, техническое обслуживание и страховку берем на себя. Вам
                не нужно использовать свой автомобиль или беспокоиться о его износе.
              </p>
            </div>

            <div className="rounded-lg bg-muted/60 p-4">
              <h3 className="mb-2 font-semibold text-foreground">Дополнительные преимущества</h3>
              <ul className="ml-5 list-disc space-y-1.5">
                <li>Свободный график работы - выбирайте смены сами</li>
                <li>Официальное оформление по договору</li>
                <li>Поддержка диспетчеров 24/7</li>
                <li>Стабильный поток заказов</li>
                <li>Быстрое обучение и выход на линию</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-6 rounded-xl bg-card p-5 shadow-lg">
          <h3 className="mb-4 text-center text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Связаться с нами
          </h3>
          <div className="space-y-3">
            <a
              href="tel:+375256073217"
              className="flex items-center justify-center gap-3 rounded-lg bg-secondary p-4 text-primary shadow-md transition-all hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
            >
              <Phone className="h-5 w-5" />
              <span className="text-lg font-semibold">+375 25 607 32 17</span>
            </a>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href="https://t.me/+375256073217"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg border-2 border-secondary bg-primary p-3 text-secondary transition-all hover:bg-secondary hover:text-primary"
              >
                <Send className="h-5 w-5" />
                <span className="font-medium">Telegram</span>
              </a>

              <a
                href="https://wa.me/375256073217"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg border-2 border-secondary bg-primary p-3 text-secondary transition-all hover:bg-secondary hover:text-primary"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="font-medium">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <Button
          size="lg"
          onClick={scrollToForm}
          className="h-14 w-full bg-secondary text-lg font-bold text-primary shadow-lg transition-all hover:scale-[1.02] hover:bg-secondary/90 hover:shadow-xl active:scale-[0.98]"
        >
          Оставить заявку
        </Button>
      </div>
    </section>
  )
}
