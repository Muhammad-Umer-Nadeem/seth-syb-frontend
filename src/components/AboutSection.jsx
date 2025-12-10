import { useEffect, useRef, useState } from 'react';
import { Award, Leaf, Globe, Sparkles } from 'lucide-react';

const features = [
    { icon: Award, label: "Award Winning", value: "50+ Awards" },
    { icon: Leaf, label: "Sustainable", value: "Eco-Friendly" },
    { icon: Globe, label: "Global Reach", value: "120+ Countries" },
    { icon: Sparkles, label: "Handcrafted", value: "Artisan Made" },
];

export default function AboutSection() {
    const [isVisible, setIsVisible] = useState(false);
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

        .gold-glow-subtle {
          box-shadow: 0 0 20px rgba(201, 169, 98, 0.15);
        }

        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
          
          .stats-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

            <section
                id="about"
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
                        style={{
                            position: 'absolute',
                            top: '5rem',
                            right: '5rem',
                            width: '24rem',
                            height: '24rem',
                            background: 'rgba(201, 169, 98, 0.06)',
                            borderRadius: '9999px',
                            filter: 'blur(100px)',
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '5rem',
                            left: '5rem',
                            width: '24rem',
                            height: '24rem',
                            background: 'rgba(201, 169, 98, 0.06)',
                            borderRadius: '9999px',
                            filter: 'blur(100px)',
                        }}
                    />
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
                    <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
                        {/* Left Side - Image */}
                        <div
                            style={{
                                position: 'relative',
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
                                transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
                            }}
                        >
                            <div style={{ position: 'relative' }}>
                                {/* Main Image Container */}
                                <div
                                    style={{
                                        position: 'relative',
                                        aspectRatio: '4/5',
                                        borderRadius: '1rem',
                                        overflow: 'hidden',
                                    }}
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=600&h=750&fit=crop"
                                        alt="The art of perfume creation"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                    />
                                    <div
                                        style={{
                                            position: 'absolute',
                                            inset: 0,
                                            background: 'linear-gradient(to top, rgba(15, 15, 15, 0.8) 0%, transparent 40%)',
                                        }}
                                    />
                                </div>

                                {/* Decorative Borders */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '-1rem',
                                        left: '-1rem',
                                        width: '100%',
                                        height: '100%',
                                        border: '1px solid rgba(201, 169, 98, 0.3)',
                                        borderRadius: '1rem',
                                        zIndex: -1,
                                    }}
                                />
                                <div
                                    style={{
                                        position: 'absolute',
                                        bottom: '-1rem',
                                        right: '-1rem',
                                        width: '100%',
                                        height: '100%',
                                        border: '1px solid rgba(201, 169, 98, 0.2)',
                                        borderRadius: '1rem',
                                        zIndex: -1,
                                    }}
                                />

                                {/* Est. Badge */}
                                <div
                                    className="gold-glow-subtle"
                                    style={{
                                        position: 'absolute',
                                        right: '-2rem',
                                        bottom: '3rem',
                                        background: 'rgba(15, 15, 15, 0.95)',
                                        backdropFilter: 'blur(10px)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '0.75rem',
                                        padding: '1.5rem',
                                    }}
                                >
                                    <p
                                        className="font-serif text-gradient-gold"
                                        style={{ fontSize: '2.5rem', marginBottom: '0.25rem', lineHeight: 1 }}
                                    >
                                        1898
                                    </p>
                                    <p
                                        style={{
                                            fontSize: '0.875rem',
                                            color: '#a0a0a0',
                                            letterSpacing: '0.1em',
                                            textTransform: 'uppercase',
                                        }}
                                    >
                                        Est. Paris
                                    </p>
                                </div>

                                {/* Corner Accent */}
                                <div style={{ position: 'absolute', top: '-0.5rem', right: '-0.5rem', width: '5rem', height: '5rem' }}>
                                    <div style={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '1px', background: '#c9a962' }} />
                                    <div style={{ position: 'absolute', top: 0, right: 0, width: '1px', height: '100%', background: '#c9a962' }} />
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div
                            style={{
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateX(0)' : 'translateX(40px)',
                                transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s',
                            }}
                        >
                            {/* Section Label */}
                            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                                <span
                                    style={{
                                        width: '3rem',
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
                                    Our Legacy
                                </p>

                                <span
                                    style={{
                                        width: '3rem',
                                        height: '1px',
                                        background: 'linear-gradient(to left, transparent, #c9a962)',
                                    }}
                                />
                            </div>


                            {/* Heading */}
                            <h2
                                className="font-serif"
                                style={{
                                    fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
                                    marginBottom: '2rem',
                                    lineHeight: '1.2',
                                }}
                            >
                                <span style={{ color: '#ffffff' }}>The Art of</span>
                                <br />
                                <span className="text-gradient-gold">Perfumery</span>
                            </h2>

                            {/* Description */}
                            <div style={{ marginBottom: '3rem' }}>
                                <p
                                    style={{
                                        color: '#a0a0a0',
                                        lineHeight: '1.8',
                                        fontSize: '1.125rem',
                                        marginBottom: '1.5rem',
                                        fontFamily: 'Inter, sans-serif',
                                    }}
                                >
                                    Founded in the heart of Paris, NOIR ESSENCE was born from a passion for extraordinary fragrances. Our
                                    master perfumers travel the globe seeking the rarest ingredients—from the valleys of Grasse to the
                                    forests of Southeast Asia.
                                </p>
                                <p
                                    style={{
                                        color: '#a0a0a0',
                                        lineHeight: '1.8',
                                        fontSize: '1.125rem',
                                        fontFamily: 'Inter, sans-serif',
                                    }}
                                >
                                    Each bottle represents months of meticulous craftsmanship, blending tradition with innovation to create
                                    scents that transcend time. We believe that perfume is more than a fragrance—it's an expression of
                                    identity, a silent statement of sophistication.
                                </p>
                            </div>

                            {/* Features Grid */}
                            <div
                                className="features-grid"
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(4, 1fr)',
                                    gap: '1rem',
                                    marginBottom: '3rem',
                                }}
                            >
                                {features.map((feature, index) => {
                                    const Icon = feature.icon;
                                    return (
                                        <div
                                            key={feature.label}
                                            style={{
                                                textAlign: 'center',
                                                padding: '1rem',
                                                borderRadius: '0.75rem',
                                                border: '1px solid rgba(255, 255, 255, 0.08)',
                                                background: 'rgba(10, 10, 10, 0.5)',
                                                opacity: isVisible ? 1 : 0,
                                                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                                                transition: 'all 0.5s ease',
                                                transitionDelay: `${500 + index * 100}ms`,
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: '2.5rem',
                                                    height: '2.5rem',
                                                    margin: '0 auto 0.75rem',
                                                    borderRadius: '9999px',
                                                    background: 'rgba(201, 169, 98, 0.1)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <Icon size={20} style={{ color: '#c9a962' }} />
                                            </div>
                                            <p className="font-serif" style={{ fontSize: '0.875rem', color: '#c9a962', marginBottom: '0.25rem' }}>
                                                {feature.value}
                                            </p>
                                            <p style={{ fontSize: '0.75rem', color: '#a0a0a0' }}>{feature.label}</p>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Stats */}
                            <div
                                className="stats-grid"
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(3, 1fr)',
                                    gap: '2rem',
                                    paddingTop: '3rem',
                                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                                }}
                            >
                                <div style={{ textAlign: 'center' }}>
                                    <p className="font-serif text-gradient-gold" style={{ fontSize: '3rem', lineHeight: 1 }}>
                                        25+
                                    </p>
                                    <p
                                        style={{
                                            fontSize: '0.875rem',
                                            color: '#a0a0a0',
                                            marginTop: '0.5rem',
                                            letterSpacing: '0.1em',
                                            textTransform: 'uppercase',
                                        }}
                                    >
                                        Years of Excellence
                                    </p>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <p className="font-serif text-gradient-gold" style={{ fontSize: '3rem', lineHeight: 1 }}>
                                        50+
                                    </p>
                                    <p
                                        style={{
                                            fontSize: '0.875rem',
                                            color: '#a0a0a0',
                                            marginTop: '0.5rem',
                                            letterSpacing: '0.1em',
                                            textTransform: 'uppercase',
                                        }}
                                    >
                                        Rare Ingredients
                                    </p>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <p className="font-serif text-gradient-gold" style={{ fontSize: '3rem', lineHeight: 1 }}>
                                        100K+
                                    </p>
                                    <p
                                        style={{
                                            fontSize: '0.875rem',
                                            color: '#a0a0a0',
                                            marginTop: '0.5rem',
                                            letterSpacing: '0.1em',
                                            textTransform: 'uppercase',
                                        }}
                                    >
                                        Happy Clients
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}