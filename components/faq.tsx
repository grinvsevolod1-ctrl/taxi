"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Какой график работы?",
      answer:
        "График работы полностью гибкий. Вы сами выбираете когда и сколько работать. Можете работать полный день, несколько смен в неделю или в свободное время.",
    },
    {
      question: "Нужен ли свой автомобиль?",
      answer: "Нет, автомобиль предоставляет компания. Все расходы на ТО, заправку и обслуживание берем на себя.",
    },
    {
      question: "Как происходит оплата?",
      answer: "Вы получаете 40% от всех заказов. Выплаты производятся еженедельно на карту или наличными.",
    },
    {
      question: "Что делать если нет опыта работы в такси?",
      answer:
        "Мы проводим бесплатное обучение для всех новых водителей. Опытные наставники помогут освоить все тонкости работы.",
    },
    {
      question: "Какие документы нужны для устройства?",
      answer:
        "Водительское удостоверение категории В (стаж от 2 лет), паспорт и медицинская справка не старше 2 лет. Если справки нет - поможем оформить.",
    },
    {
      question: "Как быстро можно начать работать?",
      answer: "При наличии всех документов вы можете выйти на линию уже через 2-3 дня после подачи заявки.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Часто задаваемые вопросы</h2>
          <p className="text-gray-600 text-lg">Ответы на популярные вопросы о работе</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border-2 border-gray-100 overflow-hidden hover:border-yellow-300 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-yellow-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-48" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-4 text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
