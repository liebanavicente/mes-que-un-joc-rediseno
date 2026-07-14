import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/34632622585?text=Hola%20Més%20que%20un%20joc!%20Me%20gustaría%20información%20sobre%20una%20celebración."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-whatsapp text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all duration-300 animate-float-in"
      style={{ animationDelay: '1.5s' }}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={26} fill="white" />
    </a>
  );
}
