import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

export const FloatingNav = ({ className }) => {
    const { scrollY } = useScroll();
    const [visible, setVisible] = useState(false); // Cambiado a false para que inicie oculto

    useMotionValueEvent(scrollY, "change", (current) => {
        // Check if current is not undefined and is a number
        if (typeof current === "number") {
            let direction = current - scrollY.getPrevious();

            // En móvil, solo mostrar después de scroll de 100px
            if (scrollY.get() < 100) {
                setVisible(false);
            } else {
                if (direction < 0) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            }
        }
    });

    const navItems = [
        { name: "Inicio", link: "#intro" },
        { name: "Proyectos", link: "#projects" },
        { name: "Tecnologías", link: "#tech" },
        { name: "Contacto", link: "#contact" },
    ];

    return (
        <motion.div
            initial={{
                opacity: 1,
                y: -100,
            }}
            animate={{
                y: visible ? 0 : -100,
                opacity: visible ? 1 : 0,
            }}
            transition={{
                duration: 0.2,
            }}
            className={cn(
                "flex max-w-fit fixed top-5 inset-x-0 mx-auto border border-white/10 dark:border-white/[0.2] rounded-full bg-black/50 backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-8 pl-8 py-2 items-center justify-center space-x-6",
                className
            )}
        >
            {navItems.map((navItem, idx) => (
                <a
                    key={`link=${idx}`}
                    href={navItem.link}
                    className={cn(
                        "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-300 dark:hover:text-neutral-300 hover:text-white transition-colors text-sm font-medium"
                    )}
                >
                    <span>{navItem.name}</span>
                </a>
            ))}
            <a href="/cv.pdf" download className="border text-xs font-medium relative border-neutral-200 dark:border-white/[0.2] text-white px-4 py-2 rounded-full hidden sm:block">
                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-white to-transparent  h-px" />
                <span className="">Descargar CV</span>
            </a>
        </motion.div>
    );
};
