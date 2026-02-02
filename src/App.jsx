import { HeroIntro } from './components/ui/HeroIntro' // Importá el nuevo
import { ProjectsShowcase } from './components/ui/ProjectsShowcase'
import { CardHoverEffectDemo } from './components/ui/CardHoverEffectDemo'
import { SignupFormDemo } from './components/ui/SignupFormDemo'
import ContactSection from './components/ui/ContactSection' // Importá el nuevo
import { FloatingNav } from './components/ui/FloatingNav'

function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden w-full">
      <FloatingNav />
      {/* 1. Introducción Personal */}
      <div id="intro">
        <HeroIntro />
      </div>

      {/* 2. Proyectos Premium */}
      <div id="projects">
        <ProjectsShowcase />
      </div>

      {/* 3. Habilidades (Cards) */}
      <div id="tech" className="py-20">
        <h2 className="text-center text-4xl font-bold mb-10">Tecnologías</h2>
        <CardHoverEffectDemo />
      </div>

      {/* 4. Contacto */}
      <div id="contact">
        <ContactSection />
      </div>

    </div>
  )
}

export default App