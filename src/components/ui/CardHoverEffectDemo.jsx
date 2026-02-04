import { HoverEffect } from "./card-hover-effect";
import {
  SiJavascript, SiReact, SiNextdotjs, SiTailwindcss,
  SiAstro, SiOpenjdk, SiNodedotjs, SiPostgresql,
  SiMysql, SiGit, SiGithub, SiVite, SiVercel,
  SiFramer
} from "react-icons/si";
import { TbSparkles } from "react-icons/tb";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-6xl mx-auto px-8">
      <HoverEffect items={technologies} />
    </div>
  );
}

export const technologies = [
  {
    title: "JavaScript",
    icon: <SiJavascript className="text-[#F7DF1E]" />,
    description: "Lenguaje principal para la creación de lógica interactiva y dinamismo web.",
    link: "https://developer.mozilla.org",
  },
  {
    title: "React",
    icon: <SiReact className="text-[#61DAFB]" />,
    description: "Biblioteca líder para construir interfaces de usuario modulares y escalables.",
    link: "https://react.dev",
  },
  {
    title: "Next.js",
    icon: <SiNextdotjs className="text-white" />,
    description: "Framework de React para aplicaciones web con renderizado del lado del servidor y generación estática.",
    link: "https://nextjs.org",
  },
  {
    title: "Tailwind CSS",
    icon: <SiTailwindcss className="text-[#06B6D4]" />,
    description: "Framework de CSS basado en utilidades para diseños rápidos y responsivos.",
    link: "https://tailwindcss.com",
  },
  {
    title: "Vite",
    icon: <SiVite className="text-[#646CFF]" />,
    description: "Build tool ultrarrápido con HMR instantáneo para desarrollo web moderno.",
    link: "https://vitejs.dev",
  },
  {
    title: "Astro",
    icon: <SiAstro className="text-[#FF5D01]" />,
    description: "Framework moderno enfocado en la velocidad y optimización de contenido.",
    link: "https://astro.build",
  },
  {
    title: "Java",
    icon: <SiOpenjdk className="text-[#ED8B00]" />,
    description: "Lenguaje robusto orientado a objetos para aplicaciones backend empresariales.",
    link: "https://www.java.com",
  },
  {
    title: "Node.js",
    icon: <SiNodedotjs className="text-[#339933]" />,
    description: "Entorno de ejecución para construir APIs rápidas y eficientes en el servidor.",
    link: "https://nodejs.org",
  },
  {
    title: "PostgreSQL",
    icon: <SiPostgresql className="text-[#4169E1]" />,
    description: "Base de datos relacional avanzada con enfoque en la integridad de los datos.",
    link: "https://www.postgresql.org",
  },
  {
    title: "MySQL",
    icon: <SiMysql className="text-[#4479A1]" />,
    description: "Sistema de gestión de bases de datos relacionales estándar y confiable.",
    link: "https://www.mysql.com",
  },
  {
    title: "Git",
    icon: <SiGit className="text-[#F05032]" />,
    description: "Sistema de control de versiones esencial para el seguimiento de cambios.",
    link: "https://git-scm.com",
  },
  {
    title: "GitHub",
    icon: <SiGithub className="text-white" />,
    description: "Plataforma de colaboración y alojamiento de código para equipos globales.",
    link: "https://github.com",
  },
  {
    title: "Vercel",
    icon: <SiVercel className="text-white" />,
    description: "Plataforma de deployment optimizada para frameworks frontend con CI/CD integrado.",
    link: "https://vercel.com",
  },
  {
    title: "Framer Motion",
    icon: <SiFramer className="text-[#0055FF]" />,
    description: "Biblioteca de animaciones para React con API declarativa y potente.",
    link: "https://www.framer.com/motion/",
  },
  {
    title: "Antigravity",
    icon: <TbSparkles className="text-[#00D9FF]" />,
    description: "Asistente de IA avanzado para desarrollo de código y automatización.",
    link: "#",
  },
];