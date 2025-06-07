import LogoSection from "./sectioncs/LogoSection.jsx"
import NavBar from "./components/NavBar.jsx"
import FeatureCard from "./sectioncs/FeatureCard.jsx"
import Hero from "./sectioncs/Hero.jsx"
import ShowcaseSection from "./sectioncs/ShowcaseSection.jsx"
import SnowCursorTrail from "./components/SnowCursorTrail.jsx"
import ExperienceSection from "./sectioncs/ExperienceSection.jsx"
import TechStack from "./sectioncs/TechStack.jsx"
import Testimonials from "./sectioncs/Testimonials.jsx"
import Contact from "./sectioncs/Contact.jsx"
import Footer from "./sectioncs/Footer.jsx"

const App = () => {
  return (
    <>
      <SnowCursorTrail />
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCard />
      <ExperienceSection />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App