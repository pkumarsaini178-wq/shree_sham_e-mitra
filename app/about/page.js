export default function About() {
  return (
    <>
      <header className="page-header">
        <div className="container fade-in appear">
          <h1>About Us</h1>
          <p>Learn more about Shree Shyam e-Mitra and our mission.</p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          <div className="about-grid">
            <div className="about-img fade-in-left appear">
              <div className="about-img-placeholder">
                <i className="fa-solid fa-users"></i>
              </div>
            </div>
            <div className="about-content fade-in-right appear">
              <h2>Aapki Seva, Hamaari Zimmedaari</h2>
              <div className="mission">
                "Hamara lakshya hai sarkar ki har digital suvidha ko aam aadmi tak saralta aur tezi se pahunchana."
              </div>
              <p>Shree Shyam e-Mitra pichle kai saalon se Ajmer aur Beawar kshetr mein logo ko reliable digital aur government services pradan kar raha hai. Hum samajhte hain ki aaj ke digital daur mein har kisi ka e-Mitra se juda hona kitna zaroori hai.</p>
              
              <div className="about-features">
                <div className="feature-item">
                  <div className="feature-icon"><i className="fa-solid fa-check"></i></div>
                  <span>100% Secure & Government Authorized</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"><i className="fa-solid fa-bolt"></i></div>
                  <span>Fast Processing of Applications</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"><i className="fa-solid fa-headset"></i></div>
                  <span>Excellent Customer Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
