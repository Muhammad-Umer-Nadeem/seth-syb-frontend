import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { products } from '../../lib/products';

function ProductCard({ product, index, onAddToCart, onViewDetails, onNavigate }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleCardClick = (e) => {
    // Only navigate if not clicking the add to cart button or arrow button
    if (!e.target.closest('.add-to-cart-btn') && !e.target.closest('.view-details-btn')) {
      onNavigate(product);
    }
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    onAddToCart(product);
  };

  const handleViewDetailsClick = (e) => {
    e.stopPropagation();
    onViewDetails(product);
  };

  return (
    <div
      className="product-card"
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: '#0f0f0f',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '0.75rem',
        overflow: 'hidden',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        transform: isHovered ? 'translateY(-12px)' : 'translateY(0)',
        boxShadow: isHovered 
          ? '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(201, 169, 98, 0.3)' 
          : '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Product Image */}
      <div
        style={{
          position: 'relative',
          aspectRatio: '4/5',
          overflow: 'hidden',
          background: '#1a1a1a',
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: isHovered ? 'scale(1.15)' : 'scale(1)',
          }}
        />
        
        {/* Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 40%, transparent 70%)',
            opacity: isHovered ? 1 : 0.7,
            transition: 'opacity 0.5s ease',
          }}
        />

        {/* Add to Cart Button */}
        <button
          className="add-to-cart-btn"
          onClick={handleAddToCart}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
          style={{
            position: 'absolute',
            bottom: '1rem',
            left: '50%',
            transform: isHovered ? 'translate(-50%, 0)' : 'translate(-50%, 20px)',
            opacity: isHovered ? 1 : 0,
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            background: isButtonHovered 
              ? 'linear-gradient(135deg, #d4b76e 0%, #f9ecd0 50%, #d4b76e 100%)'
              : 'linear-gradient(135deg, #c9a962 0%, #f4e5c3 50%, #c9a962 100%)',
            color: '#0a0a0a',
            border: 'none',
            padding: '0.875rem 1.75rem',
            fontSize: '0.75rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontWeight: '600',
            cursor: 'pointer',
            borderRadius: '0.375rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            whiteSpace: 'nowrap',
            boxShadow: isButtonHovered 
              ? '0 8px 20px rgba(201, 169, 98, 0.5)' 
              : '0 4px 12px rgba(201, 169, 98, 0.3)',
          }}
        >
          <ShoppingCart size={14} />
          Add to Cart
        </button>
      </div>

      {/* Product Info */}
      <div style={{ padding: '1.5rem' }}>
        <div style={{ marginBottom: '0.75rem' }}>
          <h3
            className="font-serif"
            style={{
              fontSize: '1.25rem',
              color: isHovered ? '#c9a962' : '#ffffff',
              marginBottom: '0.5rem',
              transition: 'color 0.3s ease',
            }}
          >
            {product.name}
          </h3>
          <p
            style={{
              fontSize: '0.875rem',
              color: '#a0a0a0',
              lineHeight: '1.5',
            }}
          >
            {product.description}
          </p>
        </div>

        {/* Notes */}
        <div style={{ marginBottom: '1rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {product.notes.map((note) => (
              <span
                key={note}
                style={{
                  fontSize: '0.625rem',
                  color: '#c9a962',
                  background: 'rgba(201, 169, 98, 0.1)',
                  padding: '0.25rem 0.625rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(201, 169, 98, 0.2)',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                {note}
              </span>
            ))}
          </div>
        </div>

        {/* Price */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span
            className="font-serif"
            style={{
              fontSize: '1.5rem',
              background: 'linear-gradient(135deg, #c9a962 0%, #f4e5c3 50%, #c9a962 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            ${product.price}
          </span>
          <button
            className="view-details-btn"
            style={{
              background: 'transparent',
              border: '1px solid rgba(201, 169, 98, 0.3)',
              color: '#c9a962',
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '9999px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onClick={handleViewDetailsClick}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(201, 169, 98, 0.1)';
              e.currentTarget.style.borderColor = '#c9a962';
              e.currentTarget.style.transform = 'rotate(45deg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(201, 169, 98, 0.3)';
              e.currentTarget.style.transform = 'rotate(0deg)';
            }}
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductDetailModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        animation: 'fadeIn 0.3s ease',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#0f0f0f',
          border: '1px solid rgba(201, 169, 98, 0.3)',
          borderRadius: '1rem',
          maxWidth: '900px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          animation: 'slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
          {/* Image Side */}
          <div style={{ position: 'relative', minHeight: '500px', background: '#1a1a1a' }}>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>

          {/* Details Side */}
          <div style={{ padding: '3rem', position: 'relative' }}>
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'rgba(201, 169, 98, 0.1)',
                border: '1px solid rgba(201, 169, 98, 0.3)',
                color: '#c9a962',
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '9999px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '1.25rem',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(201, 169, 98, 0.2)';
                e.currentTarget.style.transform = 'rotate(90deg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(201, 169, 98, 0.1)';
                e.currentTarget.style.transform = 'rotate(0deg)';
              }}
            >
              ✕
            </button>

            <h2
              className="font-serif"
              style={{
                fontSize: '2.5rem',
                color: '#ffffff',
                marginBottom: '1rem',
              }}
            >
              {product.name}
            </h2>

            <p
              className="font-serif"
              style={{
                fontSize: '2rem',
                background: 'linear-gradient(135deg, #c9a962 0%, #f4e5c3 50%, #c9a962 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '1.5rem',
              }}
            >
              ${product.price}
            </p>

            <p style={{ color: '#a0a0a0', lineHeight: '1.8', marginBottom: '2rem', fontSize: '1rem' }}>
              {product.fullDescription}
            </p>

            <div style={{ marginBottom: '2rem' }}>
              <p style={{ color: '#c9a962', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Fragrance Notes
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {product.notes.map((note) => (
                  <span
                    key={note}
                    style={{
                      fontSize: '0.75rem',
                      color: '#c9a962',
                      background: 'rgba(201, 169, 98, 0.1)',
                      padding: '0.5rem 1rem',
                      borderRadius: '9999px',
                      border: '1px solid rgba(201, 169, 98, 0.2)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            <button
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #c9a962 0%, #f4e5c3 50%, #c9a962 100%)',
                color: '#0a0a0a',
                border: 'none',
                padding: '1.25rem 2rem',
                fontSize: '0.875rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: '600',
                cursor: 'pointer',
                borderRadius: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                transition: 'all 0.3s ease',
              }}
              onClick={() => {
                if (onAddToCart) onAddToCart(product);
                onClose();
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(201, 169, 98, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <ShoppingCart size={18} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductGrid() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    // Optional: Show a toast notification here
    console.log('Added to cart:', product.name);
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const navigate = useNavigate();

  const handleNavigateToProductPage = (product) => {
    const slug = product.name.toLowerCase().replace(/\s+/g, '-');
    navigate(`/product/${slug}`);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

        .font-serif {
          font-family: 'Playfair Display', serif;
        }

        .luxury-line {
          background: linear-gradient(90deg, transparent 0%, #c9a962 50%, transparent 100%);
        }

        .view-all-btn {
          background: transparent;
          border: 1px solid rgba(201, 169, 98, 0.5);
          color: #c9a962;
          padding: 1.5rem 2rem;
          font-size: 0.875rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.5s ease;
          border-radius: 0.375rem;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Inter', sans-serif;
        }

        .view-all-btn:hover {
          background: rgba(201, 169, 98, 0.1);
          border-color: #c9a962;
        }

        .view-all-btn:hover .arrow-icon {
          transform: translateX(4px);
        }

        .arrow-icon {
          transition: transform 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .product-detail-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <section
        id="collection"
        style={{
          padding: '8rem 0',
          background: '#0a0a0a',
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
            className="luxury-line"
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '1px',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '800px',
              height: '800px',
              background: 'rgba(201, 169, 98, 0.05)',
              borderRadius: '9999px',
              filter: 'blur(150px)',
            }}
          />
        </div>

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative' }}>
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
                Our Collection
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
              <span style={{ color: '#ffffff' }}>Signature </span>
              <span
                style={{
                  background: 'linear-gradient(135deg, #c9a962 0%, #f4e5c3 50%, #c9a962 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Fragrances
              </span>
            </h2>
            
            <p
              style={{
                color: '#a0a0a0',
                maxWidth: '48rem',
                margin: '0 auto',
                fontSize: '1.125rem',
                lineHeight: '1.75',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Each perfume in our collection is a masterpiece, crafted with rare ingredients sourced from the most
              exotic corners of the world.
            </p>
          </div>

          {/* Products Grid */}
          <div
            ref={ref}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              marginBottom: '4rem',
            }}
          >
            {products.map((product, index) => (
              <div
                key={product.id}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(64px)',
                  transition: 'all 0.7s ease',
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <ProductCard 
                  product={product} 
                  index={index}
                  onAddToCart={handleAddToCart}
                  onViewDetails={handleViewDetails}
                  onNavigate={handleNavigateToProductPage}
                />
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div style={{ textAlign: 'center' }}>
            <button className="view-all-btn">
              View All Fragrances
              <ArrowRight size={16} className="arrow-icon" />
            </button>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}
    </>
  );
}