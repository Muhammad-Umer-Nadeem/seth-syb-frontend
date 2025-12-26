import { useState, useEffect } from 'react';

export default function NotFoundpage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
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
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
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
          background: linear-gradient(135deg, #c9a962 0%, #f4e4bc 50%, #c9a962 100%);
          background-size: 200% 200%;
          transition: all 0.5s ease;
        }
        
        .btn-gold-gradient:hover {
          background-position: 100% 50%;
          box-shadow: 0 0 30px rgba(201, 169, 98, 0.5);
          transform: translateY(-2px);
        }
        
        .luxury-line-vertical {
          background: linear-gradient(180deg, transparent, rgba(201, 169, 98, 0.3), transparent);
        }
      `}</style>

      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-neutral-900" />

          {/* Animated Blobs */}
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 md:w-[600px] md:h-[600px] rounded-full blur-3xl animate-float"
            style={{ background: 'rgba(201, 169, 98, 0.08)' }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 md:w-[500px] md:h-[500px] rounded-full blur-3xl animate-float"
            style={{ background: 'rgba(201, 169, 98, 0.06)', animationDelay: '1s' }}
          />

          {/* Decorative Lines */}
          <div className="absolute inset-0 opacity-20">
            <div className="luxury-line-vertical absolute top-0 left-1/4 w-px h-full" />
            <div className="luxury-line-vertical absolute top-0 right-1/4 w-px h-full" />
          </div>

          {/* Corner Decorations */}
          <div className="absolute top-10 left-10 md:top-20 md:left-20 w-16 h-16 md:w-32 md:h-32 border-l border-t border-yellow-700/20" />
          <div className="absolute top-10 right-10 md:top-20 md:right-20 w-16 h-16 md:w-32 md:h-32 border-r border-t border-yellow-700/20" />
          <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20 w-16 h-16 md:w-32 md:h-32 border-l border-b border-yellow-700/20" />
          <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-16 h-16 md:w-32 md:h-32 border-r border-b border-yellow-700/20" />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
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
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 max-w-4xl text-center">
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
                Lost in Translation
              </p>
              <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c9a962]" />
            </div>
          </div>

          <h1
            className="font-serif leading-tight mb-6 transition-all duration-1000 delay-500"
            style={{
              fontSize: 'clamp(4rem, 15vw, 12rem)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
            }}
          >
            <span className="text-gradient-gold-shimmer">404</span>
          </h1>

          <h2
            className="font-serif text-3xl md:text-5xl text-white mb-6 transition-all duration-1000 delay-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
            }}
          >
            Page Not Found
          </h2>

          <p
            className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed transition-all duration-1000 delay-900"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
            }}
          >
            Like a rare fragrance that has eluded us, this page seems to have vanished into the mist. 
            Let us guide you back to something extraordinary.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-1100"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
            }}
          >
            <button
              onClick={() => window.location.href = '/'}
              className="btn-gold-gradient text-black px-10 py-5 text-sm tracking-widest uppercase font-semibold rounded cursor-pointer border-0"
            >
              Return Home
            </button>
            <button
              onClick={() => window.history.back()}
              className="border border-amber-50 text-white hover:bg-yellow-700/10 hover:border-[#c9a962] px-10 py-5 text-sm tracking-widest uppercase transition-all duration-500 bg-transparent rounded cursor-pointer"
            >
              Go Back
            </button>
          </div>

          <div
            className="mt-16 transition-all duration-1000 delay-1300"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
            }}
          >
            <p className="text-xs text-gray-600 tracking-wider uppercase mb-2">Error Code</p>
            <p className="font-serif text-xl text-gradient-gold">404 - Not Found</p>
          </div>
        </div>
      </div>
    </>
  );
}