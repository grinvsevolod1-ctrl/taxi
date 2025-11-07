import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Requirements } from "@/components/requirements"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Requirements />
      <ContactForm />
      <Footer />
    </main>
  )
}
