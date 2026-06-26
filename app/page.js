"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [typedText, setTypedText] = useState('');
  const fullText = "Aapki Seva, Hamaari Zimmedaari";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  const testimonials = [
    {
      initials: 'RK',
      name: 'Ravi Kumar',
      location: 'Beawar, Rajasthan',
      text: 'Shree Shyam e-Mitra ne mera Aadhar card bahut jaldi banwa diya. Bahut acchi service aur staff bhi bahut helpful hai. Main har kisi ko recommend karta hoon.'
    },
    {
      initials: 'SP',
      name: 'Sunita Patel',
      location: 'Ajmer, Rajasthan',
      text: 'Mujhe apna income certificate chahiye tha. Bahut asaani se mil gaya. Online application ka process bhi samjhaya unhone. Thank you Shree Shyam e-Mitra!'
    },
    {
      initials: 'AM',
      name: 'Amit Mishra',
      location: 'Daya Nagar, Beawar',
      text: 'Bills payment ke liye best jagah hai. Koi line nahi, koi jhanjhat nahi. Bas aao aur payment karo. Bahut time bachta hai.'
    }
  ];

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
                <span className="typing-text">{typedText}</span><span className="typing-cursor"></span>
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
          <div className="trust-item fade-in appear" style={{ transitionDelay: '0.2s' }}>
            <div className="trust-icon"><i className="fa-solid fa-building-shield"></i></div>
            <span>Government Authorized</span>
          </div>
          <div className="trust-item fade-in appear" style={{ transitionDelay: '0.4s' }}>
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
            <div className="service-card fade-in appear tilt-card" style={{ transitionDelay: '0.1s' }}>
              <div className="service-icon"><i className="fa-solid fa-file-invoice"></i></div>
              <h3>Certificates</h3>
              <p>Apply for Birth, Death, Income, Caste, and Domicile certificates easily.</p>
            </div>
            <div className="service-card fade-in appear tilt-card" style={{ transitionDelay: '0.2s' }}>
              <div className="service-icon"><i className="fa-solid fa-money-bill-transfer"></i></div>
              <h3>Bill Payments</h3>
              <p>Pay your electricity, water, and other utility bills quickly and securely.</p>
            </div>
            <div className="service-card fade-in appear tilt-card" style={{ transitionDelay: '0.3s' }}>
              <div className="service-icon"><i className="fa-solid fa-passport"></i></div>
              <h3>Passport & License</h3>
              <p>Assistance with Passport applications and Driving License forms.</p>
            </div>
            <div className="service-card fade-in appear tilt-card" style={{ transitionDelay: '0.4s' }}>
              <div className="service-icon"><i className="fa-solid fa-id-card-clip"></i></div>
              <h3>Jan Aadhar Card</h3>
              <p>Apply for new Jan Aadhar, updates, e-KYC, and family splitting.</p>
            </div>
          </div>
          
          <div className="text-center fade-in appear" style={{ marginTop: '3rem' }}>
            <Link href="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <svg className="section-divider section-divider--bottom" viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
      </svg>

      {/* Client Trust Strip */}
      <div className="client-strip">
        <div className="container">
          <p className="client-strip-title">Trusted by leading platforms</p>
          <div className="client-strip-wrapper">
            <div className="client-strip-track">
              <i className="fa-solid fa-building-columns"></i>
              <i className="fa-solid fa-indian-rupee-sign"></i>
              <i className="fa-solid fa-file-shield"></i>
              <i className="fa-solid fa-award"></i>
              <i className="fa-solid fa-landmark"></i>
              <i className="fa-solid fa-passport"></i>
              <i className="fa-solid fa-id-card"></i>
              <i className="fa-solid fa-building-columns"></i>
              <i className="fa-solid fa-indian-rupee-sign"></i>
              <i className="fa-solid fa-file-shield"></i>
              <i className="fa-solid fa-award"></i>
              <i className="fa-solid fa-landmark"></i>
              <i className="fa-solid fa-passport"></i>
              <i className="fa-solid fa-id-card"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <section className="testimonials-section section-padding" id="testimonials">
        <svg className="section-divider section-divider--top" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
        <div className="container">
          <div className="text-center fade-in-up appear">
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-subtitle">Real feedback from real people in our community.</p>
          </div>
          
          <div className="testimonials-container fade-in-up appear">
            {testimonials.map((testi, index) => (
              <div 
                key={index} 
                className={`testimonial-card tilt-card ${activeTestimonial === index ? 'active' : ''}`}
                style={{ display: activeTestimonial === index ? 'block' : 'none' }}
              >
                <div className="testimonial-stars">
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                </div>
                <p className="testimonial-text">{testi.text}</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{testi.initials}</div>
                  <div className="testimonial-name">{testi.name}<span>{testi.location}</span></div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={`testimonial-dot ${activeTestimonial === index ? 'active' : ''}`} 
                onClick={() => setActiveTestimonial(index)}
                aria-label={`Testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Action Buttons */}
      <a href="https://wa.me/916377507537" target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Chat on WhatsApp">
        <i className="fa-brands fa-whatsapp"></i>
      </a>
      <button className="back-to-top visible" onClick={() => window.scrollTo(0, 0)} aria-label="Back to top">
        <i className="fa-solid fa-chevron-up"></i>
      </button>
    </>
  );
}
