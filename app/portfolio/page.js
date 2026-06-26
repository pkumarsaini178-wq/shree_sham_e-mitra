export default function Portfolio() {
  return (
    <>
      <header className="page-header" style={{ position: 'relative', overflow: 'hidden', padding: '8rem 0 6rem' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.4) 0%, transparent 70%)', zIndex: 0 }}></div>
        <div className="container fade-in appear" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.2)', marginBottom: '1.5rem', fontSize: '0.9rem', color: '#DBEAFE', backdropFilter: 'blur(10px)' }}>
            <i className="fa-solid fa-star" style={{ color: '#FBBF24', marginRight: '8px' }}></i> 15+ Years of Excellence
          </div>
          <h1 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.1 }}>
            Our <span style={{ background: 'linear-gradient(135deg, #F97316, #FBBF24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Portfolio</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#DBEAFE', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            A visual journey of our trusted services, government authorizations, and the impact we've made in our community.
          </p>
        </div>
      </header>

      {/* Hero Stats (Bento Grid) */}
      <section className="section-padding" style={{ background: '#F8FAFC', position: 'relative' }}>
        <div className="container">
          <div className="bento-grid" style={{ marginTop: '-4rem', position: 'relative', zIndex: 10 }}>
            <div className="bento-item bento-hero fade-in appear" style={{ background: 'white', borderRadius: '24px', padding: '3rem', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)', display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <div style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', border: '4px solid #EFF6FF', boxShadow: '0 10px 20px rgba(26,86,219,0.1)', flexShrink: 0 }}>
                <img src="/Founder_pic.jpeg" alt="Founder" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#DEF7EC', color: '#03543F', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem' }}>
                  <span style={{ width: '8px', height: '8px', background: '#10B981', borderRadius: '50%', animation: 'blink 1.5s infinite' }}></span> Active since 2006
                </div>
                <h2 style={{ fontSize: '2rem', color: '#1E293B', marginBottom: '0.5rem' }}>Shree Shyam e-Mitra</h2>
                <p style={{ color: '#64748B', fontSize: '1.1rem' }}>Delivering digital excellence and government services to thousands of satisfied citizens in Ajmer with 100% transparency.</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="fade-in appear" style={{ background: 'linear-gradient(135deg, #1A56DB, #3B82F6)', borderRadius: '24px', padding: '2rem', color: 'white', display: 'flex', alignItems: 'center', gap: '1.5rem', boxShadow: '0 15px 30px rgba(26,86,219,0.2)', height: '100%' }}>
                <div style={{ width: '60px', height: '60px', background: 'rgba(255,255,255,0.2)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', backdropFilter: 'blur(5px)' }}>
                  <i className="fa-solid fa-users"></i>
                </div>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1 }}>10k+</div>
                  <div style={{ opacity: 0.9, marginTop: '0.5rem', fontSize: '1.1rem' }}>Happy Customers</div>
                </div>
              </div>
              
              <div className="fade-in appear" style={{ background: 'linear-gradient(135deg, #F97316, #EA580C)', borderRadius: '24px', padding: '2rem', color: 'white', display: 'flex', alignItems: 'center', gap: '1.5rem', boxShadow: '0 15px 30px rgba(249,115,22,0.2)', height: '100%' }}>
                <div style={{ width: '60px', height: '60px', background: 'rgba(255,255,255,0.2)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', backdropFilter: 'blur(5px)' }}>
                  <i className="fa-solid fa-file-signature"></i>
                </div>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1 }}>50k+</div>
                  <div style={{ opacity: 0.9, marginTop: '0.5rem', fontSize: '1.1rem' }}>Documents Processed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-padding" style={{ background: 'white', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at 100% 100%, rgba(249,115,22,0.05) 0%, transparent 50%)', pointerEvents: 'none' }}></div>
        <div className="container">
          <div className="text-center fade-in appear" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Government & Global <span style={{ color: '#1A56DB' }}>Certifications</span></h2>
            <p style={{ color: '#64748B', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>We don't just promise trust, we prove it. Explore our official authorizations and professional certificates.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
            {/* E-Mitra Certificate */}
            <div className="fade-in appear certificate-card" style={{ background: 'white', padding: '1.5rem', borderRadius: '20px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', height: '100%', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '15px', right: '15px', background: '#FEF3C7', color: '#D97706', padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold' }}><i className="fa-solid fa-shield-halved"></i> Govt. Approved</div>
              <div style={{ height: '220px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F8FAFC', borderRadius: '12px', overflow: 'hidden', padding: '1rem', marginTop: '1rem' }}>
                <img src="/e-mitra_certificate.jpeg" alt="E-Mitra Certificate" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ padding: '1.5rem 0.5rem 0.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#1E293B', marginBottom: '0.5rem' }}>Authorized e-Mitra</h3>
                <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.5 }}>Official authorization from the Government of Rajasthan for providing digital citizen services.</p>
              </div>
            </div>
            
            {/* New Tally Certificate */}
            <div className="fade-in appear certificate-card" style={{ background: 'white', padding: '1.5rem', borderRadius: '20px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', height: '100%', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '15px', right: '15px', background: '#DBEAFE', color: '#1D4ED8', padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold' }}><i className="fa-solid fa-medal"></i> Professional</div>
              <div style={{ height: '220px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F8FAFC', borderRadius: '12px', overflow: 'hidden', padding: '1rem', marginTop: '1rem' }}>
                <img src="/New_telly_certificate.jpeg" alt="Tally Certificate" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ padding: '1.5rem 0.5rem 0.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#1E293B', marginBottom: '0.5rem' }}>Tally Certified Center</h3>
                <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.5 }}>Certified expertise in Tally ERP 9 and Prime for professional accounting and taxation services.</p>
              </div>
            </div>

            {/* Data Analytics Certificate */}
            <div className="fade-in appear certificate-card" style={{ background: 'white', padding: '1.5rem', borderRadius: '20px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', height: '100%', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '15px', right: '15px', background: '#E0E7FF', color: '#4338CA', padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold' }}><i className="fa-solid fa-chart-pie"></i> Specialized</div>
              <div style={{ height: '220px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F8FAFC', borderRadius: '12px', overflow: 'hidden', padding: '1rem', marginTop: '1rem' }}>
                <img src="/data_analitices_certificate.jpeg" alt="Data Analytics Certificate" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ padding: '1.5rem 0.5rem 0.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#1E293B', marginBottom: '0.5rem' }}>Data Analytics Certified</h3>
                <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: 1.5 }}>Advanced certification in data processing and analytics to ensure accurate document handling.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding" style={{ background: '#0F172A', color: 'white' }}>
        <div className="container">
          <div className="text-center fade-in appear" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '1rem' }}>What Our <span style={{ color: '#F97316' }}>Clients Say</span></h2>
            <p style={{ color: '#94A3B8', fontSize: '1.1rem' }}>Real feedback from our local community members.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div className="fade-in appear" style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
              <div style={{ color: '#FBBF24', marginBottom: '1rem', fontSize: '1.2rem' }}>
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
              </div>
              <p style={{ fontStyle: 'italic', color: '#CBD5E1', marginBottom: '1.5rem', lineHeight: 1.7 }}>"Mera pan card and aadhar card ka link yahan se karwaya tha. Bahut hi fast aur badiya service thi. Highly recommended for any e-mitra work!"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', background: '#3B82F6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>R</div>
                <div>
                  <h4 style={{ margin: 0, color: 'white' }}>Rahul Sharma</h4>
                  <span style={{ color: '#64748B', fontSize: '0.85rem' }}>Local Resident</span>
                </div>
              </div>
            </div>

            <div className="fade-in appear" style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
              <div style={{ color: '#FBBF24', marginBottom: '1rem', fontSize: '1.2rem' }}>
                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
              </div>
              <p style={{ fontStyle: 'italic', color: '#CBD5E1', marginBottom: '1.5rem', lineHeight: 1.7 }}>"Best e-mitra in our area. Sir is very knowledgeable and helped me with my scholarship forms without any errors. Great experience!"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', background: '#F97316', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>P</div>
                <div>
                  <h4 style={{ margin: 0, color: 'white' }}>Priya Singh</h4>
                  <span style={{ color: '#64748B', fontSize: '0.85rem' }}>College Student</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
