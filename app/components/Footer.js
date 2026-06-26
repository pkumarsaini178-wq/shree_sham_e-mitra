import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <a href="https://wa.me/916377507537" target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Chat on WhatsApp">
        <i className="fa-brands fa-whatsapp"></i>
      </a>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <Link href="/" className="logo" style={{ color: 'white', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <i className="fa-solid fa-desktop"></i> Shree Shyam <span className="text-accent">e-Mitra</span>
              </Link>
              <p>Aapki Seva, Hamaari Zimmedaari. We are dedicated to bringing digital India to your local community.</p>
            </div>
            <div className="footer-col">
              <h3>Quick Links</h3>
              <div className="footer-links">
                <Link href="/">Home</Link>
                <Link href="/services">Services</Link>
                <Link href="/membership">Membership</Link>
                <Link href="/vacancy">Vacancy</Link>
                <Link href="/portfolio">Portfolio</Link>
                <Link href="/about">About Us</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>
            <div className="footer-col">
              <h3>Contact Info</h3>
              <div className="footer-links">
                <a href="#"><i className="fa-solid fa-location-dot" style={{ width: '20px' }}></i> Ajmer, Rajasthan</a>
                <a href="tel:+916377507537"><i className="fa-solid fa-phone" style={{ width: '20px' }}></i> +91 6377507537</a>
                <a href="mailto:jaishreeshyamemitra2006@gmail.com"><i className="fa-solid fa-envelope" style={{ width: '20px' }}></i> jaishreeshyamemitra2006@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Shree Shyam e-Mitra. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
