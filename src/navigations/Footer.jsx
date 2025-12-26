import { useState } from 'react';
import { Instagram, Facebook, Twitter, Youtube, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    // Add your subscription logic here
    setEmail('');
  };

  const scrollToSection = (id) => {
    if (!id) return;
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(String(id).replace('/#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const socialLinks = [
    { icon: Instagram, label: "Instagram", url: "#" },
    { icon: Facebook, label: "Facebook", url: "#" },
    { icon: Twitter, label: "Twitter", url: "#" },
    { icon: Youtube, label: "Youtube", url: "#" },
  ];

  const exploreLinks = [
    { label: "Collection", id: "collection" },
    { label: "Our Story", id: "about" },
    { label: "Ingredients", id: "ingredients" },
    { label: "Reviews", id: "reviews" },
  ];

  const supportLinks = ["Shipping Info", "Returns", "FAQ", "Privacy Policy"];

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

        .btn-gold-gradient {
          background: linear-gradient(135deg, #c9a962 0%, #f4e5c3 50%, #c9a962 100%);
          color: #0a0a0a;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-gold-gradient:hover {
          box-shadow: 0 8px 20px rgba(201, 169, 98, 0.4);
          transform: translateY(-2px);
        }

        .email-input {
          height: 3rem;
          background: #0f0f0f;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #ffffff;
          padding: 0 1rem;
          border-radius: 0.375rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.875rem;
          transition: all 0.3s ease;
          flex: 1;
        }

        .email-input:focus {
          outline: none;
          border-color: #c9a962;
          box-shadow: 0 0 0 2px rgba(201, 169, 98, 0.1);
        }

        .email-input::placeholder {
          color: #6b6b6b;
        }

        .link-hover-arrow {
          transition: all 0.3s ease;
        }

        .footer-link:hover .link-hover-arrow {
          opacity: 1;
          transform: translate(0, 0);
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
          
          .newsletter-form {
            flex-direction: column !important;
          }
          
          .subscribe-btn {
            width: 100%;
          }
        }
      `}</style>

      <footer
        style={{
          background: '#0a0a0a',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Top Decorative Line */}
        <div className="luxury-line" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '1px' }} />

        {/* Newsletter Section */}
        <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1.5rem' }}>
            <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
              <h3 className="font-serif" style={{ fontSize: 'clamp(1.875rem, 4vw, 2.25rem)', marginBottom: '1rem' }}>
                Join the <span className="text-gradient-gold">Seth SYB</span> World
              </h3>
              <p
                style={{
                  color: '#a0a0a0',
                  marginBottom: '2rem',
                  maxWidth: '36rem',
                  margin: '0 auto 2rem',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1rem',
                  lineHeight: '1.6',
                }}
              >
                Subscribe to receive exclusive offers, early access to new fragrances, and the art of luxury living.
              </p>
              <div
                className="newsletter-form"
                style={{
                  display: 'flex',
                  gap: '1rem',
                  maxWidth: '28rem',
                  margin: '0 auto',
                }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="email-input"
                  required
                />
                <button
                  onClick={handleSubscribe}
                  className="btn-gold-gradient subscribe-btn"
                  style={{
                    height: '3rem',
                    padding: '0 2rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    borderRadius: '0.375rem',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1.5rem' }}>
          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '3rem' }}>
            {/* Brand Section */}
            <div style={{ gridColumn: 'span 4' }}>
              <button
                onClick={() => scrollToSection('home')}
                style={{
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  marginBottom: '1.5rem',
                  display: 'inline-block',
                }}
              >
                <h2 className="font-serif" style={{ fontSize: '1.875rem', margin: 0 }}>
                  <span className="text-gradient-gold">Seth</span>
                  <span style={{ color: '#ffffff' }}> SYB</span>
                </h2>
              </button>
              <p
                style={{
                  color: '#a0a0a0',
                  lineHeight: '1.7',
                  marginBottom: '2rem',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.875rem',
                }}
              >
                Crafting extraordinary fragrances for the discerning connoisseur since 1898. Each bottle tells a story of
                elegance and sophistication.
              </p>

              {/* Social Links */}
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      onMouseEnter={() => setHoveredSocial(social.label)}
                      onMouseLeave={() => setHoveredSocial(null)}
                      aria-label={social.label}
                      style={{
                        padding: '0.75rem',
                        borderRadius: '9999px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        background: hoveredSocial === social.label ? 'rgba(201, 169, 98, 0.1)' : 'transparent',
                        borderColor: hoveredSocial === social.label ? '#c9a962' : 'rgba(255, 255, 255, 0.1)',
                        transition: 'all 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon
                        size={20}
                        style={{
                          color: hoveredSocial === social.label ? '#c9a962' : '#a0a0a0',
                          transition: 'color 0.3s ease',
                        }}
                      />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Explore Links */}
            <div style={{ gridColumn: 'span 2' }}>
              <h3 className="font-serif" style={{ fontSize: '1.125rem', color: '#c9a962', marginBottom: '1.5rem' }}>
                Explore
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {exploreLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="footer-link"
                      style={{
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0,
                        color: '#a0a0a0',
                        fontSize: '0.875rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        transition: 'color 0.3s ease',
                        fontFamily: 'Inter, sans-serif',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#c9a962')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#a0a0a0')}
                    >
                      {link.label}
                      <ArrowUpRight
                        size={12}
                        className="link-hover-arrow"
                        style={{
                          opacity: 0,
                          transform: 'translate(4px, -4px)',
                        }}
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div style={{ gridColumn: 'span 2' }}>
              <h3 className="font-serif" style={{ fontSize: '1.125rem', color: '#c9a962', marginBottom: '1.5rem' }}>
                Support
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {supportLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="footer-link"
                      style={{
                        color: '#a0a0a0',
                        fontSize: '0.875rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        transition: 'color 0.3s ease',
                        textDecoration: 'none',
                        fontFamily: 'Inter, sans-serif',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#c9a962')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#a0a0a0')}
                    >
                      {link}
                      <ArrowUpRight
                        size={12}
                        className="link-hover-arrow"
                        style={{
                          opacity: 0,
                          transform: 'translate(4px, -4px)',
                        }}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div style={{ gridColumn: 'span 4' }}>
              <h3 className="font-serif" style={{ fontSize: '1.125rem', color: '#c9a962', marginBottom: '1.5rem' }}>
                Contact Us
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <MapPin size={20} style={{ color: '#c9a962', marginTop: '0.125rem', flexShrink: 0 }} />
                  <span
                    style={{
                      color: '#a0a0a0',
                      fontSize: '0.875rem',
                      fontFamily: 'Inter, sans-serif',
                      lineHeight: '1.5',
                    }}
                  >
                    8 Rue de la Paix
                    <br />
                    75002 Paris, France
                  </span>
                </li>
                <li>
                  <a
                    href="mailto:contact@sethsyb.com"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      color: '#a0a0a0',
                      fontSize: '0.875rem',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                      fontFamily: 'Inter, sans-serif',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#c9a962')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#a0a0a0')}
                  >
                    <Mail size={20} style={{ color: '#c9a962', flexShrink: 0 }} />
                    contact@sethsyb.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+33123456789"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      color: '#a0a0a0',
                      fontSize: '0.875rem',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                      fontFamily: 'Inter, sans-serif',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#c9a962')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#a0a0a0')}
                  >
                    <Phone size={20} style={{ color: '#c9a962', flexShrink: 0 }} />
                    +33 1 23 45 67 89
                  </a>
                </li>
              </ul>

              {/* Hours Card */}
              <div
                style={{
                  padding: '1rem',
                  background: '#0f0f0f',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
               
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            style={{
              marginTop: '4rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <p style={{ fontSize: '0.875rem', color: '#a0a0a0', fontFamily: 'Inter, sans-serif' }}>
              © 2025 Saith SYB. All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: '2rem', fontSize: '0.875rem', fontFamily: 'Inter, sans-serif' }}>
              <a
                href="#"
                style={{
                  color: '#a0a0a0',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#c9a962')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#a0a0a0')}
              >
                Terms
              </a>
              <a
                href="#"
                style={{
                  color: '#a0a0a0',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#c9a962')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#a0a0a0')}
              >
                Privacy
              </a>
              <a
                href="#"
                style={{
                  color: '#a0a0a0',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#c9a962')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#a0a0a0')}
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}