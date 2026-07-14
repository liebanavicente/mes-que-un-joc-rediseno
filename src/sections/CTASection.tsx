import { MessageCircle, Phone } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 md:py-24 lg:py-32 bg-dark">
      <div className="container-main text-center scroll-reveal">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-[48px] font-semibold text-bg leading-tight max-w-3xl mx-auto">
          ¿Listo para crear un recuerdo inolvidable?
        </h2>
        <p className="mt-6 text-lg text-bg/70 max-w-xl mx-auto leading-relaxed">
          Las mejores fechas se reservan con semanas de antelación.
          No dejes que tu fecha preferida se ocupe.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/34632622585?text=Hola%20Més%20que%20un%20joc!%20Me%20gustaría%20reservar%20una%20fecha."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp group"
          >
            <MessageCircle size={20} fill="white" />
            Reservar por WhatsApp
          </a>
          <a
            href="tel:+34632622585"
            className="inline-flex items-center justify-center gap-2 text-tertiary font-body font-semibold hover:underline transition-all"
          >
            <Phone size={18} />
            O llámanos al 632 622 585
          </a>
        </div>

        <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-tertiary/20 border border-tertiary/30 rounded-full">
          <span className="text-tertiary text-sm font-body font-medium">
            🎂 Solo 3 fines de semana disponibles este mes
          </span>
        </div>
      </div>
    </section>
  );
}
