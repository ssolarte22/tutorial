import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Typography */}
          <div className="space-y-8">
            <div className="inline-block px-5 py-2 rounded-full" style={{ backgroundColor: 'var(--lime-green)', color: 'white' }}>
              <span style={{ fontWeight: 700, fontSize: '0.875rem', letterSpacing: '0.05em' }}>
                FRESCO DIARIO
              </span>
            </div>
            
            <h1 
              className="leading-tight"
              style={{ 
                fontSize: 'clamp(3rem, 8vw, 5rem)',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                color: '#1a1a1a'
              }}
            >
              Dulce,{' '}
              <span style={{ color: 'var(--lime-green)' }}>Ácido</span>,{' '}
              <span style={{ color: 'var(--tajin-red)' }}>Picante</span>,{' '}
              <span style={{ color: 'var(--mango-yellow)' }}>Perfecto</span>.
            </h1>
            
            <p className="text-xl text-gray-600 max-w-lg" style={{ lineHeight: 1.8 }}>
              Comida callejera premium que une los vibrantes sabores del mango fresco, lima 
              refrescante y auténtico Tajín en perfecta armonía.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                className="px-8 py-4 rounded-2xl text-white transition-all hover:scale-105"
                style={{ 
                  backgroundColor: 'var(--mango-yellow)',
                  color: '#1a1a1a',
                  fontWeight: 800,
                  fontSize: '1.125rem',
                  boxShadow: '0 12px 32px rgba(255, 195, 0, 0.4)'
                }}
              >
                Explorar Menú
              </button>
              <button 
                className="px-8 py-4 rounded-2xl border-2 transition-all hover:scale-105"
                style={{ 
                  borderColor: 'var(--tajin-red)',
                  color: 'var(--tajin-red)',
                  fontWeight: 700,
                  fontSize: '1.125rem'
                }}
              >
                Encuéntranos
              </button>
            </div>
          </div>
          
          {/* Right Side - Image */}
          <div className="relative">
            <div 
              className="absolute inset-0 rounded-3xl blur-3xl opacity-30"
              style={{ backgroundColor: 'var(--mango-yellow)' }}
            />
            <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)' }}>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1734163075572-8948e799e42c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMG1hbmdvJTIwZnJ1aXQlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3NDQ0NjQwNnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Fresh mango close up"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}