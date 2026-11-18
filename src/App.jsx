import { useEffect, useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import WhyChooseSection from './components/WhyChooseSection'
import ProgramsSection from './components/ProgramsSection'
import TimingsSection from './components/TimingsSection'
import PricingSection from './components/PricingSection'
import CoursesSection from './components/CoursesSection'
import FounderSection from './components/FounderSection'
import TeamSection from './components/TeamSection'
import ReviewsSection from './components/ReviewsSection'
import GoogleReviewsSection from './components/GoogleReviewsSection'
import GallerySection from './components/GallerySection'
import FAQSection from './components/FAQSection'
import FinalCTASection from './components/FinalCTASection'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const revealTargets = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    revealTargets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <Header menuOpen={menuOpen} onToggleMenu={() => setMenuOpen((prev) => !prev)} onCloseMenu={closeMenu} />

      <main>
        <HeroSection />
        <WhyChooseSection />
        <ProgramsSection />
        <TimingsSection />
        <PricingSection />
        <CoursesSection />
        <FounderSection />
        <TeamSection />
        <ReviewsSection />
        <GoogleReviewsSection />
        <GallerySection />
        <FAQSection />
        <FinalCTASection />
      </main>

      <Footer />
      <FloatingButtons />
    </>
  )
}

export default App