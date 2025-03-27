import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
