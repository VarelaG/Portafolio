import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef } from "react";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10", className)}>
      {items.map((item, idx) => (
        <TechCard
          key={item?.link}
          item={item}
          idx={idx}
          isHovered={hoveredIndex === idx}
          onHover={() => setHoveredIndex(idx)}
          onLeave={() => setHoveredIndex(null)}
        />
      ))}
    </div>
  );
};

function TechCard({ item, idx, isHovered, onHover, onLeave }) {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Extraer color del icono (si existe)
  const getIconColor = () => {
    if (item.icon?.props?.className) {
      const match = item.icon.props.className.match(/text-\[([^\]]+)\]/);
      return match ? match[1] : '#FFFFFF';
    }
    return '#FFFFFF';
  };

  const iconColor = getIconColor();

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: idx * 0.05,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="relative group block p-2 h-full w-full"
    >
      {/* Glow effect de fondo */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 blur-xl"
        animate={{
          opacity: isHovered ? 0.3 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{
          background: `radial-gradient(circle at 50% 50%, ${iconColor}40, transparent 70%)`,
        }}
      />

      {/* Card sin transformación 3D */}
      <div className="relative h-full">
        {/* Glow effect que sigue el cursor */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, ${iconColor}20, transparent 40%)`,
          }}
        />

        {/* Borde animado con glow */}
        <motion.div
          className="absolute inset-0 rounded-3xl"
          animate={{
            boxShadow: isHovered
              ? `0 0 30px ${iconColor}30, inset 0 0 30px ${iconColor}10`
              : "0 0 0px transparent",
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Partículas flotantes en hover */}
        {isHovered && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full pointer-events-none"
                style={{ backgroundColor: iconColor }}
                initial={{
                  x: Math.random() * 100 + '%',
                  y: '100%',
                  opacity: 0
                }}
                animate={{
                  y: '-20%',
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 1.5 + Math.random(),
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </>
        )}

        <Card isHovered={isHovered}>
          <div className="flex items-center gap-4">
            {/* Icono con animación de rotación */}
            <motion.div
              className="text-3xl"
              animate={{
                scale: isHovered ? 1.2 : 1,
                rotateY: isHovered ? 360 : 0,
              }}
              transition={{
                scale: { type: "spring", stiffness: 300, damping: 20 },
                rotateY: { duration: 0.6 }
              }}
            >
              {item.icon}
            </motion.div>
            <CardTitle isHovered={isHovered}>{item.title}</CardTitle>
          </div>
        </Card>
      </div>
    </motion.div>
  );
}

export const Card = ({ className, children, isHovered }) => {
  return (
    <motion.div
      className={cn(
        "rounded-3xl h-full w-full p-6 overflow-hidden bg-neutral-950/50 backdrop-blur-sm border border-white/[0.05] relative z-20",
        className
      )}
      animate={{
        borderColor: isHovered ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.05)",
        backgroundColor: isHovered ? "rgba(10,10,10,0.8)" : "rgba(10,10,10,0.5)",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative z-50">
        {children}
      </div>
    </motion.div>
  );
};

export const CardTitle = ({ className, children, isHovered }) => {
  return (
    <motion.h4
      className={cn("text-zinc-100 font-bold tracking-wide text-lg", className)}
      animate={{
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{ type: "spring", stiffness: 400 }}
    >
      {children}
    </motion.h4>
  );
};

export const CardDescription = ({ className, children, isHovered }) => {
  return (
    <motion.p
      className={cn("mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}
      animate={{
        color: isHovered ? "rgb(212, 212, 212)" : "rgb(161, 161, 170)",
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.p>
  );
};