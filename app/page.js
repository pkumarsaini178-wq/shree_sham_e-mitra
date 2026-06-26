import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="hero" id="home">
        <div className="hero-overlay-gradient"></div>
        <div className="hero-particles"></div>
        <div className="hero-shapes">
          <div className="hero-shape hero-shape-1"></div>
          <div className="hero-shape hero-shape-2"></div>
          <div className="hero-shape hero-shape-3"></div>
        </div>

        <div className="container">
          <div className="hero-grid">
            <div className="hero-text">
              <div className="hero-badge">
                <i className="fa-solid fa-star"></i>
                <span>Trusted by 10,000+ Customers</span>
              </div>
              <h1>Welcome to <span className="highlight">Shree Shyam e-Mitra</span></h1>
              <div className="typing-container">
                <span className="typing-text">Aapki Seva, Hamaari Zimmedaari</span><span className="typing-cursor"></span>
              </div>
              <p className="hero-desc">Your trusted local center for all digital and government services. Fast, reliable, and secure.</p>
              <div className="hero-btns">
                <Link href="/services" className="btn btn-accent pulse-glow">
                  <i className="fa-solid fa-list-check"></i> Hamaari Services Dekhein
                </Link>
                <Link href="/contact" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>
                  <i className="fa-solid fa-phone"></i> Contact Us
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-image-widget">
                <div className="widget-glow"></div>
                {/* Note: In Next.js, images should be in public folder, so we use /shree_sham.jpeg */}
                <img src="/shree_sham.jpeg" alt="Shree Shyam Ji" style={{ width: '100%', borderRadius: '12px' }} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Trust Bar */}
      <section className="trust-bar">
        <div className="container trust-container">
          <div className="trust-item fade-in appear">
            <div className="trust-icon"><i className="fa-solid fa-bolt"></i></div>
            <span>Fast Service</span>
          </div>
          <div className="trust-item fade-in appear">
            <div className="trust-icon"><i className="fa-solid fa-building-shield"></i></div>
            <span>Government Authorized</span>
          </div>
          <div className="trust-item fade-in appear">
            <div className="trust-icon"><i className="fa-solid fa-handshake-angle"></i></div>
            <span>Local Support</span>
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="section-padding quick-services" id="services">
        <div className="container">
          <div className="text-center fade-in appear">
            <h2 className="section-title">Top Services</h2>
            <p className="section-subtitle">We provide a wide range of digital services to make your life easier.</p>
          </div>

          <div className="services-grid">
            <div className="service-card fade-in appear">
              <div className="service-icon"><i className="fa-solid fa-file-invoice"></i></div>
              <h3>Certificates</h3>
              <p>Apply for Birth, Death, Income, Caste, and Domicile certificates easily.</p>
            </div>
            <div className="service-card fade-in appear">
              <div className="service-icon"><i className="fa-solid fa-money-bill-transfer"></i></div>
              <h3>Bill Payments</h3>
              <p>Pay your electricity, water, and other utility bills quickly and securely.</p>
            </div>
            <div className="service-card fade-in appear">
              <div className="service-icon"><i className="fa-solid fa-passport"></i></div>
              <h3>Passport & License</h3>
              <p>Assistance with Passport applications and Driving License forms.</p>
            </div>
            <div className="service-card fade-in appear">
              <div className="service-icon"><i className="fa-solid fa-id-card-clip"></i></div>
              <h3>Jan Aadhar Card</h3>
              <p>Apply for new Jan Aadhar, updates, e-KYC, and family splitting.</p>
            </div>
          </div>
          
          <div className="text-center mt-2" style={{ marginTop: '3rem' }}>
            <Link href="/services" className="btn btn-outline">
              View All Services <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
