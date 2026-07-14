import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const navLinks = [
  { label: 'La Sala', href: '#la-sala' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Precios', href: '#precios' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark text-bg/80">
      <div className="container-main py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#inicio" className="font-heading text-2xl font-bold text-bg">
              Més que un joc
            </a>
            <p className="mt-3 text-sm text-bg/60 leading-relaxed max-w-xs">
              Celebraciones infantiles en Santa Coloma de Gramenet.
              Más de 500 familias ya confiaron en nosotros.
            </p>
          </div>

          <div>
            <h4 className="font-body font-semibold text-bg text-sm uppercase tracking-wider mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-sm text-bg/70 hover:text-tertiary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body font-semibold text-bg text-sm uppercase tracking-wider mb-4">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-bg/70">
                <MapPin size={15} className="mt-0.5 flex-shrink-0 text-tertiary" />
                <span>Carrer de Mossèn Camil Rosell, 50<br />08921 Santa Coloma de Gramenet</span>
              </li>
              <li>
                <a href="tel:+34632622585" className="flex items-center gap-2.5 text-sm text-bg/70 hover:text-tertiary transition-colors">
                  <Phone size={15} className="flex-shrink-0 text-tertiary" />
                  <span>632 622 585</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-bg/70">
                <Mail size={15} className="flex-shrink-0 text-tertiary" />
                <span>info@mesqueunjoc.com</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-bg/70">
                <Clock size={15} className="flex-shrink-0 text-tertiary" />
                <span>Lun-Vie: 9:00-21:00<br />Sáb: 9:00-14:00</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-body font-semibold text-bg text-sm uppercase tracking-wider mb-4">
              Síguenos
            </h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-bg/10 flex items-center justify-center text-bg/70 hover:bg-tertiary hover:text-dark transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-bg/10 flex items-center justify-center text-bg/70 hover:bg-tertiary hover:text-dark transition-all"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
            <div className="mt-6 space-y-2">
              <a href="#" className="block text-xs text-bg/40 hover:text-bg/70 transition-colors">
                Política de privacidad
              </a>
              <a href="#" className="block text-xs text-bg/40 hover:text-bg/70 transition-colors">
                Aviso legal
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-bg/10">
        <div className="container-main py-5 text-center">
          <p className="text-xs text-bg/40">
            &copy; 2026 M&eacute;s que un joc. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
