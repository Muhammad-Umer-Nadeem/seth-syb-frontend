import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signuppage() {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [agreeToTerms, setAgreeToTerms] = useState(false);

    // New state for password visibility
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        console.log('Sign up attempt:', formData);
        // Here you would typically call your auth API
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
        
        .text-gradient-gold {
          background: linear-gradient(135deg, #c9a962 0%, #f4e4bc 50%, #c9a962 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .text-gradient-gold-shimmer {
          background: linear-gradient(135deg, #c9a962 0%, #f4e4bc 50%, #c9a962 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s ease-in-out infinite;
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
        
        .luxury-line-vertical {
          background: linear-gradient(180deg, transparent, rgba(201, 169, 98, 0.3), transparent);
        }
        
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
        
        .divider-line {
          background: linear-gradient(90deg, transparent, rgba(201, 169, 98, 0.3), transparent);
        }

        .back-btn {
          transition: all 0.3s ease;
        }

        .back-btn:hover {
          transform: translateX(-4px);
        }

        .back-btn svg {
          transition: transform 0.3s ease;
        }

        .back-btn:hover svg {
          transform: translateX(-4px);
        }

        /* Eye icon button style */
        .password-toggle {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          color: #c9a962;
          transition: color 0.3s ease;
        }

        .password-toggle:hover {
          color: #f4e4bc;
        }
      `}</style>

            <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-12 px-4">
                {/* Background Effects */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-neutral-900" />

                    {/* Animated Blobs */}
                    <div
                        className="absolute top-1/4 left-1/4 w-96 h-96 md:w-[600px] md:h-[600px] rounded-full blur-3xl animate-float"
                        style={{ background: 'rgba(201, 169, 98, 0.08)' }}
                    />
                    <div
                        className="absolute bottom-1/4 right-1/4 w-80 h-80 md:w-[500px] md:h-[500px] rounded-full blur-3xl animate-float"
                        style={{ background: 'rgba(201, 169, 98, 0.06)', animationDelay: '1s' }}
                    />

                    {/* Decorative Lines */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="luxury-line-vertical absolute top-0 left-1/4 w-px h-full" />
                        <div className="luxury-line-vertical absolute top-0 right-1/4 w-px h-full" />
                    </div>

                    {/* Corner Decorations */}
                    <div className="absolute top-10 left-10 md:top-20 md:left-20 w-16 h-16 md:w-32 md:h-32 border-l border-t border-yellow-700/20" />
                    <div className="absolute top-10 right-10 md:top-20 md:right-20 w-16 h-16 md:w-32 md:h-32 border-r border-t border-yellow-700/20" />
                    <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20 w-16 h-16 md:w-32 md:h-32 border-l border-b border-yellow-700/20" />
                    <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-16 h-16 md:w-32 md:h-32 border-r border-b border-yellow-700/20" />
                </div>

                {/* Back to Homepage Button */}
                <Link
                    to="/"
                    className="back-btn absolute top-6 left-6 md:top-8 md:left-8 z-20 flex items-center gap-2 text-[#c9a962] hover:text-[#f4e4bc] transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <span className="text-sm tracking-wider uppercase font-medium">Back to Homepage</span>
                </Link>

                {/* Content */}
                <div className="relative z-10 w-full max-w-md">
                    {/* Sign Up Form Card */}
                    <div
                        className="bg-black/40 backdrop-blur-xl border border-yellow-700/20 rounded-lg p-8 md:p-10 transition-all duration-1000"
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
                        }}
                    >
                        {/* Header */}
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center gap-3 mb-4">
                                <span className="w-8 h-px bg-gradient-to-r from-transparent to-[#c9a962]" />
                                <p className="text-[#c9a962] tracking-widest uppercase text-xs font-medium">
                                    Join Us
                                </p>
                                <span className="w-8 h-px bg-gradient-to-l from-transparent to-[#c9a962]" />
                            </div>
                            <h1 className="font-serif text-4xl md:text-5xl text-gradient-gold-shimmer mb-2">
                                Create Account
                            </h1>
                            <p className="text-gray-400 text-sm">
                                Begin your exclusive journey
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Full Name Field */}
                            <div>
                                <label htmlFor="fullName" className="block text-gray-300 text-sm tracking-wide uppercase mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="input-luxury w-full px-4 py-3 rounded text-white placeholder-gray-500"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            {/* Email Field */}
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
                                />
                            </div>

                            {/* Password Field with Toggle */}
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
                                        placeholder="Create a password"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 flex items-center pr-4 text-[#c9a962] hover:text-[#f4e4bc] transition-colors"
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                    >
                                        {showPassword ? (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Confirm Password Field with Toggle */}
                            <div className="relative">
                                <label htmlFor="confirmPassword" className="block text-gray-300 text-sm tracking-wide uppercase mb-2">
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className="input-luxury w-full px-4 py-3 pr-12 rounded text-white placeholder-gray-500"
                                        placeholder="Confirm your password"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute inset-y-0 right-0 flex items-center pr-4 text-[#c9a962] hover:text-[#f4e4bc] transition-colors"
                                        aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                                    >
                                        {showConfirmPassword ? (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>


                            {/* Terms Agreement */}
                            <div className="flex items-start gap-2">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    checked={agreeToTerms}
                                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                                    className="w-4 h-4 mt-1 rounded border-yellow-700/30 bg-transparent accent-[#c9a962] cursor-pointer"
                                    required
                                />
                                <label htmlFor="terms" className="text-gray-400 text-sm cursor-pointer">
                                    I agree to the{' '}
                                    <button type="button" className="text-[#c9a962] hover:text-[#f4e4bc] transition-colors">
                                        Terms of Service
                                    </button>
                                    {' '}and{' '}
                                    <button type="button" className="text-[#c9a962] hover:text-[#f4e4bc] transition-colors">
                                        Privacy Policy
                                    </button>
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="btn-gold-gradient w-full text-black px-8 py-4 text-sm tracking-widest uppercase font-semibold rounded cursor-pointer border-0"
                            >
                                Create Account
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="flex items-center gap-4 my-8">
                            <div className="flex-1 h-px divider-line" />
                            <span className="text-gray-500 text-xs uppercase tracking-wider">Or sign up with</span>
                            <div className="flex-1 h-px divider-line" />
                        </div>

                        {/* Social Sign Up */}
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                type="button"
                                onClick={() => console.log('Google sign up')}
                                className="border border-yellow-700/30 text-white hover:bg-yellow-700/10 hover:border-[#c9a962] px-6 py-3 text-sm tracking-wider uppercase transition-all duration-500 bg-transparent rounded cursor-pointer flex items-center justify-center gap-2"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                                Google
                            </button>
                            <button
                                type="button"
                                onClick={() => console.log('GitHub sign up')}
                                className="border border-yellow-700/30 text-white hover:bg-yellow-700/10 hover:border-[#c9a962] px-6 py-3 text-sm tracking-wider uppercase transition-all duration-500 bg-transparent rounded cursor-pointer flex items-center justify-center gap-2"
                            >
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                                </svg>
                                GitHub
                            </button>
                        </div>

                        {/* Sign In Link */}
                        <p className="text-center text-gray-400 text-sm mt-8">
                            Already have an account?{' '}
                            <Link
                                to="/signin"
                                className="text-[#c9a962] hover:text-[#f4e4bc] transition-colors font-medium"
                            >
                                Sign in here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}