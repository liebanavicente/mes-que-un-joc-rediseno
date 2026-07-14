import { useState } from 'react';
import { MessageCircle, Phone, Mail, MapPin, Clock, Instagram, Facebook, Check } from 'lucide-react';

export default function ContactoSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    fecha: '',
    tipo: '',
    ninos: '',
    mensaje: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="section-padding bg-cream">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto scroll-reveal">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[48px] font-semibold text-charcoal leading-tight">
            Hablemos de tu celebración
          </h2>
          <p className="mt-4 text-lg text-stone leading-relaxed">
            Estamos aquí para ayudarte. Respuesta en menos de 2 horas.
          </p>
        </div>

        <div className="stagger-group grid sm:grid-cols-3 gap-6 mt-12">
          <a
            href="https://wa.me/34632622585?text=Hola%20Més%20que%20un%20joc!"
            target="_blank"
            rel="noopener noreferrer"
            className="stagger-item card-base p-6 text-center group hover:ring-2 hover:ring-whatsapp transition-all"
          >
            <div className="w-12 h-12 mx-auto rounded-full bg-whatsapp/10 flex items-center justify-center group-hover:bg-whatsapp group-hover:text-white transition-colors text-whatsapp">
              <MessageCircle size={24} />
            </div>
            <h3 className="mt-4 font-body font-semibold text-charcoal">WhatsApp</h3>
            <p className="mt-1 text-sm text-stone">Respuesta en menos de 2 horas</p>
            <span className="mt-3 inline-flex items-center text-whatsapp font-semibold text-sm">
              Abrir WhatsApp
            </span>
          </a>

          <a
            href="tel:+34632622585"
            className="stagger-item card-base p-6 text-center group hover:ring-2 hover:ring-primary transition-all"
          >
            <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors text-primary">
              <Phone size={24} />
            </div>
            <h3 className="mt-4 font-body font-semibold text-charcoal">Teléfono</h3>
            <p className="mt-1 text-sm text-stone">632 622 585</p>
            <p className="text-xs text-stone mt-0.5">Disponible de 9:00 a 21:00</p>
            <span className="mt-3 inline-flex items-center text-primary font-semibold text-sm">
              Llamar ahora
            </span>
          </a>

          <div className="stagger-item card-base p-6 text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
              <Mail size={24} />
            </div>
            <h3 className="mt-4 font-body font-semibold text-charcoal">Email</h3>
            <p className="mt-1 text-sm text-stone">info@mesqueunjoc.com</p>
            <p className="text-xs text-stone mt-0.5">Respuesta en 24h</p>
          </div>
        </div>

        <div className="mt-16 grid lg:grid-cols-5 gap-12 scroll-reveal">
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="card-base p-10 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-success/10 flex items-center justify-center">
                  <Check size={32} className="text-success" />
                </div>
                <h3 className="mt-6 font-heading text-2xl font-semibold text-charcoal">
                  ¡Mensaje enviado!
                </h3>
                <p className="mt-2 text-stone">
                  Te responderemos en menos de 2 horas. Mientras tanto, puedes escribirnos por WhatsApp para una respuesta más rápida.
                </p>
                <a
                  href="https://wa.me/34632622585"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp mt-6"
                >
                  <MessageCircle size={18} />
                  Escríbenos por WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-base p-6 lg:p-8">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-body font-semibold text-charcoal mb-1.5">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-body font-semibold text-charcoal mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-body font-semibold text-charcoal mb-1.5">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="612 345 678"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-body font-semibold text-charcoal mb-1.5">
                      Fecha del evento
                    </label>
                    <input
                      type="date"
                      name="fecha"
                      value={formData.fecha}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-body font-semibold text-charcoal mb-1.5">
                      Tipo de celebración
                    </label>
                    <select
                      name="tipo"
                      value={formData.tipo}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="">Selecciona...</option>
                      <option value="infantil">Cumpleaños infantil</option>
                      <option value="babyshower">Baby shower</option>
                      <option value="comunion">Comunión</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-body font-semibold text-charcoal mb-1.5">
                      Número de niños
                    </label>
                    <select
                      name="ninos"
                      value={formData.ninos}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="">Selecciona...</option>
                      <option value="1-5">1-5 niños</option>
                      <option value="6-10">6-10 niños</option>
                      <option value="11-15">11-15 niños</option>
                      <option value="16-25">16-25 niños</option>
                    </select>
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-body font-semibold text-charcoal mb-1.5">
                    Mensaje
                  </label>
                  <textarea
                    name="mensaje"
                    rows={4}
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="input-field resize-y"
                    placeholder="Cuéntanos más sobre tu celebración..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full mt-6">
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-heading text-xl font-semibold text-charcoal mb-6">
              Proceso de reserva
            </h3>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Contacta', desc: 'Escríbenos por WhatsApp o teléfono' },
                { step: '2', title: 'Elige', desc: 'Selecciona fecha y paquete' },
                { step: '3', title: 'Reserva', desc: 'Paga la seña de 100€' },
                { step: '4', title: 'Celebra', desc: 'Nosotros nos encargamos de todo' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-body font-bold text-sm">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-charcoal">{item.title}</h4>
                    <p className="text-sm text-stone">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-5 bg-white rounded-lg shadow-xs">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-charcoal font-medium">
                    Carrer de Mossèn Camil Rosell, 50
                  </p>
                  <p className="text-sm text-stone">
                    08921 Santa Coloma de Gramenet, Barcelona
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <Clock size={18} className="text-primary flex-shrink-0" />
                <p className="text-sm text-stone">
                  Lun-Vie: 9:00-21:00 · Sáb: 9:00-14:00
                </p>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white shadow-xs flex items-center justify-center text-stone hover:text-primary hover:shadow-sm transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white shadow-xs flex items-center justify-center text-stone hover:text-primary hover:shadow-sm transition-all"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
