"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Briefcase, FileText, Wrench, MapPin } from "lucide-react"
import Image from "next/image"
import { ContactFormModal } from "@/components/contact-form-modal"

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative bg-white px-4 py-12 sm:py-16 lg:py-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/professional-taxi-driver-working-behind-the-wheel-.jpg"
          alt="Работа водителем такси"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/85" />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl">
        <h1 className="mb-4 text-center text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Работа в такси
        </h1>
        <p className="mb-12 text-center text-lg text-gray-700 sm:text-xl lg:text-2xl">Выгодные условия для водителей</p>

        <div className="mb-12 flex justify-center">
          <Button
            size="lg"
            onClick={() => setIsModalOpen(true)}
            className="h-16 rounded-2xl bg-yellow-300 px-16 text-xl font-bold text-gray-900 shadow-xl transition-all duration-300 hover:scale-105 hover:bg-yellow-400 hover:shadow-2xl active:scale-95 sm:h-20 sm:px-20 sm:text-2xl"
          >
            Стать водителем
          </Button>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div className="group flex flex-col items-center gap-4 rounded-2xl border-2 border-yellow-300 bg-white p-6 text-center shadow-xl transition-all duration-300 hover:scale-105 hover:border-yellow-400 hover:shadow-2xl sm:p-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-300 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-yellow-400 sm:h-20 sm:w-20">
              <MapPin className="h-8 w-8 text-gray-900 sm:h-10 sm:w-10" />
            </div>
            <div className="text-base font-semibold leading-tight text-gray-800 sm:text-lg">
              Работаем в Минске, Могилеве и Витебске
            </div>
          </div>

          <div className="group flex flex-col items-center gap-4 rounded-2xl border-2 border-yellow-300 bg-white p-6 text-center shadow-xl transition-all duration-300 hover:scale-105 hover:border-yellow-400 hover:shadow-2xl sm:p-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-300 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-yellow-400 sm:h-20 sm:w-20">
              <Briefcase className="h-8 w-8 text-gray-900 sm:h-10 sm:w-10" />
            </div>
            <div className="text-sm font-semibold leading-tight text-gray-800 sm:text-base">
              Официальное трудоустройство. Гибкий график
            </div>
          </div>

          <div className="group flex flex-col items-center gap-4 rounded-2xl border-2 border-yellow-300 bg-white p-6 text-center shadow-xl transition-all duration-300 hover:scale-105 hover:border-yellow-400 hover:shadow-2xl sm:p-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-300 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-yellow-400 sm:h-20 sm:w-20">
              <FileText className="h-8 w-8 text-gray-900 sm:h-10 sm:w-10" />
            </div>
            <div className="text-sm font-semibold leading-tight text-gray-800 sm:text-base">
              Обучение, переподготовка и медкомиссия за наш счет
            </div>
          </div>

          <div className="group flex flex-col items-center gap-4 rounded-2xl border-2 border-yellow-300 bg-white p-6 text-center shadow-xl transition-all duration-300 hover:scale-105 hover:border-yellow-400 hover:shadow-2xl sm:p-8">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-300 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-yellow-400 sm:h-20 sm:w-20">
              <Wrench className="h-8 w-8 text-gray-900 sm:h-10 sm:w-10" />
            </div>
            <div className="text-sm font-semibold leading-tight text-gray-800 sm:text-base">
              ТО, заправка и обслуживание - за наш счет
            </div>
          </div>
        </div>

        <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </section>
  )
}
