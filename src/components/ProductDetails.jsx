import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Minus, Plus, Star, ShoppingBag, Check, Truck, Shield, RotateCcw, X } from 'lucide-react';
import { products, getProductById } from '../../lib/products';
import { useCart } from '../context/CartContext';

const features = [
  { icon: Truck, label: "Free Shipping", description: "On orders over $150" },
  { icon: Shield, label: "Authenticity", description: "100% Guaranteed" },
  { icon: RotateCcw, label: "Easy Returns", description: "30-day policy" },
];

export default function ProductDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    // If slug is numeric, get by ID (backward compatibility)
    let fetchedProduct = null;
    if (!isNaN(slug)) {
      fetchedProduct = getProductById(slug);
    } else {
      // Get by name slug
      fetchedProduct = products.find(p => p.name.toLowerCase().replace(/\s+/g, '-') === slug);
    }
    
    if (fetchedProduct) {
      setProduct(fetchedProduct);
      setSelectedSize(fetchedProduct.sizes[1]);
    }
  }, [slug]);

  if (!product) {
    return (
      <div style={{ padding: '8rem 0', textAlign: 'center', background: '#0a0a0a' }}>
        <p style={{ color: '#a0a0a0' }}>Loading product...</p>
      </div>
    );
  }

  const allImages = [product.image, ...product.gallery];

  const handleAddToCart = () => {
    if (selectedSize) {
      const item = {
        id: `${product.id}-${selectedSize.size}`,
        name: product.name,
        price: selectedSize.price,
        image: product.image,
        size: selectedSize.size,
        quantity: quantity
      };
      
      addToCart(item);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2000);
      console.log('Added to cart:', item);
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

        .btn-gold-gradient {
          background: linear-gradient(135deg, #c9a962 0%, #f4e5c3 50%, #c9a962 100%);
          color: #0a0a0a;
        }

        .btn-gold-gradient:hover {
          box-shadow: 0 8px 25px rgba(201, 169, 98, 0.4);
        }

        .gold-glow-subtle {
          box-shadow: 0 0 20px rgba(201, 169, 98, 0.2);
        }

        @media (max-width: 1024px) {
          .product-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <section style={{ padding: '3rem 0', position: 'relative', background: '#0a0a0a' }}>
        {/* Background Effect */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: '25%',
              width: '600px',
              height: '600px',
              background: 'rgba(201, 169, 98, 0.05)',
              borderRadius: '9999px',
              filter: 'blur(150px)',
            }}
          />
        </div>

        {/* Close Button */}
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', marginBottom: '2rem', display: 'none' }}>
          <button
            onClick={() => window.history.back()}
            style={{
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
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        <div className="product-grid" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem' }}>
          {/* Left Side - Images */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Main Image */}
            <div
              style={{
                position: 'relative',
                aspectRatio: '3/4',
                background: '#0f0f0f',
                borderRadius: '1rem',
                overflow: 'hidden',
              }}
            >
              <img
                src={allImages[selectedImage]}
                alt={product.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.7s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(10, 10, 10, 0.2), transparent)',
                }}
              />

              {/* Category Badge */}
              <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem' }}>
                <span
                  style={{
                    padding: '0.5rem 1rem',
                    fontSize: '0.75rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    background: 'rgba(15, 15, 15, 0.9)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '9999px',
                    color: '#c9a962',
                  }}
                >
                  {product.category}
                </span>
              </div>
            </div>

            {/* Image Gallery */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
              {allImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  style={{
                    position: 'relative',
                    aspectRatio: '1',
                    borderRadius: '0.75rem',
                    overflow: 'hidden',
                    border: selectedImage === index ? '2px solid #c9a962' : '2px solid transparent',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    boxShadow: selectedImage === index ? '0 0 20px rgba(201, 169, 98, 0.2)' : 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (selectedImage !== index) {
                      e.currentTarget.style.borderColor = 'rgba(201, 169, 98, 0.5)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedImage !== index) {
                      e.currentTarget.style.borderColor = 'transparent';
                    }
                  }}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Product Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Header */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <span style={{ width: '2rem', height: '1px', background: '#c9a962' }} />
                <p style={{ color: '#c9a962', letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.75rem' }}>
                  {product.category}
                </p>
              </div>
              <h1 className="font-serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', marginBottom: '1rem', color: '#ffffff' }}>
                {product.name}
              </h1>
              <p style={{ color: '#a0a0a0', lineHeight: '1.7', fontSize: '1.125rem', fontFamily: 'Inter, sans-serif' }}>
                {product.shortDescription}
              </p>

              {/* Rating */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '1rem' }}>
                <div style={{ display: 'flex', gap: '0.125rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} style={{ fill: '#c9a962', color: '#c9a962' }} />
                  ))}
                </div>
                <span style={{ fontSize: '0.875rem', color: '#a0a0a0', fontFamily: 'Inter, sans-serif' }}>
                  ({product.reviews.length} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <span className="font-serif text-gradient-gold" style={{ fontSize: '3rem' }}>
                ${selectedSize.price}
              </span>
              <span style={{ color: '#a0a0a0', fontSize: '1.125rem', fontFamily: 'Inter, sans-serif' }}>
                {selectedSize.size}
              </span>
            </div>

            {/* Size Selection */}
            <div>
              <p style={{ fontSize: '0.875rem', fontWeight: '500', marginBottom: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif', color: '#ffffff' }}>
                Select Size
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                {product.sizes.map((size) => (
                  <button
                    key={size.size}
                    onClick={() => setSelectedSize(size)}
                    style={{
                      flex: 1,
                      padding: '1rem 1.5rem',
                      border: selectedSize.size === size.size ? '1px solid #c9a962' : '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '0.75rem',
                      background: selectedSize.size === size.size ? 'rgba(201, 169, 98, 0.1)' : '#0f0f0f',
                      color: selectedSize.size === size.size ? '#c9a962' : '#ffffff',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      boxShadow: selectedSize.size === size.size ? '0 0 20px rgba(201, 169, 98, 0.2)' : 'none',
                    }}
                    onMouseEnter={(e) => {
                      if (selectedSize.size !== size.size) {
                        e.currentTarget.style.borderColor = 'rgba(201, 169, 98, 0.5)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedSize.size !== size.size) {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      }
                    }}
                  >
                    <span className="font-serif" style={{ display: 'block', fontSize: '1.125rem' }}>{size.size}</span>
                    <span style={{ display: 'block', fontSize: '0.875rem', color: '#a0a0a0', marginTop: '0.25rem' }}>
                      ${size.price}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <p style={{ fontSize: '0.875rem', fontWeight: '500', marginBottom: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif', color: '#ffffff' }}>
                Quantity
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '0.75rem', background: '#0f0f0f' }}>
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    style={{
                      padding: '1rem',
                      background: 'transparent',
                      border: 'none',
                      color: '#ffffff',
                      cursor: 'pointer',
                      transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#c9a962')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
                    aria-label="Decrease quantity"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="font-serif" style={{ width: '3.5rem', textAlign: 'center', fontSize: '1.25rem', color: '#ffffff' }}>
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    style={{
                      padding: '1rem',
                      background: 'transparent',
                      border: 'none',
                      color: '#ffffff',
                      cursor: 'pointer',
                      transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#c9a962')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
                    aria-label="Increase quantity"
                  >
                    <Plus size={20} />
                  </button>
                </div>
                <span style={{ fontSize: '0.875rem', color: '#a0a0a0', fontFamily: 'Inter, sans-serif' }}>
                  Total:{' '}
                  <span className="font-serif text-gradient-gold" style={{ fontSize: '1.125rem' }}>
                    ${(selectedSize.price * quantity).toFixed(2)}
                  </span>
                </span>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="btn-gold-gradient"
              style={{
                height: '4rem',
                fontSize: '1rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                fontWeight: '500',
                fontFamily: 'Inter, sans-serif',
                background: isAdded 
                  ? 'linear-gradient(135deg, #16a34a 0%, #22c55e 50%, #16a34a 100%)'
                  : 'linear-gradient(135deg, #c9a962 0%, #f4e5c3 50%, #c9a962 100%)',
                color: isAdded ? '#ffffff' : '#0a0a0a',
                boxShadow: !isAdded ? '0 4px 15px rgba(201, 169, 98, 0.3)' : '0 4px 15px rgba(22, 163, 74, 0.3)',
              }}
              onMouseEnter={(e) => {
                if (!isAdded) {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(201, 169, 98, 0.5)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isAdded) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(201, 169, 98, 0.3)';
                }
              }}
            >
              {isAdded ? (
                <>
                  <Check size={20} />
                  Added to Bag
                </>
              ) : (
                <>
                  <ShoppingBag size={20} />
                  Add to Bag
                </>
              )}
            </button>

            {/* Features */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', paddingTop: '1.5rem' }}>
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.label}
                    style={{
                      textAlign: 'center',
                      padding: '1rem',
                      borderRadius: '0.75rem',
                      background: '#0f0f0f',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <Icon size={24} style={{ color: '#c9a962', margin: '0 auto 0.5rem' }} />
                    <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#ffffff', fontFamily: 'Inter, sans-serif' }}>
                      {feature.label}
                    </p>
                    <p style={{ fontSize: '0.75rem', color: '#a0a0a0', marginTop: '0.25rem', fontFamily: 'Inter, sans-serif' }}>
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* The Story */}
            <div style={{ paddingTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <h3 className="font-serif" style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#ffffff' }}>
                The Story
              </h3>
              <p style={{ color: '#a0a0a0', lineHeight: '1.7', fontFamily: 'Inter, sans-serif' }}>
                {product.longDescription}
              </p>
            </div>

            {/* Fragrance Notes */}
            <div style={{ paddingTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <h3 className="font-serif" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#ffffff' }}>
                Fragrance Notes
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                {[
                  { title: 'Top Notes', notes: product.topNotes, icon: '✧' },
                  { title: 'Heart Notes', notes: product.heartNotes, icon: '❖' },
                  { title: 'Base Notes', notes: product.baseNotes, icon: '◆' }
                ].map((section) => (
                  <div
                    key={section.title}
                    style={{
                      padding: '1.5rem',
                      borderRadius: '0.75rem',
                      background: '#0f0f0f',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <div
                      style={{
                        width: '3rem',
                        height: '3rem',
                        borderRadius: '9999px',
                        background: 'rgba(201, 169, 98, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1rem',
                      }}
                    >
                      <span style={{ color: '#c9a962', fontSize: '1.125rem' }}>{section.icon}</span>
                    </div>
                    <h4 className="font-serif" style={{ fontSize: '1.125rem', color: '#c9a962', marginBottom: '0.75rem' }}>
                      {section.title}
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {section.notes.map((note) => (
                        <li key={note} style={{ fontSize: '0.875rem', color: '#a0a0a0', fontFamily: 'Inter, sans-serif' }}>
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div style={{ maxWidth: '1280px', margin: '6rem auto 0', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h2 className="font-serif" style={{ fontSize: 'clamp(1.875rem, 4vw, 2.25rem)', color: '#ffffff' }}>
                Customer Reviews
              </h2>
              <p style={{ color: '#a0a0a0', marginTop: '0.5rem', fontFamily: 'Inter, sans-serif' }}>
                Hear from our valued clients
              </p>
            </div>
            <button
              style={{
                background: 'transparent',
                border: '1px solid #c9a962',
                color: '#c9a962',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: '0.875rem',
                letterSpacing: '0.05em',
                fontFamily: 'Inter, sans-serif',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(201, 169, 98, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              Write a Review
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {product.reviews.map((review) => (
              <div
                key={review.id}
                style={{
                  background: '#0f0f0f',
                  padding: '2rem',
                  borderRadius: '1rem',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(201, 169, 98, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} style={{ fill: '#c9a962', color: '#c9a962' }} />
                  ))}
                </div>
                <p
                  style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    marginBottom: '1.5rem',
                    lineHeight: '1.7',
                    fontStyle: 'italic',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  {review.comment}
                </p>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div
                      style={{
                        width: '2.5rem',
                        height: '2.5rem',
                        borderRadius: '9999px',
                        background: 'rgba(201, 169, 98, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <span className="font-serif" style={{ color: '#c9a962' }}>
                        {review.author.charAt(0)}
                      </span>
                    </div>
                    <p style={{ fontWeight: '500', color: '#c9a962', fontFamily: 'Inter, sans-serif' }}>
                      {review.author}
                    </p>
                  </div>
                  <p style={{ fontSize: '0.75rem', color: '#a0a0a0', fontFamily: 'Inter, sans-serif' }}>
                    {review.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <RelatedProducts currentProductId={product.id} />
      </section>
    </>
  );
}

function RelatedProducts({ currentProductId }) {
  const navigate = useNavigate();
  const relatedProducts = products.filter(p => p.id !== currentProductId).slice(0, 3);

  const handleProductClick = (product) => {
    const slug = product.name.toLowerCase().replace(/\s+/g, '-');
    navigate(`/product/${slug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ maxWidth: '1280px', margin: '6rem auto 0', padding: '0 1.5rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
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
            Explore More
          </p>
          <span
            style={{
              width: '4rem',
              height: '1px',
              background: 'linear-gradient(to left, transparent, #c9a962)',
            }}
          />
        </div>
        <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: '#ffffff', marginBottom: '0.5rem' }}>
          You Might Also Like
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        {relatedProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => handleProductClick(product)}
            style={{
              background: '#0f0f0f',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '0.75rem',
              overflow: 'hidden',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-12px)';
              e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(201, 169, 98, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }}
          >
            {/* Image */}
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
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.15)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 40%, transparent 70%)',
                  opacity: 0.7,
                }}
              />
            </div>

            {/* Info */}
            <div style={{ padding: '1.5rem' }}>
              <h3
                className="font-serif"
                style={{
                  fontSize: '1.25rem',
                  color: '#ffffff',
                  marginBottom: '0.5rem',
                }}
              >
                {product.name}
              </h3>
              <p
                style={{
                  fontSize: '0.875rem',
                  color: '#a0a0a0',
                  lineHeight: '1.5',
                  marginBottom: '1rem',
                }}
              >
                {product.description}
              </p>

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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}