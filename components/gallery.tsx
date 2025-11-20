import Image from "next/image"

export function Gallery() {
  return (
    <section className="bg-gray-50 px-4 py-16 sm:py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 sm:text-4xl">Наши водители и автомобили</h2>
        <p className="mb-12 text-center text-lg text-gray-600">
          Современный автопарк и профессиональная команда водителей
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="relative h-64 w-full">
              <Image
                src="/modern-yellow-taxi-cab-exterior.jpg"
                alt="Современное такси"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-bold text-white">Комфортные автомобили</h3>
              <p className="text-sm text-gray-200">Современный автопарк с кондиционером</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="relative h-64 w-full">
              <Image
                src="/professional-taxi-driver-smiling-in-yellow-taxi.jpg"
                alt="Водитель такси"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-bold text-white">Профессиональная команда</h3>
              <p className="text-sm text-gray-200">Опытные и дружелюбные водители</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="relative h-64 w-full">
              <Image
                src="/clean-yellow-taxi-interior-with-modern-technology.jpg"
                alt="Салон такси"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-bold text-white">Чистые салоны</h3>
              <p className="text-sm text-gray-200">Регулярная уборка и обслуживание</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="relative h-64 w-full">
              <Image
                src="/taxi-driver-navigation-gps-system-in-yellow-cab.jpg"
                alt="Навигация в такси"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-bold text-white">Современное оборудование</h3>
              <p className="text-sm text-gray-200">GPS-навигация и связь</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="relative h-64 w-full">
              <Image
                src="/yellow-taxi-at-night-city-lights.jpg"
                alt="Работа в вечернее время"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-bold text-white">Работа в любое время</h3>
              <p className="text-sm text-gray-200">Дневные и ночные смены</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="relative h-64 w-full">
              <Image
                src="/happy-taxi-driver-with-money-earning.jpg"
                alt="Стабильный заработок"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-bold text-white">Стабильный доход</h3>
              <p className="text-sm text-gray-200">Высокий заработок каждый день</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
