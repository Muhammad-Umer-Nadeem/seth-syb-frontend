import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Termsandcondition() {
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

        /* Elegant Back to Home Button - glassmorphism luxury style */
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

      {/* Back to Home Button */}
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
                  Terms and Conditions
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
              <span className="block text-white">Terms of</span>
              <span className="block text-gradient-gold-shimmer mt-2">Use & Service</span>
            </h1>

            {/* All Content Sections with Staggered Entrance Animation */}
            <div className="text-left max-w-4xl mx-auto space-y-12 text-gray-300 leading-relaxed">
              <section className="transition-all duration-1000 delay-700" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)' }}>
                <h2 className="font-serif text-3xl text-gradient-gold mb-6">Introduction</h2>
                <p className="text-lg">
                  Welcome to Seth Syb. These Terms and Conditions govern your access to and use of the official Seth Syb website and the purchase of our luxury perfumes.
                </p>
                <p className="mt-4">
                  By using our website or purchasing our products, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our website.
                </p>
              </section>

              <section className="transition-all duration-1000 delay-900" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)' }}>
                <h2 className="font-serif text-3xl text-gradient-gold mb-6">Eligibility</h2>
                <p className="text-lg">
                  By using this website, you represent and warrant that you have the legal capacity to enter into binding contracts.
                </p>
              </section>

              <section className="transition-all duration-1000 delay-1100" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)' }}>
                <h2 className="font-serif text-3xl text-gradient-gold mb-6">Products and Services</h2>
                <p className="text-lg">
                  Seth Syb specializes in the creation and sale of high-quality luxury perfumes and related products.
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 pl-4 text-gray-400">
                  <li>Product descriptions, images, and prices are provided for informational purposes.</li>
                  <li>We reserve the right to modify, discontinue, or limit the availability of any product without prior notice.</li>
                  <li>Actual product packaging and appearance may vary slightly from images shown on the site.</li>
                </ul>
              </section>

              <section className="transition-all duration-1000 delay-1300" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)' }}>
                <h2 className="font-serif text-3xl text-gradient-gold mb-6">Orders and Payments</h2>
                <ul className="list-disc list-inside space-y-3 text-lg text-gray-400 pl-4">
                  <li>When placing an order, you confirm that all provided information is accurate and complete.</li>
                  <li>Prices are as displayed on the site and may change without notice.</li>
                  <li>Payments are processed securely through trusted third-party payment gateways.</li>
                  <li>Seth Syb reserves the right to cancel or refuse any order due to pricing errors, stock unavailability, or suspected fraudulent activity.</li>
                </ul>
              </section>

              <section className="transition-all duration-1000 delay-1500" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)' }}>
                <h2 className="font-serif text-3xl text-gradient-gold mb-6">Shipping and Delivery</h2>
                <ul className="list-disc list-inside space-y-3 text-lg text-gray-400 pl-4">
                  <li>Delivery timelines are estimates and may vary based on location and carrier performance.</li>
                  <li>Seth Syb is not responsible for delays caused by third-party shipping providers.</li>
                  <li>Risk of loss transfers to the customer upon successful delivery of the order.</li>
                </ul>
              </section>

              <section className="transition-all duration-1000 delay-1700" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)' }}>
                <h2 className="font-serif text-3xl text-gradient-gold mb-6">Returns and Refunds</h2>
                <ul className="list-disc list-inside space-y-3 text-lg text-gray-400 pl-4">
                  <li>Returns and exchanges are accepted only in accordance with our official Return and Refund Policy.</li>
                  <li>Opened, used, or damaged perfumes may not be returned due to hygiene and safety reasons.</li>
                  <li>Approved refunds will be processed to the original payment method within a reasonable timeframe.</li>
                </ul>
              </section>

              <section className="transition-all duration-1000 delay-1900" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)' }}>
                <h2 className="font-serif text-3xl text-gradient-gold mb-6">Intellectual Property</h2>
                <p className="text-lg">
                  All content on the Seth Syb website—including but not limited to logos, brand names, product designs, images, text, graphics, and trademarks—is the exclusive property of Seth Syb.
                </p>
                <p className="mt-4">
                  You may not copy, reproduce, distribute, or use any content without prior written permission from Seth Syb.
                </p>
              </section>

              <section className="transition-all duration-1000 delay-2100" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)' }}>
                <h2 className="font-serif text-3xl text-gradient-gold mb-6">User Conduct</h2>
                <p className="text-lg">You agree not to:</p>
                <ul className="list-disc list-inside space-y-3 mt-4 pl-4 text-gray-400">
                  <li>Use the site for any unlawful or fraudulent purpose.</li>
                  <li>Attempt to interfere with or compromise the website or its systems.</li>
                  <li>Transmit viruses, malware, or harmful code.</li>
                  <li>Impair the functionality or security of the website.</li>
                </ul>
              </section>

              <section className="transition-all duration-1000 delay-2300" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)' }}>
                <h2 className="font-serif text-3xl text-gradient-gold mb-6">Limitation of Liability</h2>
                <p className="text-lg">
                  To the fullest extent permitted by law, Seth Syb shall not be liable for any indirect, incidental, or consequential damages arising from your use of the site or products.
                </p>
                <p className="mt-4">
                  Our total liability shall not exceed the amount you paid for the purchased product.
                </p>
              </section>

              <section className="transition-all duration-1000 delay-2500" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)' }}>
                <h2 className="font-serif text-3xl text-gradient-gold mb-6">Disclaimer</h2>
                <ul className="list-disc list-inside space-y-3 text-lg text-gray-400 pl-4">
                  <li>All products are provided "as is" and "as available."</li>
                  <li>Fragrance preferences are subjective and may vary.</li>
                  <li>Seth Syb does not guarantee that the website will be error-free or uninterrupted.</li>
                </ul>
              </section>

              <section className="transition-all duration-1000 delay-2700" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)' }}>
                <h2 className="font-serif text-3xl text-gradient-gold mb-6">Third-Party Links</h2>
                <p className="text-lg">
                  Our site may contain links to third-party websites. Seth Syb has no control over and assumes no responsibility for the content, privacy policies, or practices of any external sites.
                </p>
              </section>

              <section className="transition-all duration-1000 delay-2900" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)' }}>
                <h2 className="font-serif text-3xl text-gradient-gold mb-6">Termination</h2>
                <p className="text-lg">
                  We reserve the right to suspend or terminate your access to the website at any time, without notice, for violation of these Terms or engagement in harmful activities.
                </p>
              </section>

              <section className="transition-all duration-1000 delay-3100" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)' }}>
                <h2 className="font-serif text-3xl text-gradient-gold mb-6">Governing Law</h2>
                <p className="text-lg">
                  These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which Seth Syb operates, without regard to conflict of law principles.
                </p>
              </section>

              <section className="transition-all duration-1000 delay-3300" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)' }}>
                <h2 className="font-serif text-3xl text-gradient-gold mb-6">Changes to These Terms</h2>
                <p className="text-lg">
                  Seth Syb may update these Terms and Conditions at any time. Changes will be posted on this page with an updated effective date. Continued use of the site constitutes acceptance of the revised Terms.
                </p>
              </section>

              <section className="transition-all duration-1000 delay-3500" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)' }}>
                <h2 className="font-serif text-3xl text-gradient-gold mb-6">Contact Information</h2>
                <p className="text-lg">
                  For any questions regarding these Terms and Conditions, please contact us:
                </p>
                <div className="mt-6 space-y-3 text-gray-400">
                  <p><strong>Brand:</strong> Seth Syb</p>
                  <p><strong>Website:</strong> <a href="https://sethsyb.com" className="text-[#c9a962] hover:underline">https://sethsyb.com</a></p>
                  <p><strong>Email:</strong> <a href="mailto:info@sethsyb.com" className="text-[#c9a962] hover:underline">info@sethsyb.com</a></p>
                </div>
                <p className="mt-8 text-lg italic">
                  Thank you for choosing Seth Syb. We are committed to providing an exceptional luxury fragrance experience.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}