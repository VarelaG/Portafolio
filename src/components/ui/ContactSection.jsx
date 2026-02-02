import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Label } from "./label";
import { Input } from "./input";
import { motion } from "framer-motion";

export default function ContactSection() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // No olvides cambiar 'TU_TEMPLATE_ID' por el de EmailJS
    emailjs.sendForm(
      'service_lt4fank',
      'template_kl3flxs',
      form.current,
      'J-Jt80Gzq85Gc0ZiM'
    )
      .then((result) => {
        alert("¡Mensaje enviado con éxito!");
        form.current.reset();
      }, (error) => {
        alert("Hubo un error: " + error.text);
      });
  };

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center py-20 px-4">

      {/* Fondo con gradientes sutiles */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black"></div>

      {/* Efectos de luz de fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neutral-500/5 rounded-full blur-3xl"></div>

      {/* Patrón de puntos sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:32px_32px] opacity-30"></div>

      <div className="relative z-10 max-w-4xl w-full">

        {/* Header de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-neutral-300 text-xs font-bold tracking-wider">
              CONTACTO
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-white">¿Trabajamos</span>
            <br />
            <span className="bg-gradient-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent">
              juntos?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-neutral-400 text-lg max-w-2xl mx-auto"
          >
            Cuéntame sobre tu proyecto y hagamos realidad esa idea que tienes en mente.
          </motion.p>
        </motion.div>

        {/* Formulario con diseño premium */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="max-w-2xl w-full mx-auto"
        >
          <div className="relative group">
            {/* Glow effect detrás del formulario */}
            <div className="absolute -inset-1 bg-gradient-to-r from-white/10 via-white/5 to-white/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Formulario */}
            <div className="relative p-8 md:p-12 bg-neutral-950/50 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">
              <form ref={form} onSubmit={sendEmail}>
                <div className="flex flex-col space-y-6">

                  {/* Grid de 2 columnas en desktop */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2 w-full text-left">
                      <Label htmlFor="user_name" className="text-white text-sm font-medium">
                        Nombre
                      </Label>
                      <Input
                        id="user_name"
                        name="user_name"
                        placeholder="Tu nombre"
                        type="text"
                        required
                        className="bg-neutral-900/50 border-white/10 focus:border-white/30"
                      />
                    </div>

                    <div className="flex flex-col space-y-2 w-full text-left">
                      <Label htmlFor="user_email" className="text-white text-sm font-medium">
                        Email
                      </Label>
                      <Input
                        id="user_email"
                        name="user_email"
                        placeholder="tu@email.com"
                        type="email"
                        required
                        className="bg-neutral-900/50 border-white/10 focus:border-white/30"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2 w-full text-left">
                    <Label htmlFor="message" className="text-white text-sm font-medium">
                      Mensaje
                    </Label>
                    <textarea
                      id="message"
                      name="message"
                      className="flex min-h-[160px] w-full rounded-xl border border-white/10 bg-neutral-900/50 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30 transition duration-200 resize-none"
                      placeholder="Cuéntame sobre tu proyecto..."
                      required
                    />
                  </div>

                  <button
                    className="group relative bg-white text-black hover:bg-neutral-100 active:scale-[0.98] transition-all duration-200 w-full font-semibold h-12 rounded-xl shadow-lg overflow-hidden"
                    type="submit"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Enviar Mensaje
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    {/* Efecto de brillo en hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Información adicional */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-12"
        >
        </motion.div>

      </div>
    </section>
  );
}
