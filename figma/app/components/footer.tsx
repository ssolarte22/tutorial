import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-16 px-6" style={{ backgroundColor: '#1a1a1a', color: 'white' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1rem' }}>
              Pica Pica
            </h3>
            <p className="text-gray-400 mb-6" style={{ lineHeight: 1.7 }}>
              Llevamos los auténticos sabores del mango callejero a tu barrio. 
              Fresco, audaz e inolvidable.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: 'var(--mango-yellow)' }}
              >
                <Instagram className="w-6 h-6 text-black" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: 'var(--lime-green)' }}
              >
                <Facebook className="w-6 h-6 text-white" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: 'var(--tajin-red)' }}
              >
                <Twitter className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              {['Sobre Nosotros', 'Menú', 'Ubicaciones', 'Catering', 'Contacto'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors"
                    style={{ fontWeight: 500 }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
              Recibe las Noticias
            </h4>
            <p className="text-gray-400 mb-4" style={{ lineHeight: 1.6 }}>
              Ofertas semanales, nuevas ubicaciones y promociones exclusivas.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Tu correo"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-white/40 transition-colors"
              />
              <button 
                className="px-4 py-3 rounded-xl transition-all hover:scale-105"
                style={{ 
                  backgroundColor: 'var(--lime-green)',
                  boxShadow: '0 4px 16px rgba(50, 205, 50, 0.3)'
                }}
              >
                <Mail className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400" style={{ fontSize: '0.875rem' }}>
            © 2026 Pica Pica Street Foods. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors" style={{ fontSize: '0.875rem' }}>
              Política de Privacidad
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" style={{ fontSize: '0.875rem' }}>
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}