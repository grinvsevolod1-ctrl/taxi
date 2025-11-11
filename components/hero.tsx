"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Briefcase, FileText, Wrench } from "lucide-react"
import Image from "next/image"
import { ContactFormModal } from "@/components/contact-form-modal"

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative bg-white px-4 py-12 sm:py-16">
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

      <div className="container relative z-10 mx-auto max-w-4xl">
        <h1 className="mb-3 text-center text-5xl font-bold text-gray-800 sm:text-6xl">Работа в такси</h1>
        <p className="mb-10 text-center text-xl text-gray-600 sm:text-2xl">Выгодные условия для водителей</p>

        <div className="mb-8 flex justify-center">
          <Button
            size="lg"
            onClick={() => setIsModalOpen(true)}
            className="h-16 rounded-xl bg-yellow-300 px-12 text-xl font-bold text-gray-800 shadow-lg transition-all hover:scale-[1.05] hover:bg-yellow-400 hover:shadow-xl active:scale-[0.98]"
          >
            Стать водителем
          </Button>
        </div>

        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          <div className="flex flex-col items-center gap-3 rounded-2xl border-2 border-yellow-300 bg-white p-6 text-center shadow-lg">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-300 shadow-md">
              <Briefcase className="h-7 w-7 text-gray-800" />
            </div>
            <div className="text-sm font-semibold leading-tight text-gray-800">
              Официальное трудоустройство. Гибкий график
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 rounded-2xl border-2 border-yellow-300 bg-white p-6 text-center shadow-lg">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-300 shadow-md">
              <FileText className="h-7 w-7 text-gray-800" />
            </div>
            <div className="text-sm font-semibold leading-tight text-gray-800">
              Обучение, переподготовка и медкомиссия за наш счет
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 rounded-2xl border-2 border-yellow-300 bg-white p-6 text-center shadow-lg">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-300 shadow-md">
              <Wrench className="h-7 w-7 text-gray-800" />
            </div>
            <div className="text-sm font-semibold leading-tight text-gray-800">
              ТО, заправка и обслуживание - за наш счет
            </div>
          </div>
        </div>

        <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </section>
  )
}
