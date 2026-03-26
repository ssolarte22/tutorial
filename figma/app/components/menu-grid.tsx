import { Flame, ShoppingCart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  spiceLevel: number;
  image: string;
}

export function MenuGrid() {
  const menuItems: MenuItem[] = [
    {
      name: "La Copa Clásica",
      description: "Trozos de mango fresco con lima, sal y Tajín en un vaso conveniente",
      price: "$6.50",
      spiceLevel: 2,
      image: "https://images.unsplash.com/photo-1760942462788-86d4adca12d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGZydWl0JTIwY3VwfGVufDF8fHx8MTc3NDQ5NTQ4OHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Mango en Palito",
      description: "Mango entero tallado en forma de flor, sazonado a la perfección",
      price: "$8.00",
      spiceLevel: 3,
      image: "https://images.unsplash.com/photo-1771980589828-18f0a689be34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nbyUyMHN0cmVldCUyMGZvb2QlMjB2ZW5kb3J8ZW58MXx8fHwxNzc0NDk1NDg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "La Bandeja Fiesta",
      description: "Sirve para 6-8 personas. Perfecta para eventos con tres variedades de mango",
      price: "$45.00",
      spiceLevel: 2,
      image: "https://images.unsplash.com/photo-1734163075572-8948e799e42c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMG1hbmdvJTIwZnJ1aXQlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3NDQ0NjQwNnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Bowl de Mango con Chamoy",
      description: "Copa clásica mejorada con salsa chamoy dulce y picante",
      price: "$7.50",
      spiceLevel: 4,
      image: "https://images.unsplash.com/photo-1760942462788-86d4adca12d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGZydWl0JTIwY3VwfGVufDF8fHx8MTc3NDQ5NTQ4OHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Reto Mango Picante",
      description: "Solo para amantes del picante. Tajín extra y sazonador de habanero",
      price: "$8.50",
      spiceLevel: 5,
      image: "https://images.unsplash.com/photo-1771980589828-18f0a689be34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nbyUyMHN0cmVldCUyMGZvb2QlMjB2ZW5kb3J8ZW58MXx8fHwxNzc0NDk1NDg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Smoothie de Mango",
      description: "Mango fresco licuado con un toque de lima y hielo",
      price: "$5.50",
      spiceLevel: 1,
      image: "https://images.unsplash.com/photo-1734163075572-8948e799e42c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMG1hbmdvJTIwZnJ1aXQlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3NDQ0NjQwNnww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <section id="menu" className="py-20 px-6 bg-white">
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
            El Menú
          </h2>
          <p className="text-xl text-gray-600">
            Cada platillo hecho fresco al momento
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl overflow-hidden transition-all hover:-translate-y-2"
              style={{ 
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                border: '2px solid #f0f0f0'
              }}
            >
              <div className="aspect-square overflow-hidden">
                <ImageWithFallback 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1a1a1a' }}>
                    {item.name}
                  </h3>
                  <span 
                    style={{ 
                      fontSize: '1.5rem',
                      fontWeight: 900,
                      color: 'var(--mango-yellow)',
                      textShadow: '1px 1px 0 rgba(0,0,0,0.1)'
                    }}
                  >
                    {item.price}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4" style={{ lineHeight: 1.6 }}>
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Flame 
                        key={i}
                        className={`w-4 h-4 ${i < item.spiceLevel ? 'fill-current' : ''}`}
                        style={{ 
                          color: i < item.spiceLevel ? 'var(--tajin-red)' : '#e0e0e0'
                        }}
                      />
                    ))}
                  </div>
                  
                  <button 
                    className="px-6 py-2.5 rounded-xl text-white transition-all hover:scale-105 flex items-center gap-2"
                    style={{ 
                      backgroundColor: 'var(--lime-green)',
                      fontWeight: 700,
                      boxShadow: '0 4px 16px rgba(50, 205, 50, 0.3)'
                    }}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Agregar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}