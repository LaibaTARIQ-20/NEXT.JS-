import Header from '@/components/common/Header'
import Hero from '@/components/sections/Hero'
import TrustedBy from '@/components/sections/TrustedBy'
import Features from '@/components/sections/Features'
import FeatureCards from '@/components/sections/FeatureCards'
import Pricing from '@/components/sections/Pricing'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/common/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustedBy />
      <Features />
      <FeatureCards />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}