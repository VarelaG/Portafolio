import React from 'react';
import { motion } from 'framer-motion';
import parallaxBg from '../../assets/parallax_bg.png';

export function ParallaxSection() {
    return (
        <section
            className="relative h-[60vh] flex items-center justify-center overflow-hidden"
            style={{
                backgroundImage: `url(${parallaxBg})`,
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
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
                    className="text-4xl md:text-6xl font-bold text-white mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    El Código es{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                        Arte en Movimiento
                    </span>
                </motion.h2>

                <motion.p
                    className="text-lg md:text-xl text-gray-300 font-light tracking-wide"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Cada línea de código es una oportunidad para crear experiencias extraordinarias
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
