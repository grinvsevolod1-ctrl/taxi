import { Users, Car, Clock, TrendingUp } from "lucide-react"

export function Stats() {
  const stats = [
    {
      icon: Users,
      value: "200+",
      label: "Водителей работают с нами",
    },
    {
      icon: Car,
      value: "50+",
      label: "Автомобилей в парке",
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Круглосуточная поддержка",
    },
    {
      icon: TrendingUp,
      value: "40%",
      label: "Ваш доход от каждого заказа",
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-yellow-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-yellow-100 rounded-full mb-4">
                <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-yellow-600" />
              </div>
              <div className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
