import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { LampContainer } from "./lamp";
import { Label } from "./label";
import { Input } from "./input";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
    <section className="bg-black w-full min-h-screen relative z-10 overflow-hidden">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="bg-gradient-to-br from-neutral-300 to-neutral-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          ¿Trabajamos <br /> juntos?
        </motion.h1>
      </LampContainer>

      {/* Formulario con animación de entrada y margen ajustado */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        className="max-w-md w-full mx-auto p-4 md:p-8 bg-black border border-white/10 rounded-2xl -mt-80 relative z-50 mb-20 shadow-2xl"
      >
        <form ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2 w-full text-left">
              <Label htmlFor="user_name" className="text-white">Nombre</Label>
              <Input id="user_name" name="user_name" placeholder="Tu nombre" type="text" required />
            </div>
            
            <div className="flex flex-col space-y-2 w-full text-left">
              <Label htmlFor="user_email" className="text-white">Email</Label>
              <Input id="user_email" name="user_email" placeholder="tu@email.com" type="email" required />
            </div>

            <div className="flex flex-col space-y-2 w-full text-left">
              <Label htmlFor="message" className="text-white">Mensaje</Label>
              <textarea 
                id="message" 
                name="message"
                className="flex h-32 w-full rounded-md border border-neutral-800 bg-zinc-900 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-600 transition duration-200"
                placeholder="¿En qué puedo ayudarte?"
                required
              />
            </div>

            <button
              className="bg-white text-black hover:bg-neutral-200 active:scale-[0.98] transition duration-200 block w-full font-medium h-10 rounded-md shadow-input"
              type="submit"
            >
              Enviar Mensaje &rarr;
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}