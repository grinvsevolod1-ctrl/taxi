import { Clock, FileText, Car, CheckCircle } from "lucide-react"

export function HowToStart() {
  const steps = [
    {
      icon: FileText,
      title: "1. Оставьте заявку",
      description: "Заполните форму на сайте или свяжитесь с нами по телефону",
    },
    {
      icon: Clock,
      title: "2. Собеседование",
      description: "Краткая встреча для обсуждения условий работы",
    },
    {
      icon: Car,
      title: "3. Оформление",
      description: "Помогаем с документами, медкомиссией и обучением",
    },
    {
      icon: CheckCircle,
      title: "4. Начало работы",
      description: "Получаете автомобиль и выходите на линию",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Как начать работу</h2>
          <p className="text-gray-600 text-lg">Всего 4 простых шага отделяют вас от работы мечты</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-yellow-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-yellow-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
