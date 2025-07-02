import AboutSection from "./(home)/_about";
import ContactSection from "./(home)/_contact";
import Hero from "./(home)/_hero";
import OurSolutions from "./(home)/_oursolutions";


export default function Home() {

  return (
    <div>
      <Hero />
      <OurSolutions />
      <AboutSection />
      <ContactSection />
    </div>
  )
}