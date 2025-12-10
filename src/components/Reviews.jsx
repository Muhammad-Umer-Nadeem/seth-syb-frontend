import { useEffect, useRef, useState, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Isabella Romano",
    role: "Fashion Director, Vogue Italia",
    content:
      "NOIR ESSENCE has completely transformed my perception of luxury fragrances. The Midnight Oud is simply extraordinary—mysterious, elegant, and unforgettable. I receive compliments every time I wear it.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
  },
  {
    id: 2,
    name: "Alexander Chen",
    role: "Art Collector & Curator",
    content:
      "As someone who appreciates fine craftsmanship, I can confidently say that NOIR ESSENCE stands in a league of its own. The attention to detail in both the fragrance and presentation is remarkable.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
  },
  {
    id: 3,
    name: "Victoria Laurent",
    role: "Interior Designer, Paris",
    content:
      "Velvet Rose is poetry in a bottle. The way it evolves throughout the day keeps me enchanted. This is the definition of understated luxury.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
  },
  {
    id: 4,
    name: "Marcus Sterling",
    role: "CEO & Entrepreneur",
    content:
      "Noir Leather has become my signature scent. It exudes confidence and sophistication—exactly the impression I want to make in business meetings.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
  },
  {
    id: 5,
    name: "Sophia Delacroix",
    role: "Wine Sommelier",
    content:
      "The complexity of Golden Amber reminds me of a fine vintage wine—layers upon layers of beautiful notes that unfold over time. A true masterpiece.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const goToSlide = (index) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

        .font-serif {
          font-family: 'Playfair Display', serif;
        }

        .text-gradient-gold {
          background: linear-gradient(135deg, #c9a962 0%, #f4e5c3 50%, #c9a962 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .luxury-line {
          background: linear-gradient(90deg, transparent 0%, #c9a962 50%, transparent 100%);
        }

        @media (max-width: 768px) {
          .testimonial-card {
            padding: 2.5rem !important;
          }
          
          .testimonial-text {
            font-size: 1.125rem !important;
          }
        }
      `}</style>

      <section
        id="reviews"
        style={{
          padding: '8rem 0',
          background: '#0f0f0f',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background Effects */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div
            className="luxury-line"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '1px',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '5rem',
              left: '5rem',
              width: '16rem',
              height: '16rem',
              background: 'rgba(201, 169, 98, 0.06)',
              borderRadius: '9999px',
              filter: 'blur(80px)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '5rem',
              right: '5rem',
              width: '16rem',
              height: '16rem',
              background: 'rgba(201, 169, 98, 0.06)',
              borderRadius: '9999px',
              filter: 'blur(80px)',
            }}
          />
        </div>

        <div
          ref={ref}
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 1.5rem',
            position: 'relative',
          }}
        >
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <span
                style={{
                  width: '4rem',
                  height: '1px',
                  background: 'linear-gradient(to right, transparent, #c9a962)',
                }}
              />
              <p
                style={{
                  color: '#c9a962',
                  letterSpacing: '0.4em',
                  textTransform: 'uppercase',
                  fontSize: '0.75rem',
                  fontWeight: '500',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                Testimonials
              </p>
              <span
                style={{
                  width: '4rem',
                  height: '1px',
                  background: 'linear-gradient(to left, transparent, #c9a962)',
                }}
              />
            </div>
            
            <h2
              className="font-serif"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
                marginBottom: '1.5rem',
                lineHeight: '1.2',
              }}
            >
              <span style={{ color: '#ffffff' }}>What Our </span>
              <span className="text-gradient-gold">Clients Say</span>
            </h2>
          </div>

          {/* Testimonials Slider */}
          <div
            style={{
              position: 'relative',
              maxWidth: '80rem',
              margin: '0 auto',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 1s ease',
            }}
          >
           

            {/* Slider Container */}
            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '1rem' }}>
              <div
                style={{
                  display: 'flex',
                  transition: 'transform 0.5s ease-out',
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    style={{
                      width: '100%',
                      flexShrink: 0,
                      padding: '0 1rem',
                    }}
                  >
                    <div
                      className="testimonial-card"
                      style={{
                        background: '#0a0a0a',
                        borderRadius: '1rem',
                        padding: '3.5rem',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'all 0.7s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(to bottom right, rgba(201, 169, 98, 0.05), transparent)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#0a0a0a';
                      }}
                    >
                      {/* Rating Stars */}
                      <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '2rem' }}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={20}
                            style={{
                              fill: '#c9a962',
                              color: '#c9a962',
                            }}
                          />
                        ))}
                      </div>

                      {/* Testimonial Content */}
                      <p
                        className="testimonial-text"
                        style={{
                          fontSize: '1.5rem',
                          lineHeight: '1.7',
                          marginBottom: '2.5rem',
                          color: 'rgba(255, 255, 255, 0.9)',
                          fontWeight: '300',
                          fontStyle: 'italic',
                          fontFamily: 'Inter, sans-serif',
                        }}
                      >
                        "{testimonial.content}"
                      </p>

                      {/* Author Info */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                        <div
                          style={{
                            position: 'relative',
                            width: '4rem',
                            height: '4rem',
                            borderRadius: '9999px',
                            overflow: 'hidden',
                            border: '2px solid rgba(201, 169, 98, 0.5)',
                            flexShrink: 0,
                          }}
                        >
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                            }}
                          />
                        </div>
                        <div>
                          <p className="font-serif" style={{ fontSize: '1.25rem', color: '#c9a962', marginBottom: '0.25rem' }}>
                            {testimonial.name}
                          </p>
                          <p style={{ fontSize: '0.875rem', color: '#a0a0a0', fontFamily: 'Inter, sans-serif' }}>
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', marginTop: '2.5rem' }}>
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                onMouseEnter={() => setHoveredButton('prev')}
                onMouseLeave={() => setHoveredButton(null)}
                aria-label="Previous testimonial"
                style={{
                  padding: '1rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  background: hoveredButton === 'prev' ? 'rgba(201, 169, 98, 0.05)' : 'transparent',
                  borderColor: hoveredButton === 'prev' ? '#c9a962' : 'rgba(255, 255, 255, 0.1)',
                  color: hoveredButton === 'prev' ? '#c9a962' : '#a0a0a0',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ChevronLeft size={20} />
              </button>

              {/* Dots Indicator */}
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                    style={{
                      height: '0.375rem',
                      borderRadius: '9999px',
                      transition: 'all 0.5s ease',
                      width: index === currentIndex ? '2.5rem' : '0.5rem',
                      background: index === currentIndex ? '#c9a962' : 'rgba(160, 160, 160, 0.3)',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      if (index !== currentIndex) {
                        e.currentTarget.style.background = '#a0a0a0';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (index !== currentIndex) {
                        e.currentTarget.style.background = 'rgba(160, 160, 160, 0.3)';
                      }
                    }}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                onMouseEnter={() => setHoveredButton('next')}
                onMouseLeave={() => setHoveredButton(null)}
                aria-label="Next testimonial"
                style={{
                  padding: '1rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  background: hoveredButton === 'next' ? 'rgba(201, 169, 98, 0.05)' : 'transparent',
                  borderColor: hoveredButton === 'next' ? '#c9a962' : 'rgba(255, 255, 255, 0.1)',
                  color: hoveredButton === 'next' ? '#c9a962' : '#a0a0a0',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}