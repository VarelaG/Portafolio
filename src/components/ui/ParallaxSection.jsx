import React from 'react';
import { motion } from 'framer-motion';


export function ParallaxSection() {
    return (
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">

            {/* Imagen de fondo - Efecto parallax con bg-fixed */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
                style={{
                    backgroundImage: `url(/parallax_mate.jpg)`,
                }}
            ></div>

            {/* Overlay oscuro para mejorar legibilidad */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Contenido */}
            <motion.div
                className="relative z-10 text-center px-4 max-w-4xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >
                <motion.h2
                    className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-mono leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                        while
                    </span>
                    (mate.caliente) {'{ '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                        deploy();
                    </span>
                    {' }'}
                </motion.h2>

                <motion.p
                    className="text-lg md:text-xl text-gray-300 font-light tracking-wide"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Lanzando proyectos mientras el mate esté cebado
                </motion.p>

                {/* Línea decorativa */}
                <motion.div
                    className="mt-8 mx-auto w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                ></motion.div>
            </motion.div>
        </section>
    );
}
