import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import ProductDetails from '../components/ProductDetails';

export default function ProductDetailsPage() {
  const navigate = useNavigate();

  return (
    <div style={{ position: 'relative' }}>
      
      {/* Close Button */}
      <button
        onClick={() => window.history.back()}
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
        aria-label="Close product details"
      >
        <X size={20} />
      </button>

      <ProductDetails />
    </div>
  );
}
