import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Remove or replace with <a href="/"> if not using React Router

export default function Privacypolicy() {
  const [isVisible, setIsVisible] = useState(false);
  const [headerOffset, setHeaderOffset] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const updateHeaderOffset = () => {
      const header = document.querySelector('header');
      const h = header ? header.offsetHeight : 0;
      setHeaderOffset(h);
    };

    updateHeaderOffset();
    window.addEventListener('resize', updateHeaderOffset);
    window.addEventListener('scroll', updateHeaderOffset);
    return () => {
      window.removeEventListener('resize', updateHeaderOffset);
      window.removeEventListener('scroll', updateHeaderOffset);
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
        
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
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

        /* Improved Back to Home Button - elegant, subtle, and luxurious */
        .back-home-btn {
          position: fixed;
          top: 2rem;
          left: 2rem;
          z-index: 1000;
          background: rgba(15, 15, 15, 0.6);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(201, 169, 98, 0.3);
          border-radius: 9999px;
          padding: 0.75rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #c9a962;
        }

        .back-home-btn:hover {
          background: rgba(201, 169, 98, 0.15);
          border-color: #c9a962;
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(201, 169, 98, 0.2);
        }

        .back-home-btn .arrow {
          transition: transform 0.4s ease;
        }

        .back-home-btn:hover .arrow {
          transform: translateX(-6px);
        }

        @media (max-width: 768px) {
          .back-home-btn {
            top: 1.5rem;
            left: 1rem;
            padding: 0.65rem 1.25rem;
            font-size: 0.8rem;
            gap: 0.5rem;
          }
        }
      `}</style>

      {/* Improved Back to Home Button - subtle luxury with glassmorphism and smooth hover */}
      <div className="back-home-btn">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'inherit', textDecoration: 'none' }}>
          <span className="arrow">←</span>
          Back to Home
        </Link>
      </div>

      <section
        className="relative py-20 bg-black"
        style={{ paddingTop: headerOffset ? `${headerOffset}px` : undefined }}
      >
        <div className="relative z-10" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="text-center">
            {/* Page Title Entrance */}
            <div
              className="transition-all duration-1000 delay-300"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
              }}
            >
              <div className="inline-flex items-center gap-3 mb-8">
                <span className="w-12 h-px bg-gradient-to-r from-transparent to-[#c9a962]" />
                <p className="text-[#c9a962] tracking-widest uppercase text-xs font-medium">
                  Privacy Policy
                </p>
                <span className="w-12 h-px bg-gradient-to-l from-transparent to-[#c9a962]" />
              </div>
            </div>

            <h1
              className="font-serif leading-tight mb-12 transition-all duration-1000 delay-500"
              style={{
                fontSize: 'clamp(2.5rem, 7vw, 5rem)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)'
              }}
            >
              <span className="block text-white">Your Privacy</span>
              <span className="block text-gradient-gold-shimmer mt-2">Matters to Us</span>
            </h1>

            {/* All Content Sections with Staggered Entrance Animation */}
            <div className="text-left max-w-4xl mx-auto space-y-12 text-gray-300 leading-relaxed">
              <section className="transition-all duration-1000 delay-700" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)' }}>
                <h2 className="font-serif text-3xl text-gradient-gold mb-6">Introduction</h2>
                <p className="text-lg">
                  Welcome to Seth Syb (we, our, or us). Seth Syb is a luxury perfume company that produces and markets high-quality fragrances on its official site. We value your privacy, and this Privacy Policy explains how we collect, use, protect, and share your personal data when you visit or shop on our site.
                </p>
                <p className="mt-4">
                  By accessing or using the Seth Syb site, you agree to the practices described in this Privacy Policy.
                </p>
              </section>

              <section className="transition-all duration-1000 delay-900" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)' }}>
                <h2 className="font-serif text-3xl text-gradient-gold mb-6">Information We Collect</h2>
                <p className="text-lg mb-6">We may collect the following information when you visit our site:</p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl text-[#c9a962] mb-3">Personal Information</h3>
                    <ul className="list-disc list-inside space-y-2 pl-4 text-gray-400">
                      <li>Full name</li>
                      <li>Email address</li>
                      <li>Phone number</li>
                      <li>Billing and shipping address</li>
                      <li>Payment details (processed via secure payment gateways)</li>
                      <li>Account login information (if you create an account)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl text-[#c9a962] mb-3">Order & Transaction Information</h3>
                    <ul className="list-disc list-inside space-y-2 pl-4 text-gray-400">
                      <li>Items purchased (perfumes and accessories)</li>
                      <li>Order history and preferences</li>
                      <li>Delivery and return information</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl text-[#c9a962] mb-3">Automatically Collected Information</h3>
                    <ul className="list-disc list-inside space-y-2 pl-4 text-gray-400">
                      <li>IP address</li>
                      <li>Browser and device type</li>
                      <li>Site visit duration and behavior</li>
                      <li>Cookies and tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="transition-all duration-1000 delay-1100" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)' }}>
                <h2 className="font-serif text-3xl text-gradient-gold mb-6">How We Use Your Information</h2>
                <ol className="list-decimal list-inside space-y-4 text-lg text-gray-400 pl-4">
                  <li>Process and fulfill your perfume orders</li>
                  <li>Handle payments, shipping, and returns</li>
                  <li>Communicate order confirmations and customer support</li>
                  <li>Improve our website, products, and service</li>
                  <li>Personalize fragrance recommendations and promotions</li>
                  <li>Send marketing emails (only with your consent)</li>
                  <li>Comply with legal and regulatory obligations</li>
                </ol>
              </section>

              <section className="transition-all duration-1000 delay-1300" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)' }}>
                <h2 className="font-serif text-3xl text-gradient-gold mb-6">Cookies & Tracking Technologies</h2>
                <p className="text-lg">
                  We use cookies and similar technologies to ensure site functionality, remember preferences, analyze traffic, and enhance marketing. You can manage cookies in your browser settings, though disabling them may affect site performance.
                </p>
              </section>

              <section className="transition-all duration-1000 delay-1500" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)' }}>
                <h2 className="font-serif text-3xl text-gradient-gold mb-6">Sharing of Information</h2>
                <p className="text-lg">
                  We do not sell or rent your personal information. We only share it with trusted third parties such as secure payment processors, shipping partners, marketing services (with consent), and legal authorities when required by law.
                </p>
              </section>

              <section className="transition-all duration-1000 delay-1700" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)' }}>
                <h2 className="font-serif text-3xl text-gradient-gold mb-6">Data Security</h2>
                <p className="text-lg">
                  We implement appropriate technical and organizational measures to protect your data using secure servers, encrypted payments, and restricted access. However, no online method is 100% secure.
                </p>
              </section>

              <section className="transition-all duration-1000 delay-1900" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)' }}>
                <h2 className="font-serif text-3xl text-gradient-gold mb-6">Your Rights</h2>
                <p className="text-lg">
                  Depending on your location, you may have the right to access, correct, delete, or object to the processing of your personal data. Contact us to exercise these rights.
                </p>
              </section>

              <section className="transition-all duration-1000 delay-2100" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)' }}>
                <h2 className="font-serif text-3xl text-gradient-gold mb-6">Children’s Privacy</h2>
                <p className="text-lg">
                  We do not knowingly collect personal information from children under 13. If you believe a child has provided us with data, please contact us.
                </p>
              </section>

              <section className="transition-all duration-1000 delay-2300" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)' }}>
                <h2 className="font-serif text-3xl text-gradient-gold mb-6">Contact Us</h2>
                <p className="text-lg">
                  For questions about this Privacy Policy or your data:
                </p>
                <div className="mt-6 space-y-3 text-gray-400">
                  <p><strong>Brand:</strong> Seth Syb</p>
                  <p><strong>Website:</strong> <a href="https://sethsyb.com" className="text-[#c9a962] hover:underline">https://sethsyb.com</a></p>
                  <p><strong>Email:</strong> <a href="mailto:info@sethsyb.com" className="text-[#c9a962] hover:underline">info@sethsyb.com</a></p>
                </div>
                <p className="mt-8 text-lg italic">
                  Your trust is essential to us. We are committed to protecting your privacy while delivering an exceptional fragrance experience.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}