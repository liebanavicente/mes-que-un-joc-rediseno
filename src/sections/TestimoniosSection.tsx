import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "¡SUPER RECOMENDABLE! Celebramos el cumple de mi sobrinito y todo estuvo perfecto. Todo estaba impecable y a la hora acordada. La decoración de 10 y la atención de los dueños inmejorable. Definitivamente volveremos a reservar con ellos.",
    name: 'Grace Cabadiana',
    source: 'Google Reviews',
  },
  {
    text: "Todo perfecto. Los dueños muy atentos y simpáticos te explican todo el funcionamiento. El local está súper bien, muy limpio y todo correcto. Volveré a repetir sin duda alguna.",
    name: 'Abigail Ceme',
    source: 'Google Reviews',
  },
  {
    text: "Celebramos el cumpleaños de mi madre y todo fue genial. Ana es un encanto, siempre dispuesta a ayudarte. El local está muy bien ubicado al lado del metro. Repetiremos para cualquier celebración.",
    name: 'Miriam Rodríguez',
    source: 'Google Reviews',
  },
  {
    text: "Llevamos a nuestro hijo de 6 años y sus 12 amigos. No paramos de recibir mensajes de los padres preguntando dónde habíamos celebrado el cumple. ¡Un éxito total!",
    name: 'Carlos Martín',
    source: 'Instagram',
  },
  {
    text: "La decoración de Harry Potter que montaron superó todas nuestras expectativas. Hasta los padres queríamos quedarnos a celebrar. Profesionales de principio a fin.",
    name: 'Laura Puig',
    source: 'Google Reviews',
  },
  {
    text: "Segundo cumpleaños que celebramos aquí y ya estamos pensando en el tercero. Ana y Hafsa hacen que todo sea fácil. ¡Son mágicas!",
    name: 'Familia Gómez',
    source: 'Instagram',
  },
];

export default function TestimoniosSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', slidesToScroll: 1 },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi]);

  return (
    <section id="testimonios" className="section-padding bg-bg">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto scroll-reveal">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[48px] font-semibold text-charcoal leading-tight">
            Lo que dicen las familias
          </h2>
          <p className="mt-4 text-lg text-stone leading-relaxed">
            Opiniones reales de Google y redes sociales
          </p>
        </div>

        <div className="mt-12 lg:mt-16 relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="flex-none w-[85%] sm:w-[45%] lg:w-[31%]"
                >
                  <div className="card-base p-6 h-full flex flex-col">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={16} fill="#D4A24A" className="text-tertiary" />
                      ))}
                    </div>

                    <Quote size={20} className="text-primary/30 mt-4" />
                    <p className="mt-2 text-charcoal text-sm leading-relaxed flex-1 italic">
                      &ldquo;{t.text}&rdquo;
                    </p>

                    <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
                      <span className="font-body font-semibold text-sm text-charcoal">
                        {t.name}
                      </span>
                      <span className="badge bg-sage text-stone text-xs">
                        {t.source}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-6 w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-stone hover:text-primary hover:shadow-md transition-all"
            aria-label="Anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-6 w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-stone hover:text-primary hover:shadow-md transition-all"
            aria-label="Siguiente"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === selectedIndex ? 'bg-primary w-6' : 'bg-stone/30'
              }`}
              aria-label={`Ir al testimonio ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
