
import CTA from '@/components/CTA'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import { Navigation } from '@/components/Navigation'
import Testimonial from '@/components/Testimonial'

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white relative">
      {/* Dual Gradient Overlay (Top) Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
            radial-gradient(circle 500px at 0% 20%, rgba(139,92,246,0.3), transparent),
            radial-gradient(circle 500px at 100% 0%, rgba(59,130,246,0.3), transparent)
          `,
          backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center min-h-screen ">
        <Navigation/>
        <main className="flex-1">
          <Hero />
          <Features/>
          <HowItWorks/>
          <Testimonial />
          <CTA />       
        </main>
        <Footer /> 
      </div>
    </div>
  )
}
