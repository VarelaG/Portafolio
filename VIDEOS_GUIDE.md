# Guía para agregar tus videos de proyectos

## 📁 Ubicación de los videos

Coloca tus videos en la carpeta `public/videos/` con los siguientes nombres:

- `proyecto1.mp4` - FUEGO Parrilla
- `proyecto2.mp4` - NEXO Store  
- `proyecto3.mp4` - ALMA Studio
- `proyecto4.mp4` - ONYX Detailing

## 🎬 Comportamiento de los videos

### Desktop (pantallas grandes):
- Los videos se reproducen automáticamente al pasar el mouse por encima (hover)
- Se pausan y reinician cuando quitas el mouse

### Mobile (pantallas pequeñas):
- Los videos se reproducen al hacer clic/tap en el proyecto
- Hacer clic nuevamente pausa el video
- Solo un video puede reproducirse a la vez

## 📝 Personalización

Si quieres cambiar los nombres de los proyectos, descripciones o tecnologías:

1. Abre `src/components/ui/ProjectsShowcase.jsx`
2. Busca el proyecto que quieres editar
3. Modifica:
   - El título (ej: "FUEGO | Parrilla")
   - La descripción
   - Las etiquetas de tecnología
   - El badge superior (ej: "GASTRONOMÍA PREMIUM")

## 🎨 Colores

Los colores están adaptados a tu estética minimalista:
- Fondo: Negro puro (#000000)
- Texto principal: Blanco
- Texto secundario: Grises neutros
- Acentos: Blanco con opacidad
- Bordes en hover: Blanco semi-transparente

## ⚡ Optimización

Para mejor rendimiento:
- Usa videos en formato MP4 (H.264)
- Resolución recomendada: 1920x1080 o menor
- Duración: 5-15 segundos en loop
- Comprime los videos para reducir el tamaño de archivo
