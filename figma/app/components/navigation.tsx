import { Apple } from "lucide-react";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ backgroundColor: 'var(--mango-yellow)' }}>
              <Apple className="w-6 h-6" style={{ color: 'var(--tajin-red)' }} />
            </div>
            <span className="text-2xl tracking-tight" style={{ fontWeight: 800 }}>
              Pica Pica
            </span>
          </div>
          
          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#menu" className="text-gray-700 hover:text-gray-900 transition-colors" style={{ fontWeight: 600 }}>
              El Menú
            </a>
            <a href="#locations" className="text-gray-700 hover:text-gray-900 transition-colors" style={{ fontWeight: 600 }}>
              Encuentra un Carrito
            </a>
            <button 
              className="px-6 py-2.5 rounded-2xl text-white transition-all hover:scale-105 hover:shadow-xl"
              style={{ 
                backgroundColor: 'var(--tajin-red)',
                fontWeight: 700,
                boxShadow: '0 8px 24px rgba(199, 0, 57, 0.3)'
              }}
            >
              Ordenar Ahora
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}