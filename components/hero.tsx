"use client"

import { Button } from "@/components/ui/button"
import { Car, Percent, Phone, MessageCircle, Send } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative bg-white px-4 py-12 sm:py-16">
      <div className="absolute inset-0 z-0">
        <Image src="/professional-taxi-driver-working-behind-the-wheel-.jpg" alt="Работа водителем такси" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-white/85" />
      </div>

      <div className="container relative z-10 mx-auto max-w-4xl">
        <h1 className="mb-3 text-center text-5xl font-bold text-gray-800 sm:text-6xl">Работа в такси</h1>
        <p className="mb-10 text-center text-xl text-gray-600 sm:text-2xl">Выгодные условия для водителей</p>

        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          <div className="flex items-center gap-4 rounded-2xl border-2 border-yellow-400 bg-white p-6 shadow-lg">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-yellow-400 shadow-md">
              <Percent className="h-8 w-8 text-black" />
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-500">40%</div>
              <div className="text-base text-gray-600">от кассы</div>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border-2 border-yellow-400 bg-white p-6 shadow-lg">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-yellow-400 shadow-md">
              <Car className="h-8 w-8 text-black" />
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-500">Авто</div>
              <div className="text-base text-gray-600">от компании</div>
            </div>
          </div>
        </div>

        <div className="mb-8 rounded-2xl bg-white p-6 shadow-xl sm:p-8">
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-800 sm:text-3xl">Что вы получите</h2>
          <div className="space-y-5 text-base leading-relaxed text-gray-700">
            <div className="rounded-xl bg-gray-50 p-5">
              <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-gray-800">
                <Percent className="h-6 w-6 text-yellow-500" />
                Высокий процент от кассы
              </h3>
              <p>
                Получайте <strong className="text-yellow-600">40% от всех заработанных средств</strong> за смену.
                Никаких скрытых комиссий и вычетов. Прозрачная система расчетов с еженедельными выплатами. Чем больше
                работаете, тем больше зарабатываете.
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-5">
              <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-gray-800">
                <Car className="h-6 w-6 text-yellow-500" />
                Автомобиль от компании
              </h3>
              <p>
                Предоставляем <strong className="text-yellow-600">комфортное авто премиум-класса</strong> в отличном
                техническом состоянии. Все расходы на топливо, техническое обслуживание и страховку берем на себя. Вам
                не нужно использовать свой автомобиль или беспокоиться о его износе.
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-5">
              <h3 className="mb-3 text-lg font-semibold text-gray-800">Дополнительные преимущества</h3>
              <ul className="ml-5 list-disc space-y-2 text-gray-700">
                <li>Свободный график работы - выбирайте смены сами</li>
                <li>Официальное оформление по договору</li>
                <li>Поддержка диспетчеров 24/7</li>
                <li>Стабильный поток заказов</li>
                <li>Быстрое обучение и выход на линию</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-8 rounded-2xl bg-white p-6 shadow-lg">
          <h3 className="mb-5 text-center text-sm font-semibold uppercase tracking-wide text-gray-500">
            Связаться с нами
          </h3>
          <div className="space-y-3">
            <a
              href="tel:+375256073217"
              className="flex items-center justify-center gap-3 rounded-xl bg-yellow-400 p-4 text-black shadow-md transition-all hover:scale-[1.02] hover:bg-yellow-500 hover:shadow-lg active:scale-[0.98]"
            >
              <Phone className="h-5 w-5" />
              <span className="text-lg font-semibold">+375 25 607 32 17</span>
            </a>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href="https://t.me/+375256073217"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border-2 border-yellow-400 bg-white p-3 text-gray-800 transition-all hover:bg-yellow-400"
              >
                <Send className="h-5 w-5" />
                <span className="font-medium">Telegram</span>
              </a>

              <a
                href="https://wa.me/375256073217"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border-2 border-yellow-400 bg-white p-3 text-gray-800 transition-all hover:bg-yellow-400"
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
          className="h-14 w-full rounded-xl bg-yellow-400 text-lg font-bold text-black shadow-lg transition-all hover:scale-[1.02] hover:bg-yellow-500 hover:shadow-xl active:scale-[0.98]"
        >
          Оставить заявку
        </Button>
      </div>
    </section>
  )
}
