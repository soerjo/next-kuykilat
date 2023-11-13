import AboutUsSection from '@/components/AboutUs'
import FooterSection from '@/components/Footer'
import HomeSection from '@/components/Home'
import Navbar from '@/components/Navbar'
import ServiceSection from '@/components/Services'
import TestimonialSection from '@/components/Testimonial'

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar/>
      <HomeSection/>
      <ServiceSection/>
      <AboutUsSection/>
      <TestimonialSection/>
      <FooterSection/>
    </main>
  )
}
