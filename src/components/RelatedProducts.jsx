import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart, ArrowRight } from 'lucide-react';

// Sample related products
const sampleProducts = [
  {
    id: 2,
    name: "Rose Noir",
    price: 245,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=500&fit=crop",
    description: "Dark rose petals with velvet undertones",
    notes: ["Rose", "Velvet", "Musk"]
  },
  {
    id: 3,
    name: "Citrus Lumière",
    price: 195,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=500&fit=crop",
    description: "Fresh bergamot with golden citrus notes",
    notes: ["Bergamot", "Citrus", "Woods"]
  },
  {
    id: 4,
    name: "Velvet Woods",
    price: 265,
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=400&h=500&fit=crop",
    description: "Sandalwood and cedar with vanilla warmth",
    notes: ["Sandalwood", "Cedar", "Vanilla"]
  },
  {
    id: 5,
    name: "Amber Mystique",
    price: 295,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=500&fit=crop",
    description: "Golden amber with exotic spices",
    notes: ["Amber", "Spice", "Incense"]
  }
];

function ProductCard({ product, onAddToCart, onViewDetails }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  return (
    <div
      className="product-card"
      onClick={() => onViewDetails(product)}
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
        
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 40%, transparent 70%)',
            opacity: isHovered ? 1 : 0.7,
            transition: 'opacity 0.5s ease',
          }}
        />

        <button
          className="add-to-cart-btn"
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }}
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

export default function RelatedProducts({ products = sampleProducts }) {
  const scrollRef = useRef(null);
  const [hoveredButton, setHoveredButton] = useState(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleAddToCart = (product) => {
    console.log('Added to cart:', product);
    // Add your cart logic here
  };

  const handleViewDetails = (product) => {
    console.log('View details:', product);
    // Add your navigation logic here
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

        .font-serif {
          font-family: 'Playfair Display', serif;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <section style={{ padding: '6rem 0', background: '#0f0f0f' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <p
                style={{
                  color: '#c9a962',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  fontSize: '0.875rem',
                  marginBottom: '0.5rem',
                  fontFamily: 'Inter, sans-serif',
                }}
              >
                You May Also Like
              </p>
              <h2 className="font-serif" style={{ fontSize: '1.875rem', color: '#ffffff' }}>
                Related Fragrances
              </h2>
            </div>
            
            {/* Navigation Buttons */}
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                onClick={() => scroll('left')}
                onMouseEnter={() => setHoveredButton('left')}
                onMouseLeave={() => setHoveredButton(null)}
                aria-label="Scroll left"
                style={{
                  padding: '0.75rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  background: hoveredButton === 'left' ? 'rgba(201, 169, 98, 0.1)' : 'transparent',
                  borderColor: hoveredButton === 'left' ? '#c9a962' : 'rgba(255, 255, 255, 0.1)',
                  color: hoveredButton === 'left' ? '#c9a962' : '#ffffff',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll('right')}
                onMouseEnter={() => setHoveredButton('right')}
                onMouseLeave={() => setHoveredButton(null)}
                aria-label="Scroll right"
                style={{
                  padding: '0.75rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  background: hoveredButton === 'right' ? 'rgba(201, 169, 98, 0.1)' : 'transparent',
                  borderColor: hoveredButton === 'right' ? '#c9a962' : 'rgba(255, 255, 255, 0.1)',
                  color: hoveredButton === 'right' ? '#c9a962' : '#ffffff',
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

          {/* Scrollable Products Container */}
          <div
            ref={scrollRef}
            className="scrollbar-hide"
            style={{
              display: 'flex',
              gap: '1.5rem',
              overflowX: 'auto',
              paddingBottom: '1rem',
              margin: '0 -1.5rem',
              padding: '0 1.5rem',
              scrollSnapType: 'x mandatory',
            }}
          >
            {products.map((product, index) => (
              <div
                key={product.id}
                style={{
                  flexShrink: 0,
                  width: '18rem',
                  scrollSnapAlign: 'start',
                }}
              >
                <ProductCard 
                  product={product} 
                  onAddToCart={handleAddToCart}
                  onViewDetails={handleViewDetails}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}