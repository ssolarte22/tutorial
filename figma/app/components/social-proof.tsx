import { useEffect, useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function SocialProof() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const images = [
    "https://images.unsplash.com/photo-1729657182983-e0e5187e67cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBmZXN0aXZhbCUyMGZvb2QlMjBoYXBweXxlbnwxfHx8fDE3NzQ0OTU0ODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1762440127280-3d9a764d3821?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRzJTIwc3RyZWV0JTIwZm9vZCUyMG1hcmtldHxlbnwxfHx8fDE3NzQ0OTU0ODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1770564512944-4324706bcfd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHBlb3BsZSUyMGVhdGluZyUyMG91dGRvb3J8ZW58MXx8fHwxNzc0NDk1NDkwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1760039756604-fb028be464bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZmVzdGl2YWwlMjBjcm93ZCUyMHN1bW1lcnxlbnwxfHx8fDE3NzQ0OTU0OTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1734163075572-8948e799e42c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMG1hbmdvJTIwZnJ1aXQlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3NDQ0NjQwNnww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1771980589828-18f0a689be34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5nbyUyMHN0cmVldCUyMGZvb2QlMjB2ZW5kb3J8ZW58MXx8fHwxNzc0NDk1NDg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
  ];

  // Duplicate images for seamless loop
  const allImages = [...images, ...images];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1; // pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset scroll position when we've scrolled through one set of images
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-20 overflow-hidden" style={{ backgroundColor: 'var(--mango-yellow)' }}>
      <div className="mb-12 text-center px-6">
        <h2 
          className="mb-4"
          style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 900,
            letterSpacing: '-0.02em',
            color: '#1a1a1a'
          }}
        >
          Únete a la Familia Pica Pica
        </h2>
        <p className="text-xl" style={{ color: '#1a1a1a', opacity: 0.8 }}>
          Miles de clientes felices en festivales y esquinas
        </p>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden"
        style={{ scrollBehavior: 'auto' }}
      >
        {allImages.map((image, index) => (
          <div 
            key={index}
            className="flex-shrink-0 rounded-3xl overflow-hidden"
            style={{ 
              width: '400px',
              height: '300px',
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)'
            }}
          >
            <ImageWithFallback 
              src={image}
              alt={`Customer enjoying Pica Pica ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-12 px-6">
        <p style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1a1a1a' }}>
          ¡Etiquétanos @picapicastreet para tener la oportunidad de aparecer aquí!
        </p>
      </div>
    </section>
  );
}