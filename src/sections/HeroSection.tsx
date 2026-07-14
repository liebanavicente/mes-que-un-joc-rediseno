import { useHeroAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight, Star } from 'lucide-react';

export default function HeroSection() {
  const ref = useHeroAnimation();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-screen flex items-center pt-[72px] overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FDF6ED 0%, #FEFCF8 50%, #F2F5F3 100%)',
      }}
    >
      <div className="container-main w-full py-12 md:py-16 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="hero-title font-heading text-4xl sm:text-5xl lg:text-[64px] font-bold leading-[1.1] tracking-tight text-charcoal">
              Celebra los{' '}
              <span className="text-primary">momentos</span>{' '}
              que importan
            </h1>

            <p className="hero-subtitle mt-6 text-lg md:text-xl text-stone leading-relaxed max-w-xl mx-auto lg:mx-0">
              El espacio perfecto para cumpleaños infantiles en Santa Coloma de Gramenet.
              Tú solo preocúpate de sonreír; nosotros nos encargamos de todo lo demás.
            </p>

            <div className="hero-cta mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollTo('contacto')}
                className="btn-primary group"
              >
                Reserva tu fecha
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo('la-sala')}
                className="btn-ghost"
              >
                Ver nuestra sala
              </button>
            </div>

            <div className="hero-badge mt-6 inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#D4A24A" className="text-tertiary" />
                ))}
              </div>
              <span className="text-sm font-body font-medium text-stone">
                4.9/5 en Google · Más de 500 cumpleaños celebrados
              </span>
            </div>
          </div>

          <div className="order-1 lg:order-2 hero-image">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/images/hero.jpg"
                  alt="Sala de celebraciones Més que un joc con decoración de cumpleaños infantil"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-lg -z-10" />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-tertiary/15 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
