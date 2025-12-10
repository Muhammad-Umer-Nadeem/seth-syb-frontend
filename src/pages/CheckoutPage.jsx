import { useNavigate } from 'react-router-dom';
import { X, Minus, Plus, Trash2, Lock } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  const handleCheckout = () => {
    if (cart.length > 0) {
      alert('Thank you for your order! Proceeding with payment...');
      clearCart();
      navigate('/');
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

        @media (max-width: 768px) {
          .checkout-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <div style={{ minHeight: '100vh', background: '#0a0a0a' }}>
        {/* Close Button */}
        <button
          onClick={() => navigate(-1)}
          style={{
            position: 'fixed',
            top: '1.5rem',
            right: '1.5rem',
            zIndex: 999,
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
          aria-label="Close checkout"
        >
          <X size={20} />
        </button>

        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '4rem 1.5rem' }}>
          {/* Header */}
          <div style={{ marginBottom: '3rem' }}>
            <h1 className="font-serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: '#ffffff', marginBottom: '0.5rem' }}>
              Shopping Bag
            </h1>
            <p style={{ color: '#a0a0a0', fontFamily: 'Inter, sans-serif' }}>
              Review your items and proceed to payment
            </p>
          </div>

          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem' }}>
              <p style={{ color: '#a0a0a0', fontSize: '1.125rem', marginBottom: '2rem', fontFamily: 'Inter, sans-serif' }}>
                Your bag is empty
              </p>
              <button
                onClick={() => navigate('/')}
                style={{
                  background: 'linear-gradient(135deg, #c9a962 0%, #f4e5c3 50%, #c9a962 100%)',
                  color: '#0a0a0a',
                  border: 'none',
                  padding: '1rem 2rem',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  fontWeight: '500',
                  fontFamily: 'Inter, sans-serif',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="checkout-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
              {/* Cart Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      background: '#0f0f0f',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '1rem',
                      padding: '1.5rem',
                      display: 'grid',
                      gridTemplateColumns: '120px 1fr auto',
                      gap: '1.5rem',
                      alignItems: 'center',
                    }}
                  >
                    {/* Product Image */}
                    <div style={{ position: 'relative', aspectRatio: '1', overflow: 'hidden', borderRadius: '0.75rem' }}>
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>

                    {/* Product Details */}
                    <div>
                      <h3 className="font-serif" style={{ fontSize: '1.125rem', color: '#ffffff', marginBottom: '0.25rem' }}>
                        {item.name}
                      </h3>
                      <p style={{ fontSize: '0.875rem', color: '#a0a0a0', marginBottom: '0.75rem', fontFamily: 'Inter, sans-serif' }}>
                        Size: <span style={{ color: '#c9a962' }}>{item.size}</span>
                      </p>
                      <p className="font-serif text-gradient-gold" style={{ fontSize: '1.25rem' }}>
                        ${item.price}
                      </p>
                    </div>

                    {/* Quantity & Remove */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-end' }}>
                      <div style={{ display: 'flex', alignItems: 'center', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '0.5rem', background: '#1a1a1a' }}>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          style={{
                            padding: '0.5rem',
                            background: 'transparent',
                            border: 'none',
                            color: '#a0a0a0',
                            cursor: 'pointer',
                            transition: 'color 0.3s ease',
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = '#c9a962')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = '#a0a0a0')}
                        >
                          <Minus size={16} />
                        </button>
                        <span style={{ padding: '0.5rem 1rem', color: '#ffffff', fontFamily: 'Inter, sans-serif', fontWeight: '500' }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          style={{
                            padding: '0.5rem',
                            background: 'transparent',
                            border: 'none',
                            color: '#a0a0a0',
                            cursor: 'pointer',
                            transition: 'color 0.3s ease',
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = '#c9a962')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = '#a0a0a0')}
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        style={{
                          background: 'transparent',
                          border: '1px solid rgba(255, 59, 48, 0.3)',
                          color: '#ff3b30',
                          padding: '0.5rem 1rem',
                          borderRadius: '0.5rem',
                          cursor: 'pointer',
                          fontSize: '0.75rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          transition: 'all 0.3s ease',
                          fontFamily: 'Inter, sans-serif',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 59, 48, 0.1)';
                          e.currentTarget.style.borderColor = '#ff3b30';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.borderColor = 'rgba(255, 59, 48, 0.3)';
                        }}
                      >
                        <Trash2 size={14} />
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div style={{ position: 'sticky', top: '2rem', height: 'fit-content' }}>
                <div
                  style={{
                    background: '#0f0f0f',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '1rem',
                    padding: '2rem',
                  }}
                >
                  <h3 className="font-serif" style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '1.5rem' }}>
                    Order Summary
                  </h3>

                  {/* Price Breakdown */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#a0a0a0', fontFamily: 'Inter, sans-serif' }}>
                      <span>Subtotal</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#a0a0a0', fontFamily: 'Inter, sans-serif' }}>
                      <span>Shipping</span>
                      <span style={{ color: '#16a34a' }}>Free</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#a0a0a0', fontFamily: 'Inter, sans-serif' }}>
                      <span>Tax</span>
                      <span>${(totalPrice * 0.1).toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Total */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <span style={{ fontFamily: 'Inter, sans-serif', color: '#a0a0a0' }}>Total</span>
                    <span className="font-serif text-gradient-gold" style={{ fontSize: '1.75rem' }}>
                      ${(totalPrice * 1.1).toFixed(2)}
                    </span>
                  </div>

                  {/* Checkout Button */}
                  <button
                    onClick={handleCheckout}
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, #c9a962 0%, #f4e5c3 50%, #c9a962 100%)',
                      color: '#0a0a0a',
                      border: 'none',
                      padding: '1.25rem',
                      borderRadius: '0.75rem',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      fontWeight: '600',
                      fontFamily: 'Inter, sans-serif',
                      letterSpacing: '0.05em',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      transition: 'all 0.3s ease',
                      marginBottom: '1rem',
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
                    <Lock size={18} />
                    Proceed to Payment
                  </button>

                  {/* Continue Shopping */}
                  <button
                    onClick={() => navigate('/')}
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: '1px solid rgba(201, 169, 98, 0.3)',
                      color: '#c9a962',
                      padding: '1.25rem',
                      borderRadius: '0.75rem',
                      cursor: 'pointer',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      fontFamily: 'Inter, sans-serif',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(201, 169, 98, 0.1)';
                      e.currentTarget.style.borderColor = '#c9a962';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.borderColor = 'rgba(201, 169, 98, 0.3)';
                    }}
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
