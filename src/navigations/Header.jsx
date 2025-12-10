import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Header() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentBanner, setCurrentBanner] = useState(0);
  const { cart, removeFromCart, updateQuantity, totalItems, totalPrice, clearCart } = useCart();

  const messages = [
    "Complimentary Shipping on Orders Over $150",
    "Free Returns Within 30 Days",
    "10% Off Your First Order - Use Code: WELCOME10",
    "New Styles Added Weekly",
    "Eco-Friendly Materials Used"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // `totalItems` is provided by CartContext

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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

        .header-container {
          font-family: 'Inter', sans-serif;
        }

        .icon-button {
          padding: 0.75rem;
          border: none;
          background: transparent;
          color: #a0a0a0;
          cursor: pointer;
          border-radius: 9999px;
          transition: all 0.3s ease;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon-button:hover {
          color: #c9a962;
          background: rgba(201, 169, 98, 0.05);
        }

        .nav-link {
          position: relative;
          font-size: 0.875rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #a0a0a0;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #c9a962;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: #c9a962;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .logo-underline {
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: #c9a962;
          transition: width 0.5s ease;
        }

        .logo:hover .logo-underline {
          width: 100%;
        }

        .cart-badge {
          position: absolute;
          top: 4px;
          right: 4px;
          width: 20px;
          height: 20px;
          background: #c9a962;
          color: #0a0a0a;
          font-size: 10px;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 500;
          animation: zoomIn 0.3s ease;
        }

        @keyframes zoomIn {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .banner-message {
          animation: slideInDown 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .mobile-nav-link {
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #a0a0a0;
          text-decoration: none;
          display: block;
          border-radius: 0.5rem;
          transition: all 0.3s ease;
        }

        .mobile-nav-link:hover {
          color: #c9a962;
          background: rgba(201, 169, 98, 0.05);
        }

        @media (max-width: 1024px) {
          .desktop-only {
            display: none !important;
          }
        }

        @media (min-width: 1025px) {
          .mobile-only {
            display: none;
          }
        }
      `}</style>

      <header
        className="header-container"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.5s ease',
          background: '#000',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          {/* Top Banner */}
          <div
            style={{
              borderBottom: isScrolled ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
              padding: isScrolled ? '0' : '0.5rem 0',
              textAlign: 'center',
              transition: 'all 0.5s ease',
              overflow: 'hidden',
              maxHeight: isScrolled ? '0' : '2.5rem',
              opacity: isScrolled ? 0 : 1,
            }}
          >
            <p key={currentBanner} className="banner-message" style={{ fontSize: '0.75rem', color: '#a0a0a0', letterSpacing: '0.05em', margin: 0 }}>
              {messages[currentBanner]} |
              <span style={{ color: '#c9a962', marginLeft: '0.25rem' }}>Shop Now</span>
            </p>
          </div>

          {/* Main Navigation */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1rem 0',
              position: 'relative',
            }}
          >
            {/* Mobile Hamburger Menu Toggle (Left in mobile) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="icon-button mobile-only"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Desktop Logo (Left in desktop) */}
            <div className="desktop-only">
              <button
                onClick={() => scrollToSection('home')}
                className="logo"
                style={{
                  position: 'relative',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                <h1 className="font-serif" style={{ fontSize: 'clamp(1.5rem, 5vw, 1.875rem)', letterSpacing: '0.1em', margin: 0 }}>
                  <span className="text-gradient-gold">Saith</span>
                  <span style={{ color: '#ffffff' }}> SYB</span>
                </h1>
                <span className="logo-underline" />
              </button>
            </div>

            {/* Desktop Navigation (Center in desktop) */}
            <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
              <button onClick={() => scrollToSection('home')} className="nav-link" style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>
                Home
              </button>
              <button onClick={() => scrollToSection('collection')} className="nav-link" style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>
                Collection
              </button>
              <button onClick={() => scrollToSection('about')} className="nav-link" style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>
                About
              </button>
              <button onClick={() => scrollToSection('reviews')} className="nav-link" style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>
                Reviews
              </button>
            </div>

            {/* Mobile Logo (Center in mobile) */}
            <button
              onClick={() => scrollToSection('home')}
              className="logo mobile-only"
              style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                zIndex: 10,
              }}
            >
              <h1 className="font-serif" style={{ fontSize: 'clamp(1.5rem, 5vw, 1.875rem)', letterSpacing: '0.1em', margin: 0 }}>
                <span className="text-gradient-gold">Saith</span>
                <span style={{ color: '#ffffff' }}> SYB</span>
              </h1>
              <span className="logo-underline" />
            </button>

            {/* Action Buttons (Right in both) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <button className="icon-button desktop-only" aria-label="Search">
                <Search size={20} />
              </button>
              <button className="icon-button" aria-label="Account">
                <User size={20} />
              </button>
              <button
                onClick={() => setIsCartOpen(true)}
                className="icon-button"
                aria-label="Open cart"
              >
                <ShoppingBag size={20} />
                {totalItems > 0 && (
                  <span className="cart-badge">{totalItems}</span>
                )}
              </button>
            </div>
          </nav>

          {/* Mobile Navigation */}
          <div
            className="mobile-only"
            style={{
              overflow: 'hidden',
              transition: 'all 0.5s ease',
              maxHeight: isMenuOpen ? '320px' : '0',
              opacity: isMenuOpen ? 1 : 0,
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', padding: '1rem 0', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <button onClick={() => scrollToSection('home')} className="mobile-nav-link">
                Home
              </button>
              <button onClick={() => scrollToSection('collection')} className="mobile-nav-link">
                Collection
              </button>
              <button onClick={() => scrollToSection('about')} className="mobile-nav-link">
                About
              </button>
              <button onClick={() => scrollToSection('reviews')} className="mobile-nav-link">
                Reviews
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Simple Cart Drawer */}
      {isCartOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 60,
            background: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(4px)',
          }}
          onClick={() => setIsCartOpen(false)}
        >
          <div
            style={{
              position: 'fixed',
              right: 0,
              top: 0,
              bottom: 0,
              width: '100%',
              maxWidth: '400px',
              background: '#0a0a0a',
              borderLeft: '1px solid rgba(201, 169, 98, 0.2)',
              padding: '2rem',
              overflowY: 'auto',
              animation: 'slideIn 0.3s ease',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <h2 className="font-serif" style={{ fontSize: '1.5rem', color: '#ffffff', margin: 0 }}>
                Shopping Cart
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="icon-button"
                aria-label="Close cart"
              >
                <X size={24} />
              </button>
            </div>

            {cart.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '4rem 0', color: '#a0a0a0' }}>
                <ShoppingBag size={48} style={{ margin: '0 auto 1rem', opacity: 0.3 }} />
                <p>Your cart is empty</p>
              </div>
            ) : (
              <div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
                  {cart.map((item) => (
                    <div key={item.id} style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '1rem' }}>
                      <img src={item.image} alt={item.name} style={{ width: '80px', height: '100px', objectFit: 'cover', borderRadius: '0.375rem' }} />
                      <div style={{ flex: 1 }}>
                        <p style={{ color: '#ffffff', fontWeight: '500', marginBottom: '0.5rem' }}>{item.name}</p>
                        <p style={{ color: '#c9a962', fontSize: '0.875rem', marginBottom: '0.75rem' }}>${item.price}</p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{ background: 'rgba(201, 169, 98, 0.1)', border: '1px solid rgba(201, 169, 98, 0.3)', color: '#c9a962', width: '24px', height: '24px', cursor: 'pointer', borderRadius: '4px' }}>
                            −
                          </button>
                          <span style={{ color: '#a0a0a0', minWidth: '24px', textAlign: 'center' }}>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{ background: 'rgba(201, 169, 98, 0.1)', border: '1px solid rgba(201, 169, 98, 0.3)', color: '#c9a962', width: '24px', height: '24px', cursor: 'pointer', borderRadius: '4px' }}>
                            +
                          </button>
                          <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: 'auto', background: 'transparent', border: 'none', color: '#a0a0a0', cursor: 'pointer', fontSize: '0.75rem' }}>
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ borderTop: '2px solid rgba(201, 169, 98, 0.3)', paddingTop: '1.5rem', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: '#ffffff' }}>
                    <span>Total:</span>
                    <span style={{ color: '#c9a962', fontSize: '1.125rem', fontWeight: '600' }}>${totalPrice.toFixed(2)}</span>
                  </div>
                </div>

                <button onClick={clearCart} style={{ width: '100%', padding: '0.75rem', background: 'transparent', border: '1px solid rgba(201, 169, 98, 0.3)', color: '#c9a962', cursor: 'pointer', borderRadius: '0.375rem', marginBottom: '0.75rem', transition: 'all 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(201, 169, 98, 0.1)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                  Clear Cart
                </button>

                <button onClick={() => { setIsCartOpen(false); navigate('/checkout'); }} style={{ width: '100%', padding: '0.75rem', background: 'linear-gradient(135deg, #c9a962 0%, #f4e5c3 50%, #c9a962 100%)', color: '#0a0a0a', border: 'none', cursor: 'pointer', borderRadius: '0.375rem', fontWeight: '600', letterSpacing: '0.05em', transition: 'all 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 8px 20px rgba(201, 169, 98, 0.5)'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}>
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
} 