export default function Services() {
  return (
    <>
      <header className="page-header">
        <div className="container fade-in appear">
          <h1>Our Services</h1>
          <p>Comprehensive digital solutions for all your needs.</p>
        </div>
      </header>
      <section className="section-padding">
        <div className="container">
          <div className="services-grid">
            <div className="service-card fade-in appear">
              <div className="service-icon"><i className="fa-solid fa-file-invoice"></i></div>
              <h3>Certificates</h3>
              <p>Birth, Death, Income, Caste, and Domicile certificates.</p>
            </div>
            <div className="service-card fade-in appear">
              <div className="service-icon"><i className="fa-solid fa-money-bill-transfer"></i></div>
              <h3>Bill Payments</h3>
              <p>Electricity, water, and utility bills.</p>
            </div>
            <div className="service-card fade-in appear">
              <div className="service-icon"><i className="fa-solid fa-passport"></i></div>
              <h3>Passport & License</h3>
              <p>Passport applications and Driving License forms.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
