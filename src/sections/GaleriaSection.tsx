import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  { src: '/images/gallery-1.jpg', alt: 'Parque de bolas de dos plantas con zona de escalada', span: 'col-span-2 row-span-2' },
  { src: '/images/gallery-2.jpg', alt: 'Decoración de cumpleaños con globos rosas y dorados', span: 'col-span-1 row-span-2' },
  { src: '/images/gallery-3.jpg', alt: 'Sala de juegos arcade con fútbolín y máquinas', span: 'col-span-1 row-span-1' },
  { src: '/images/gallery-4.jpg', alt: 'Tarta de cumpleaños de unicornio con cupcakes', span: 'col-span-1 row-span-1' },
  { src: '/images/gallery-5.jpg', alt: 'Photocall con globos blancos y dorados y candy bar', span: 'col-span-1 row-span-2' },
  { src: '/images/gallery-6.jpg', alt: 'Zona de descanso para padres con vistas al parque de bolas', span: 'col-span-2 row-span-1' },
  { src: '/images/gallery-7.jpg', alt: 'Decoración de cumpleaños temática superhéroes', span: 'col-span-1 row-span-1' },
  { src: '/images/gallery-8.jpg', alt: 'Detalles de fiesta infantil con bolsas de regalo', span: 'col-span-1 row-span-1' },
  { src: '/images/gallery-9.jpg', alt: 'Simulador de conducción para niños con luces LED', span: 'col-span-1 row-span-2' },
];

export default function GaleriaSection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);

  const goNext = () => {
    if (lightbox !== null) setLightbox((lightbox + 1) % galleryImages.length);
  };

  const goPrev = () => {
    if (lightbox !== null) setLightbox((lightbox - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="servicios" className="section-padding bg-cream">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto scroll-reveal">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[48px] font-semibold text-charcoal leading-tight">
            Momentos que perduran
          </h2>
          <p className="mt-4 text-lg text-stone leading-relaxed">
            Cada celebración es única. Estos son algunos recuerdos de familias que ya confiaron en nosotros.
          </p>
        </div>

        <div className="mt-12 lg:mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4 auto-rows-[180px] md:auto-rows-[200px] lg:auto-rows-[220px]">
          {galleryImages.map((img, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              className={`${img.span} relative group overflow-hidden rounded-lg scroll-reveal`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[60] bg-dark/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Cerrar"
          >
            <X size={28} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft size={32} />
          </button>

          <img
            src={galleryImages[lightbox].src}
            alt={galleryImages[lightbox].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Siguiente"
          >
            <ChevronRight size={32} />
          </button>

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm font-body">
            {lightbox + 1} / {galleryImages.length}
          </p>
        </div>
      )}
    </section>
  );
}
