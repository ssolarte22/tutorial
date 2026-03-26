import { Apple, Citrus, Flame } from "lucide-react";

export function ZingFactor() {
  const factors = [
    {
      icon: Apple,
      title: "Mangos Manila Seleccionados a Mano",
      description: "Solo obtenemos los mejores mangos Manila más maduros, conocidos por su dulzura excepcional y textura mantecosa.",
      color: "var(--mango-yellow)"
    },
    {
      icon: Citrus,
      title: "Limas Frescas Recién Exprimidas",
      description: "Cada exprimido se hace al momento con limas auténticas para ese toque cítrico perfecto.",
      color: "var(--lime-green)"
    },
    {
      icon: Flame,
      title: "Tajín Clásico Auténtico",
      description: "La mezcla original de chiles suaves, lima y sal de mar que hace que cada bocado sea inolvidable.",
      color: "var(--tajin-red)"
    }
  ];

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="mb-4"
            style={{ 
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 900,
              letterSpacing: '-0.02em'
            }}
          >
            El{' '}
            <span 
              style={{ 
                background: `linear-gradient(135deg, var(--mango-yellow), var(--lime-green))`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Factor
            </span>
            {' '}Sabor
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tres ingredientes simples y premium que crean un sabor explosivo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {factors.map((factor, index) => {
            const Icon = factor.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 transition-all hover:-translate-y-2"
                style={{ 
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                  border: '2px solid #f0f0f0'
                }}
              >
                <div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
                  style={{ 
                    backgroundColor: factor.color,
                    boxShadow: `0 8px 24px ${factor.color}40`
                  }}
                >
                  <Icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                </div>
                <h3 
                  className="mb-4"
                  style={{ 
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    color: '#1a1a1a'
                  }}
                >
                  {factor.title}
                </h3>
                <p className="text-gray-600" style={{ lineHeight: 1.7 }}>
                  {factor.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}