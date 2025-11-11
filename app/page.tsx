import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Requirements } from "@/components/requirements"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Requirements />
      <Footer />
    </main>
  )
}
