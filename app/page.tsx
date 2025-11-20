import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { Gallery } from "@/components/gallery"
import { HowToStart } from "@/components/how-to-start"
import { Requirements } from "@/components/requirements"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://taxi-work.vercel.app/#organization",
        name: 'ООО "ИвентТайм"',
        url: "https://taxi-work.vercel.app",
        logo: "https://taxi-work.vercel.app/icon.png",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+375256073217",
          contactType: "customer service",
          areaServed: ["BY"],
          availableLanguage: ["Russian", "Belarusian"],
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "BY",
          addressLocality: "Минск",
        },
      },
      {
        "@type": "JobPosting",
        title: "Водитель такси",
        description:
          "Работа водителем такси с выгодными условиями: 40% от кассы, предоставляем автомобиль, официальное трудоустройство, гибкий график. Работа в Минске, Могилеве и Витебске.",
        datePosted: new Date().toISOString(),
        validThrough: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
        employmentType: "FULL_TIME",
        hiringOrganization: {
          "@id": "https://taxi-work.vercel.app/#organization",
        },
        jobLocation: [
          {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Минск",
              addressCountry: "BY",
            },
          },
          {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Могилев",
              addressCountry: "BY",
            },
          },
          {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Витебск",
              addressCountry: "BY",
            },
          },
        ],
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
        qualifications: "Водительское удостоверение категории В, стаж от 2 лет, медицинская справка не старше 2 лет",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Какой график работы?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "График работы полностью гибкий. Вы сами выбираете когда и сколько работать. Можете работать полный день, несколько смен в неделю или в свободное время.",
            },
          },
          {
            "@type": "Question",
            name: "Нужен ли свой автомобиль?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Нет, автомобиль предоставляет компания. Все расходы на ТО, заправку и обслуживание берем на себя.",
            },
          },
          {
            "@type": "Question",
            name: "Как происходит оплата?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Вы получаете 40% от всех заказов. Выплаты производятся еженедельно на карту или наличными.",
            },
          },
          {
            "@type": "Question",
            name: "Что делать если нет опыта работы в такси?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Мы проводим бесплатное обучение для всех новых водителей. Опытные наставники помогут освоить все тонкости работы.",
            },
          },
          {
            "@type": "Question",
            name: "Какие документы нужны для устройства?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Водительское удостоверение категории В (стаж от 2 лет), паспорт и медицинская справка не старше 2 лет. Если справки нет - поможем оформить.",
            },
          },
          {
            "@type": "Question",
            name: "Как быстро можно начать работать?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "При наличии всех документов вы можете выйти на линию уже через 2-3 дня после подачи заявки.",
            },
          },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="min-h-screen">
        <Header />
        <Hero />
        <Stats />
        <Gallery />
        <HowToStart />
        <Requirements />
        <FAQ />
        <Footer />
      </main>
    </>
  )
}
