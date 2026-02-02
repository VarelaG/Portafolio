import React from "react";
import profileImage from "../../assets/Screenshot_20230914_104616_Photos.jpg";
import { motion } from "framer-motion";
import { Github, Linkedin, FileText } from "lucide-react";

export function HeroIntro() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden">

      {/* Fondo de puntos sutil (más oscuro) */}
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:32px_32px]"></div>

      {/* Resplandor central negro/gris muy suave */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_50%,rgba(20,20,20,1),transparent)]"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-16 px-6 max-w-7xl">

        {/* Foto con borde sutil y sombra blanca suave */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          {/* Brillo blanco muy tenue detrás de la foto */}
          <div className="absolute -inset-4 bg-white/5 rounded-full blur-3xl"></div>

          <img
            src={profileImage}
            alt="Gonzalo Varela"
            className="object-[50%_35%] relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)]"
          />
        </motion.div>

        {/* Texto en blanco y gris */}
        <div className="flex flex-col text-center md:text-left">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-500 font-mono tracking-[0.3em] uppercase text-sm mb-4"
          >
            Portfolio 2025
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-8xl font-bold text-white tracking-tighter"
          >
            Gonzalo <br />
            <span className="text-neutral-500">Varela</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="h-1 w-20 bg-white mt-8 mb-8 mx-auto md:mx-0"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-neutral-400 text-lg md:text-xl max-w-md leading-relaxed font-light"
          >
            Transformo ideas en experiencias digitales premium que combinan diseño excepcional con código limpio y escalable.
          </motion.p>

          {/* Botones de Acción (CV + Redes) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="flex items-center gap-4 mt-8 justify-center md:justify-start"
          >
            {/* Botón CV */}
            <a
              href="/cv.pdf" // Reemplazar con la ruta real de tu CV
              download="CV_Gonzalo_Varela.pdf"
              className="flex items-center gap-2 px-6 py-3 bg-white/5 text-white border border-white/10 font-medium rounded-full hover:bg-white/10 transition-colors"
            >
              <FileText size={20} />
              <span>Descargar CV</span>
            </a>

            {/* Socials */}
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/tu-usuario" // Reemplazar
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/tu-usuario" // Reemplazar
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll minimalista */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent opacity-20"></div>
      </motion.div>
    </div>
  );
}