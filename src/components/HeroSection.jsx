import { useEffect, useState, useRef } from 'react';

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: 'rgba(201, 169, 98, 0.4)',
            left: `${Math.random() * 100}%`,
            animation: `particleFloat ${15 + Math.random() * 10}s infinite ease-in-out`,
            animationDelay: `${Math.random() * 15}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes particleFloat {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [headerOffset, setHeaderOffset] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // keep track of header height so hero doesn't sit under the fixed header
  useEffect(() => {
    const updateHeaderOffset = () => {
      const header = document.querySelector('header');
      const h = header ? header.offsetHeight : 0;
      setHeaderOffset(h);
    };

    updateHeaderOffset();
    window.addEventListener('resize', updateHeaderOffset);
    window.addEventListener('scroll', updateHeaderOffset);
    return () => {
      window.removeEventListener('resize', updateHeaderOffset);
      window.removeEventListener('scroll', updateHeaderOffset);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 50,
          y: (e.clientY - rect.top - rect.height / 2) / 50,
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes bounceScroll {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: floatSlow 8s ease-in-out infinite;
        }
        
        .animate-bounce-scroll {
          animation: bounceScroll 2s ease-in-out infinite;
        }
        
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
        
        .text-gradient-gold {
          background: linear-gradient(135deg, #c9a962 0%, #f4e4bc 50%, #c9a962 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .text-gradient-gold-shimmer {
          background: linear-gradient(135deg, #c9a962 0%, #f4e4bc 50%, #c9a962 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s ease-in-out infinite;
        }
        
       .btn-gold-gradient {
  position: relative;
  background: linear-gradient(135deg, #c9a962 0%, #f4e4bc 50%, #c9a962 100%);
  background-size: 200% 200%;
  transition:
    background-position 0.6s ease,
    box-shadow 0.6s ease,
    transform 0.4s ease;
  overflow: hidden;
}

/* Shimmer sweep */
.btn-gold-gradient::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    transparent 20%,
    rgba(255, 255, 255, 0.45),
    transparent 80%
  );
  transform: translateX(-120%);
  transition: transform 0.8s ease;
}

/* Soft halo glow */
.btn-gold-gradient::after {
  content: '';
  position: absolute;
  inset: -8px;
  background: radial-gradient(
    circle,
    rgba(201, 169, 98, 0.5),
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: -1;
}

/* Hover */
.btn-gold-gradient:hover {
  background-position: 100% 50%;
  transform: translateY(-3px);
  box-shadow:
    0 18px 45px rgba(201, 169, 98, 0.45),
    inset 0 0 20px rgba(255, 255, 255, 0.35);
}

.btn-gold-gradient:hover::before {
  transform: translateX(120%);
}

.btn-gold-gradient:hover::after {
  opacity: 1;
}

/* Active press */
.btn-gold-gradient:active {
  transform: translateY(-1px) scale(0.97);
}

        
        .luxury-line {
          background: linear-gradient(90deg, transparent, rgba(201, 169, 98, 0.3), transparent);
        }
        
        .luxury-line-vertical {
          background: linear-gradient(180deg, transparent, rgba(201, 169, 98, 0.3), transparent);
        }
      `}</style>

      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
        style={{ paddingTop: headerOffset ? `${headerOffset}px` : undefined }}
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-neutral-900" />

          {/* Animated Blobs */}
          <div
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl animate-float"
            style={{
              background: 'rgba(201, 169, 98, 0.08)',
              transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl animate-float-slow"
            style={{
              background: 'rgba(201, 169, 98, 0.06)',
              transform: `translate(${mousePosition.x * -1.5}px, ${mousePosition.y * -1.5}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          />

          {/* Decorative Lines */}
          <div className="absolute inset-0 opacity-20">
            <div className="luxury-line-vertical absolute top-0 left-1/4 w-px h-full" />
            <div className="luxury-line-vertical absolute top-0 right-1/4 w-px h-full" />
            <div className="luxury-line absolute top-1/3 left-0 w-full h-px" />
            <div className="luxury-line absolute bottom-1/3 left-0 w-full h-px" />
          </div>

          {/* Corner Decorations */}
          <div className="absolute top-20 left-20 w-32 h-32 border-l border-t border-yellow-700/20" />
          <div className="absolute top-20 right-20 w-32 h-32 border-r border-t border-yellow-700/20" />
          <div className="absolute bottom-20 left-20 w-32 h-32 border-l border-b border-yellow-700/20" />
          <div className="absolute bottom-20 right-20 w-32 h-32 border-r border-b border-yellow-700/20" />
        </div>

        <FloatingParticles />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center">
              <div
                className="transition-all duration-1000 delay-300"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
                }}
              >
                <div className="inline-flex items-center gap-3 mb-8">
                  <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c9a962]" />
                  <p className="text-[#c9a962] tracking-widest uppercase text-xs font-medium">
                    The Art of Fragrance
                  </p>
                  <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c9a962]" />
                </div>
              </div>

              <h1
                className="font-serif leading-tight mb-8 transition-all duration-1000 delay-500"
                style={{
                  fontSize: 'clamp(2.5rem, 8vw, 6rem)',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
                }}
              >
                <span className="block text-white">Discover Your</span>
                <span className="block text-gradient-gold-shimmer mt-2">Signature Scent</span>
              </h1>

              <p
                className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-1000 delay-700"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
                }}
              >
                Exquisite perfumes crafted from the world's finest ingredients. Each bottle tells a story of elegance,
                mystery, and timeless sophistication.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-900"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
                }}
              >
                <button
                  className="btn-gold-gradient text-black px-10 py-5 text-sm tracking-widest uppercase font-semibold rounded cursor-pointer border-0"
                >
                  Shop Collection
                </button>
                <button
                  className="group border border-amber-50 text-white hover:bg-yellow-700/10 hover:border-[#c9a962] px-10 py-5 text-sm tracking-widest uppercase transition-all duration-500 bg-transparent rounded cursor-pointer flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Our Story
                </button>
              </div>

              <div
                className="flex items-center gap-8 mt-12 justify-center transition-all duration-1000 delay-1000"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
                }}
              >
                <div className="text-center">
                  <p className="font-serif text-2xl text-gradient-gold">25+</p>
                  <p className="text-xs text-gray-500 tracking-wider uppercase">Years</p>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="text-center">
                  <p className="font-serif text-2xl text-gradient-gold">100K+</p>
                  <p className="text-xs text-gray-500 tracking-wider uppercase">Clients</p>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div className="text-center">
                  <p className="font-serif text-2xl text-gradient-gold">50+</p>
                  <p className="text-xs text-gray-500 tracking-wider uppercase">Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}