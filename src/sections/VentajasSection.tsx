import { ShieldCheck, Sparkles, Utensils, MapPin } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Instalaciones seguras e higienizadas',
    description:
      'Parque de bolas certificado, suelo antideslizante y desinfección completa después de cada celebración.',
  },
  {
    icon: Sparkles,
    title: 'Decoración incluida y personalizable',
    description:
      'Elige entre más de 20 temáticas: Frozen, Spider-Man, princesas, fútbol… O diseñamos una exclusiva para ti.',
  },
  {
    icon: Utensils,
    title: 'Zona gourmet equipada',
    description:
      'Nevera, microondas, cafetera Dolce Gusto y zona de catering a tu disposición. Trae tu tarta o encarga una personalizada.',
  },
  {
    icon: MapPin,
    title: 'A 1 minuto del metro Fondo',
    description:
      'Fácil acceso en transporte público y parking disponible en la zona. Tus invitados llegarán sin complicaciones.',
  },
];

export default function VentajasSection() {
  return (
    <section id="la-sala" className="section-padding bg-bg">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto scroll-reveal">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[48px] font-semibold text-charcoal leading-tight">
            Todo pensado para ti
          </h2>
          <p className="mt-4 text-lg text-stone leading-relaxed">
            Desde el primer minuto hasta el último, cada detalle está cuidado.
          </p>
        </div>

        <div className="stagger-group grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 lg:mt-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="stagger-item card-base p-6 lg:p-8 text-center lg:text-left"
            >
              <div className="w-12 h-12 mx-auto lg:mx-0 rounded-full bg-cream flex items-center justify-center">
                <feature.icon size={24} className="text-secondary" />
              </div>
              <h3 className="mt-5 font-body text-lg font-semibold text-charcoal">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-stone leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 scroll-reveal">
          {[
            { value: '500+', label: 'Cumpleaños celebrados' },
            { value: '200m²', label: 'De espacio diáfano' },
            { value: '4.9/5', label: 'Valoración en Google' },
            { value: '20+', label: 'Temáticas de decoración' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-4">
              <div className="font-heading text-3xl lg:text-4xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-stone font-body">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
