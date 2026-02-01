"use client";
import React from "react";
// Asegúrate de que este path sea correcto
import { HeroParallax } from "@/components/ui/hero-parallax";

// Importar los videos
// Importando directamente con los nombres de archivo proporcionados
import Video1 from "../../assets/WhatsApp Video 2026-01-31 at 23.44.48.mp4";
import Video2 from "../../assets/WhatsApp Video 2026-01-31 at 23.46.46.mp4";
import Video3 from "../../assets/WhatsApp Video 2026-01-31 at 23.48.04.mp4";
import Video4 from "../../assets/WhatsApp Video 2026-01-31 at 23.48.42.mp4";
import Video5 from "../../assets/WhatsApp Video 2026-01-31 at 23.50.43.mp4";

// Lista de videos
const videos = [Video1, Video2, Video3, Video4, Video5];

// Esta es la lista de datos que pasas al componente HeroParallax
// Generamos 15 items repitiendo los 5 videos
export const products = Array.from({ length: 10 }).map((_, index) => ({
  title: `Proyecto ${index + 1}`, // Placeholder title
  link: `https://github.com/tu-usuario/proyecto-${index + 1}`, // Link a GitHub
  thumbnail: videos[index % videos.length], // Cycle through videos
}));

// Este es el componente que usarás en tu página principal
export function HeroParallaxDemo() {
  // Simplemente renderiza el HeroParallax y le pasa los datos.
  return <HeroParallax products={products} />;
}