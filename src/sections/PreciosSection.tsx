import { Check } from 'lucide-react';

const packages = [
  {
    name: 'Básico',
    price: '220',
    description: 'Perfecto para celebraciones íntimas',
    popular: false,
    features: [
      'Acceso a la sala durante 3 horas',
      'Decoración temática básica (15 temas)',
      'Parque de bolas y máquinas arcade',
      'Mobiliario: mesas, sillas y bancos',
      'Uso de zona gourmet (nevera, microondas, cafetera)',
      'Acompañamiento de Ana o Hafsa',
      'Limpieza post-evento incluida',
    ],
    cta: 'Reservar Básico',
  },
  {
    name: 'Premium',
    price: '320',
    description: 'La opción más elegida por las familias',
    popular: true,
    features: [
      'Todo lo del paquete Básico',
      '4 horas de celebración',
      'Decoración premium personalizada',
      'Pack de globos y photocall',
      'Música ambiental personalizada',
      '1 tarta personalizada (hasta 20 raciones)',
      'Zona de regalos decorada',
    ],
    cta: 'Reservar Premium',
  },
  {
    name: 'Deluxe',
    price: '450',
    description: 'La experiencia completa sin preocupaciones',
    popular: false,
    features: [
      'Todo lo del paquete Premium',
      '5 horas de celebración',
      'Decoración exclusiva diseñada a medida',
      'Animador/a durante 2 horas',
      'Tarta personalizada + candy bar',
      'Fotógrafo profesional (20 fotos editadas)',
      'Pack de recuerdos para cada niño',
    ],
    cta: 'Reservar Deluxe',
  },
];

export default function PreciosSection() {
  const scrollToContact = () => {
    const el = document.getElementById('contacto');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="precios" className="section-padding bg-sage">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto scroll-reveal">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[48px] font-semibold text-charcoal leading-tight">
            Elige tu celebración
          </h2>
          <p className="mt-4 text-lg text-stone leading-relaxed">
            Tres opciones pensadas para diferentes necesidades. Todas incluyen decoración,
            acceso completo a instalaciones y acompañamiento personalizado.
          </p>
        </div>

        <div className="stagger-group grid md:grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-16">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`stagger-item relative bg-white rounded-lg p-6 lg:p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                pkg.popular
                  ? 'ring-2 ring-primary shadow-lg md:-mt-4 md:mb-4'
                  : 'shadow-card hover:shadow-card-hover'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="badge bg-primary text-white text-xs px-4 py-1">
                    Más popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="font-heading text-2xl font-semibold text-charcoal">
                  {pkg.name}
                </h3>
                <p className="mt-1 text-sm text-stone">{pkg.description}</p>
              </div>

              <div className="mt-6 text-center">
                <span className="font-body text-5xl font-bold text-primary">
                  {pkg.price}
                </span>
                <span className="text-stone text-sm ml-1">€/celebración</span>
              </div>

              <ul className="mt-8 space-y-3 flex-1">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={18} className="text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-charcoal leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`mt-8 w-full py-3.5 rounded-md font-body font-semibold text-sm transition-all duration-200 ${
                  pkg.popular
                    ? 'bg-primary text-white hover:bg-primary-hover shadow-primary hover:shadow-lg'
                    : 'bg-cream text-charcoal hover:bg-primary/10'
                }`}
              >
                {pkg.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-stone scroll-reveal">
          * Los precios indicados son para fines de semana. 15% de descuento de lunes a jueves.
          {' '}Seña de 100€ para reservar la fecha.
        </p>
      </div>
    </section>
  );
}
