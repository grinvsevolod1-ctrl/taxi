import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Requirements } from "@/components/requirements"
import { Footer } from "@/components/footer"

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Водитель такси",
    description:
      "Работа водителем такси с выгодными условиями: 40% от кассы, предоставляем автомобиль, официальное трудоустройство, гибкий график.",
    datePosted: new Date().toISOString(),
    validThrough: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
    employmentType: "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: "Работа в такси",
      sameAs: "https://yourdomain.com",
      identifier: "УНП 15121242",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "BY",
      },
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "BYN",
      value: {
        "@type": "QuantitativeValue",
        value: 40,
        unitText: "PERCENT",
      },
    },
    jobBenefits: [
      "Официальное трудоустройство",
      "Гибкий график",
      "Обучение за счет компании",
      "ТО и обслуживание за счет компании",
      "Предоставление автомобиля",
    ],
    qualifications:
      "Водительское удостоверение категории В, стаж от 2 лет, медицинская справка не старше 2 лет",
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen">
        <Header />
        <Hero />
        <Requirements />
        <Footer />
      </main>
    </>
  )
}
