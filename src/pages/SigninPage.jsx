import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

export default function SignInPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        'https://sethsybapi.baig.cloud/api/auth/login',
        {
          email: formData.email,
          password: formData.password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      );

      const { token, message, user } = response.data;

      if (message === 'Login successful' && token) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        toast.success(`Welcome back, ${user.name || 'User'}!`, {
          duration: 3000,
          position: 'top-right',
        });

        // Small delay so user can see the success toast
        setTimeout(() => {
          navigate('/', { replace: true });
        }, 800);
      }
    } catch (err) {
      let errorMessage = 'Something went wrong. Please try again.';

      if (err.response?.data?.message) {
        errorMessage = err.response.data.message;
      } else if (err.response?.status === 401) {
        errorMessage = 'Invalid email or password';
      } else if (err.response?.status === 422) {
        errorMessage = err.response.data.errors
          ? Object.values(err.response.data.errors)[0]?.[0] || 'Validation error'
          : 'Validation error - check your input';
      } else if (err.message === 'Network Error') {
        errorMessage = 'Network error - please check your internet connection';
      }

      toast.error(errorMessage, {
        duration: 4000,
        position: 'top-right',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            borderRadius: '10px',
            background: '#1a1a1a',
            color: '#fff',
            border: '1px solid #c9a96233',
          },
          success: {
            iconTheme: {
              primary: '#c9a962',
              secondary: '#000',
            },
          },
          error: {
            iconTheme: {
              primary: '#ff6b6b',
              secondary: '#000',
            },
          },
        }}
      />

      <style>{`
        /* Keep your original beautiful styles here */
        /* ... your existing @keyframes, gradients, etc ... */
        
        .input-luxury {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(201, 169, 98, 0.2);
          transition: all 0.3s ease;
        }
        
        .input-luxury:focus {
          outline: none;
          border-color: #c9a962;
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 0 20px rgba(201, 169, 98, 0.2);
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
      `}</style>

      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-12 px-4">
        {/* Your background effects, blobs, lines etc... */}
        
        <div className="relative z-10 w-full max-w-md">
          <div
            className="bg-black/40 backdrop-blur-xl border border-yellow-700/20 rounded-lg p-8 md:p-10 transition-all duration-1000"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(40px)' }}
          >
            <div className="text-center mb-8">
              <h1 className="font-serif text-4xl md:text-5xl text-gradient-gold-shimmer mb-2">
                Sign In
              </h1>
              <p className="text-gray-400 text-sm">Access your exclusive collection</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm tracking-wide uppercase mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-luxury w-full px-4 py-3 rounded text-white placeholder-gray-500"
                  placeholder="your@email.com"
                  required
                  disabled={loading}
                />
              </div>

              {/* Password */}
              <div className="relative">
                <label htmlFor="password" className="block text-gray-300 text-sm tracking-wide uppercase mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="input-luxury w-full px-4 py-3 pr-12 rounded text-white placeholder-gray-500"
                    placeholder="Enter your password"
                    required
                    disabled={loading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-4 text-[#c9a962] hover:text-[#f4e4bc]"
                    disabled={loading}
                  >
                    {/* eye icons... */}
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 011.563-3.029m5.858.908a3 3 014.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 011-6 0 3 3 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border-yellow-700/30 bg-transparent accent-[#c9a962]"
                    disabled={loading}
                  />
                  <span className="text-gray-400">Remember me</span>
                </label>
                <button type="button" className="text-[#c9a962] hover:text-[#f4e4bc]" disabled={loading}>
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`btn-gold-gradient w-full text-black px-8 py-4 text-sm tracking-widest uppercase font-semibold rounded border-0 transition-all ${
                  loading ? 'opacity-70 cursor-wait' : 'hover:opacity-90 cursor-pointer'
                }`}
              >
                {loading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>

            {/* Your social buttons & sign up link */}
            <p className="text-center text-gray-400 text-sm mt-8">
              Don't have an account?{' '}
              <button
                onClick={() => navigate('/signup')}
                className="text-[#c9a962] hover:text-[#f4e4bc] font-medium"
                disabled={loading}
              >
                Create one here
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}