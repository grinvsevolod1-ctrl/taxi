import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://rabotavtaksi.by"), // Замените на ваш реальный домен
  alternates: {
    canonical: "/",
  },
  title: "Работа водителем в такси – Выгодные условия 40%",
  description:
    'Станьте водителем такси с лучшими условиями: 40% от кассы, предоставляем авто. Официальное трудоустройство, гибкий график, обучение за наш счет. ТО и обслуживание бесплатно. ООО "ИвентТайм" УНП 491389890',
  keywords: [
    "работа водителем",
    "работа в такси",
    "вакансии водитель",
    "водитель такси",
    "40 процентов от кассы",
    "официальное трудоустройство",
    "гибкий график работы",
    "авто для работы",
    "обучение водителей",
    "Минск",
    "Могилев",
    "Витебск",
    "работа водителем Минск",
    "работа водителем Могилев",
    "работа водителем Витебск",
  ],
  other: {
    "geo.region": "BY",
    "geo.placename": "Minsk",
  },
  authors: [{ name: "Работа в такси" }],
  creator: "Работа в такси",
  publisher: "Работа в такси",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://rabotavtaksi.by",
    title: "Работа водителем в такси – Выгодные условия 40%",
    description:
      "Станьте водителем такси с лучшими условиями: 40% от кассы, предоставляем авто. Официальное трудоустройство, гибкий график.",
    siteName: "Работа в такси",
  },
  twitter: {
    card: "summary_large_image",
    title: "Работа водителем в такси – Выгодные условия 40%",
    description: "Станьте водителем такси с лучшими условиями: 40% от кассы, предоставляем авто.",
  },
  verification: {
    yandex: "yandex-verification-code",
    google: "google-site-verification-code",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) { return; }
              }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=105319469', 'ym');
            ym(105319469, 'init', {
              ssr: true,
              webvisor: true,
              clickmap: true,
              ecommerce: "dataLayer",
              accurateTrackBounce: true,
              trackLinks: true
            });
          `}
        </Script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/105319469" style={{ position: "absolute", left: "-9999px" }} alt="" />
          </div>
        </noscript>
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
