export default function Portfolio() {
  return (
    <>
      <header className="page-header">
        <div className="container fade-in appear">
          <h1>Our Portfolio</h1>
          <p>A showcase of our trusted services and happy customers.</p>
        </div>
      </header>
      <section className="section-padding bento-wrapper">
        <div className="container">
          <div className="bento-grid">
            <div className="bento-item bento-hero fade-in appear">
              <div className="b-avatar"><i className="fa-solid fa-trophy"></i></div>
              <div className="b-hero-text">
                <div className="b-status">
                  <span className="status-dot"></span> Active since 2006
                </div>
                <h2>Shree Shyam e-Mitra</h2>
                <p>Delivering digital excellence and government services to thousands of satisfied citizens in Ajmer.</p>
              </div>
            </div>
            
            <div className="bento-item bento-stat fade-in appear">
              <i className="fa-solid fa-users stat-icon"></i>
              <div className="stat-number">10k+</div>
              <p>Happy Customers</p>
            </div>
            
            <div className="bento-item bento-stat bento-stat-alt fade-in appear">
              <i className="fa-solid fa-file-signature stat-icon"></i>
              <div className="stat-number">50k+</div>
              <p>Documents Processed</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
