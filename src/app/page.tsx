import AboutSection from "./(home)/_about";
import Hero from "./(home)/_hero";
import OurSolutions from "./(home)/_oursolutions";
import WhychooseUs from "./(home)/_whychooseus";


export default function Home() {

  return (
    <div className="w-full px-4 max-w-6xl mx-auto">
      <Hero />
      <OurSolutions />
      <AboutSection />
      <WhychooseUs />
    </div>
  )
}