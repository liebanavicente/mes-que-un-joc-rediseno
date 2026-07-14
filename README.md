# Més Que Un Joc — Rediseño Web 2026

> **Live demo:** [https://5v3f3y2arcaoi.kimi.page](https://5v3f3y2arcaoi.kimi.page)

Rediseño completo de la web de celebraciones infantiles **Més Que Un Joc**, ubicada en Santa Coloma de Gramenet, Barcelona. Proyecto construido con estándares de una agencia premium.

---

## Stack Técnico

| Tecnología | Versión |
|------------|---------|
| React | 19.2 |
| TypeScript | 5.9 |
| Vite | 7.2 |
| Tailwind CSS | 3.4 |
| GSAP + ScrollTrigger | 3.15 |
| Embla Carousel | 8.6 |
| Lucide Icons | 0.562 |

---

## Sistema de Diseño

### Tipografía
- **Títulos:** Playfair Display (serif)
- **Cuerpo:** Inter (sans-serif)

### Paleta de Colores
| Token | Hex | Uso |
|-------|-----|-----|
| Primary | `#D4694A` | CTAs, acentos, hover |
| Secondary | `#3D6B7B` | Fondos alternos, iconos |
| Tertiary | `#D4A24A` | Destacados, estrellas |
| Dark | `#2C3E50` | Footer, secciones oscuras |
| Background | `#FEFCF8` | Fondo principal |
| Cream | `#FDF6ED` | Secciones alternas |
| Sage | `#F2F5F3` | Secciones info |

### Espaciado
- Sistema basado en cuadrícula de 8px
- Ancho máximo: 1200px
- Separación entre secciones: 96px

---

## Estructura del Proyecto

```
src/
├── components/
│   ├── Navbar.tsx          # Navegación fija con scroll effects
│   ├── Footer.tsx          # Footer 4 columnas
│   └── WhatsAppButton.tsx  # Botón flotante WhatsApp
├── sections/
│   ├── HeroSection.tsx     # Hero con animación GSAP
│   ├── VentajasSection.tsx # Features + estadísticas
│   ├── GaleriaSection.tsx  # Grid masonry + lightbox
│   ├── TestimoniosSection.tsx # Carrusel con Embla
│   ├── PreciosSection.tsx  # 3 paquetes comparativos
│   ├── CTASection.tsx      # Call to action final
│   └── ContactoSection.tsx # Formulario + proceso
├── hooks/
│   └── useScrollAnimation.ts # Hook GSAP ScrollTrigger
└── App.tsx                 # Layout principal
```

---

## Instalación

```bash
# Clonar repositorio
git clone https://github.com/liebanavicente/mes-que-un-joc-rediseno.git
cd mes-que-un-joc-rediseno

# Instalar dependencias
npm install

# Descargar imágenes
bash scripts/download-images.sh

# Servidor de desarrollo
npm run dev

# Build para producción
npm run build
```

---

## Imágenes

Las 10 imágenes de la carpeta `public/images/` fueron generadas por IA específicamente para este proyecto.

### Descargar imágenes

Después de clonar, ejecuta:

```bash
# Script automático
bash scripts/download-images.sh

# O setup completo (dependencias + imágenes + build)
bash scripts/setup.sh
```

Las imágenes también están disponibles en: https://5v3f3y2arcaoi.kimi.page/images/

| Archivo | Descripción |
|---------|-------------|
| `hero.jpg` | Sala decorada para cumpleaños (hero) |
| `gallery-1.jpg` | Parque de bolas de dos plantas |
| `gallery-2.jpg` | Decoración con globos rosas y dorados |
| `gallery-3.jpg` | Sala arcade con fútbolín |
| `gallery-4.jpg` | Tarta de unicornio con cupcakes |
| `gallery-5.jpg` | Photocall y candy bar |
| `gallery-6.jpg` | Zona de descanso para padres |
| `gallery-7.jpg` | Decoración temática superhéroes |
| `gallery-8.jpg` | Detalles de fiesta infantil |
| `gallery-9.jpg` | Simulador de conducción para niños |

---

## Secciones Implementadas

1. **Hero** — Título animado con GSAP, imagen generada por IA, badge de valoraciones, CTAs duales
2. **Ventajas** — 4 tarjetas con iconos + estadísticas (500+, 200m², 4.9/5, 20+)
3. **Galería** — Grid masonry de 9 imágenes con lightbox y navegación
4. **Testimonios** — Carrusel con 6 reseñas reales, autoplay, flechas y dots
5. **Precios** — 3 paquetes (Básico 220€, Premium 320€, Deluxe 450€)
6. **CTA Final** — Fondo oscuro, botón WhatsApp, badge de urgencia
7. **Contacto** — 3 métodos de contacto, formulario completo, proceso de 4 pasos
8. **Footer** — 4 columnas: marca, navegación, contacto, redes

---

## Animaciones

- **GSAP ScrollTrigger:** Reveal fade-in + slide-up en todas las secciones
- **Stagger:** Tarjetas e imágenes aparecen secuencialmente
- **Hero timeline:** Secuencia animada de título, subtítulo, CTAs e imagen
- **Hover effects:** Elevación en tarjetas, escala en imágenes de galería
- **Reduced motion:** Se respeta `prefers-reduced-motion`

---

## Mejoras respecto a la web original

| Aspecto | Original | Rediseño |
|---------|----------|----------|
| Banner de Wix | Visible | Eliminado |
| Tipografía | Comic Sans/arcoíris | Playfair + Inter |
| Colores | Pasteles saturados | Terracota, petróleo, ocre |
| Precios | Inexistentes | 3 paquetes transparentes |
| Menú | "More" con subpáginas ocultas | Navegación clara de 6 links |
| Copyright | "Blown Ups Inc" | "Més que un joc" |
| Email | Gmail personal | info@mesqueunjoc.com |
| Testimonios | Texto plano sin estilo | Carrusel con estrellas y badge |
| Formulario | Campos centrados | Layout profesional con labels |
| WhatsApp | No existe | Botón flotante + CTA |

---

## Licencia

Proyecto creado para fines educativos y de demostración.

© 2026 — Rediseño por liebanavicente
