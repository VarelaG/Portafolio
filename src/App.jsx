import { HeroIntro } from './components/ui/HeroIntro' // Importá el nuevo
import { HeroParallaxDemo } from './components/ui/HeroParallaxDemo'
import { CardHoverEffectDemo } from './components/ui/CardHoverEffectDemo'
import { SignupFormDemo } from './components/ui/SignupFormDemo'
import ContactSection from './components/ui/ContactSection' // Importá el nuevo

function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden w-full">
      {/* 1. Introducción Personal */}
      <HeroIntro />
      
      {/* 2. Proyectos (Parallax) */}
      <HeroParallaxDemo />
      
      {/* 3. Habilidades (Cards) */}
      <div className="py-20">
        <h2 className="text-center text-4xl font-bold mb-10">Tecnologías</h2>
        <CardHoverEffectDemo />
      </div>
      
      {/* 4. Contacto */}
        <ContactSection />
      
    </div>
  )
}

export default App