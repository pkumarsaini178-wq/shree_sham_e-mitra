export default function Vacancy() {
  const channels = [
    {
      title: "Government Jobs (Sarkari Naukri)",
      description: "Get instant alerts for all state and central govt job openings, forms, and deadlines.",
      link: "https://whatsapp.com/channel/0029Va4UN8U29757sLNagO25",
      icon: "fa-building-columns",
      color: "#10B981"
    },
    {
      title: "Private Jobs & Placements",
      description: "Daily updates on private company hirings, walk-in interviews, and placements in Rajasthan.",
      link: "https://www.whatsapp.com/channel/0029VakBshkEFeXf6jZpEb2G",
      icon: "fa-briefcase",
      color: "#3B82F6"
    },
    {
      title: "Shree Shyam e-Mitra Alerts (Any Govt Work)",
      description: "Get updates for all e-Mitra services, admit cards, results, and other important government work.",
      link: "https://chat.whatsapp.com/GBimObzmNG3G3xig7wa0ge",
      icon: "fa-bell",
      color: "#F59E0B"
    }
  ];

  return (
    <>
      <header className="page-header" style={{ background: 'var(--primary-dark)', padding: '4rem 0', textAlign: 'center' }}>
        <div className="container fade-in appear">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(37, 211, 102, 0.2)', color: '#25D366', padding: '0.5rem 1rem', borderRadius: '50px', fontWeight: 'bold', marginBottom: '1rem' }}>
            <i className="fa-brands fa-whatsapp"></i> Join Our WhatsApp Groups
          </div>
          <h1>Job Vacancies & <span className="highlight">Alerts</span></h1>
          <p style={{ color: '#94A3B8', marginTop: '1rem', maxWidth: '600px', margin: '1rem auto' }}>
            Stay updated with the latest government jobs, private openings, admit cards, and admission alerts directly on your phone.
          </p>
        </div>
      </header>

      <section className="section-padding" style={{ background: '#F8FAFC' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {channels.map((channel, index) => (
              <div key={index} className="tilt-card fade-in appear" style={{ background: 'white', borderRadius: '15px', padding: '2rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', borderTop: `4px solid ${channel.color}` }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '12px', background: `${channel.color}15`, color: channel.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                  <i className={`fa-solid ${channel.icon}`}></i>
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#1E293B' }}>{channel.title}</h3>
                <p style={{ color: '#64748B', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: '1.6' }}>{channel.description}</p>
                <a href={channel.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#25D366', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: '600', textDecoration: 'none', transition: 'all 0.3s ease' }}>
                  <i className="fa-brands fa-whatsapp" style={{ fontSize: '1.2rem' }}></i> Join Group
                </a>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '4rem', textAlign: 'center', padding: '2rem', background: 'white', borderRadius: '15px', border: '1px dashed #CBD5E1' }} className="fade-in appear">
            <h3 style={{ color: '#1E293B', marginBottom: '0.5rem' }}>Want alerts for a specific job?</h3>
            <p style={{ color: '#64748B', marginBottom: '1rem' }}>Send us a direct message on WhatsApp with your query.</p>
            <a href="https://wa.me/916377507537" target="_blank" rel="noopener noreferrer" className="btn btn-primary pulse-glow">
              <i className="fa-solid fa-message"></i> Message Us Directly
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
