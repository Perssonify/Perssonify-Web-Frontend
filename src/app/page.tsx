import CookieConsent from "@/common/layout/cookie";
import AboutSection from "./(home)/_about";
import ContactSection from "./(home)/_contact";
import Hero from "./(home)/_hero";
import TimelineSection from "./(home)/_timeline";


export default function Home() {

  return (
    <div>
      <Hero />
      <TimelineSection />
      <AboutSection />
      <ContactSection />
      <CookieConsent />
    </div>
  )
}