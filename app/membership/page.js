import Link from 'next/link';

export default function Membership() {
  return (
    <>
      <header className="page-header m-hero">
        <div className="container m-hero-content fade-in appear">
          <div className="m-hero-badge"><i className="fa-solid fa-crown"></i> Exclusive Benefits</div>
          <h1>Membership <span className="highlight">Plans</span></h1>
          <p className="m-hero-sub">Save more on every digital service with our premium membership plans tailored for your family's needs.</p>
        </div>
      </header>
      <section className="m-pricing">
        <div className="container">
          <div className="m-plans-top">
            <div className="m-card fade-in appear">
              <div className="m-card-top m-card-top--silver">
                <span className="m-card-badge m-badge-silver">SILVER</span>
                <div className="m-card-title">Basic Plan</div>
                <div className="m-card-price"><span className="m-price-amount">₹499</span><span className="m-price-period">/year</span></div>
              </div>
              <div className="m-card-body">
                <ul className="m-feature-list">
                  <li><i className="fa-solid fa-check"></i> 5 Free Documents</li>
                  <li><i className="fa-solid fa-check"></i> Standard Support</li>
                </ul>
              </div>
            </div>
            <div className="m-card m-card--featured fade-in appear">
              <div className="m-card-top m-card-top--gold">
                <span className="m-card-badge m-badge-gold">GOLD</span>
                <div className="m-card-title">Family Plan</div>
                <div className="m-card-price"><span className="m-price-amount">₹999</span><span className="m-price-period">/year</span></div>
              </div>
              <div className="m-card-body">
                <ul className="m-feature-list">
                  <li><i className="fa-solid fa-check"></i> 15 Free Documents</li>
                  <li><i className="fa-solid fa-check"></i> Priority Support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
