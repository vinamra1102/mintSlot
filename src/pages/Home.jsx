import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import HowItWorks from '../components/HowItWorks'
import BookingEmbed from '../components/BookingEmbed'
import AboutSnippet from '../components/AboutSnippet'
import CTABanner from '../components/CTABanner'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <HowItWorks />
      <BookingEmbed />
      <AboutSnippet />
      <CTABanner />
      <Footer />
    </>
  )
}
