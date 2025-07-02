import AboutSection from "./(home)/_about";
import ContactSection from "./(home)/_contact";
import Hero from "./(home)/_hero";
import OurSolutions from "./(home)/_oursolutions";
import WhychooseUs from "./(home)/_whychooseus";


export default function Home() {

  return (
    <div>
      <Hero />
      <OurSolutions />
      <AboutSection />
      <WhychooseUs />
      <ContactSection />
    </div>
  )
}