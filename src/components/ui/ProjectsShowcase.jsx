import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Importar las imágenes
import parrillaImg from '../../assets/parrilla_premium.png';
import ropaImg from '../../assets/ropa_urbano.png';
import yogaImg from '../../assets/yoga_alma.png';
import arquitecturaImg from '../../assets/arquitectura_vantage.png';

export function ProjectsShowcase() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [hoveredProject, setHoveredProject] = useState(null);
    const [isIframeLoading, setIsIframeLoading] = useState(true);

    const projects = [
        {
            id: 1,
            title: "FUEGO",
            subtitle: "Parrilla Premium",
            category: "GASTRONOMÍA PREMIUM",
            description: "Landing page 'Dark Luxury' con sistema de reservas integrado, galería inmersiva y experiencia gastronómica premium.",
            image: parrillaImg,
            htmlPath: "/src/proyectos/parrilla_premium.html",
            tags: ["Next.js", "Tailwind", "Framer Motion"],
            size: "large"
        },
        {
            id: 2,
            title: "URBANO",
            subtitle: "Fashion Store",
            category: "E-COMMERCE",
            description: "Estilo Brutalista & Urbano con carrito de compras dinámico y experiencia de usuario moderna.",
            image: ropaImg,
            htmlPath: "/src/proyectos/ropa_urbano.html",
            tags: ["React", "Tailwind", "GSAP"],
            size: "small"
        },
        {
            id: 3,
            title: "ALMA",
            subtitle: "Yoga Studio",
            category: "BIENESTAR",
            description: "Diseño orgánico minimalista con sistema de reservas de clases y galería de instructores.",
            image: yogaImg,
            htmlPath: "/src/proyectos/yoga_alma.html",
            tags: ["Next.js", "Framer Motion", "Tailwind"],
            size: "small"
        },
        {
            id: 4,
            title: "VANTAGE",
            subtitle: "Arquitectura",
            category: "ARQUITECTURA MODERNA",
            description: "Estética 'Dark Tech' futurista para estudio de arquitectura con galería 3D interactiva de proyectos.",
            image: arquitecturaImg,
            htmlPath: "/src/proyectos/arquitectura_vantage.html",
            tags: ["React", "Three.js", "GSAP"],
            size: "large"
        }
    ];

    const handleProjectClick = (project) => {
        setIsIframeLoading(true);
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black" id="proyectos-premium">

            {/* Fondo con gradientes sutiles */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-950/20 to-black"></div>

            {/* Efectos de luz de fondo */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neutral-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>

            <div className="relative max-w-7xl mx-auto">

                {/* Header de la sección */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4"
                    >

                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        <span className="text-white">Proyectos</span>
                        <span className="block text-neutral-500 mt-2">
                            Destacados
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-neutral-400 text-lg max-w-2xl mx-auto"
                    >
                        Experiencias digitales que combinan diseño excepcional con tecnología de vanguardia
                    </motion.p>
                </div>

                {/* Grid de proyectos */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">

                    {/* Proyecto 1 - Grande - Izquierda */}
                    <ProjectCard
                        project={projects[0]}
                        delay={0.1}
                        className="lg:col-span-7"
                        onClick={() => handleProjectClick(projects[0])}
                        onHover={(isHovered) => setHoveredProject(isHovered ? projects[0] : null)}
                    />

                    {/* Proyecto 2 - Pequeño - Derecha Superior */}
                    <ProjectCard
                        project={projects[1]}
                        delay={0.2}
                        className="lg:col-span-5"
                        onClick={() => handleProjectClick(projects[1])}
                        onHover={(isHovered) => setHoveredProject(isHovered ? projects[1] : null)}
                    />

                </div>

                {/* Segunda fila */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* Proyecto 3 - Pequeño - Izquierda */}
                    <ProjectCard
                        project={projects[2]}
                        delay={0.3}
                        className="lg:col-span-5"
                        onClick={() => handleProjectClick(projects[2])}
                        onHover={(isHovered) => setHoveredProject(isHovered ? projects[2] : null)}
                    />

                    {/* Proyecto 4 - Grande - Derecha */}
                    <ProjectCard
                        project={projects[3]}
                        delay={0.4}
                        className="lg:col-span-7"
                        onClick={() => handleProjectClick(projects[3])}
                        onHover={(isHovered) => setHoveredProject(isHovered ? projects[3] : null)}
                    />

                </div>

            </div>

            {/* Modal para proyecto completo */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
                        onClick={closeModal}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full h-full max-w-[95vw] max-h-[95vh] rounded-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Botón cerrar */}
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2" className="group-hover:rotate-90 transition-transform duration-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Loader mientras carga el iframe */}
                            {isIframeLoading && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-900 z-20"
                                >
                                    <div className="text-center">
                                        {/* Spinner */}
                                        <div className="w-16 h-16 border-4 border-white/10 border-t-white rounded-full animate-spin mb-6"></div>

                                        {/* Texto */}
                                        <h3 className="text-white text-xl font-bold mb-2">
                                            Cargando {selectedProject.title}
                                        </h3>
                                        <p className="text-neutral-400 text-sm mb-6">
                                            {selectedProject.subtitle}
                                        </p>

                                        {/* Barra de progreso animada */}
                                        <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-gradient-to-r from-white/50 via-white to-white/50"
                                                initial={{ x: "-100%" }}
                                                animate={{ x: "100%" }}
                                                transition={{
                                                    repeat: Infinity,
                                                    duration: 1.5,
                                                    ease: "easeInOut"
                                                }}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Iframe con el proyecto HTML */}
                            <iframe
                                src={selectedProject.htmlPath}
                                title={`${selectedProject.title} - ${selectedProject.subtitle}`}
                                className="w-full h-full border-0 rounded-2xl"
                                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                                onLoad={() => setIsIframeLoading(false)}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

// Componente de tarjeta de proyecto
function ProjectCard({ project, delay, className, onClick, onHover }) {
    const isLarge = project.size === "large";

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className={`group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer ${className}`}
            onClick={onClick}
            onMouseEnter={() => onHover(true)}
            onMouseLeave={() => onHover(false)}
        >
            {/* Imagen de fondo */}
            <div className="absolute inset-0">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-110"
                />
                {/* Overlay oscuro */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500"></div>
            </div>

            {/* Efecto de brillo en hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Contenido */}
            <div className={`absolute inset-0 ${isLarge ? 'p-8' : 'p-6'} flex flex-col justify-between`}>
                {/* Badge superior */}
                <div className="flex justify-between items-start">
                    <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-neutral-300 text-xs font-bold tracking-wider">
                        {project.category}
                    </span>
                    {isLarge && (
                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-45">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    )}
                </div>

                {/* Info inferior */}
                <div className="transform transition-all duration-500 group-hover:-translate-y-2">
                    <h3 className={`${isLarge ? 'text-4xl md:text-5xl' : 'text-3xl'} font-bold text-white mb-3 tracking-tight`}>
                        {project.title} <span className="text-neutral-400">|</span> {project.subtitle}
                    </h3>
                    <p className={`text-neutral-300 ${isLarge ? 'text-base' : 'text-sm'} mb-4 max-w-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0`}>
                        {project.description}
                    </p>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 flex-wrap">
                        {project.tags.map((tag, index) => (
                            <span key={index} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Borde con gradiente */}
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/30 transition-all duration-500"></div>

            {/* Indicador de "Click para ver más" */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-bold">
                    Click para ver completo
                </div>
            </div>
        </motion.div>
    );
}

