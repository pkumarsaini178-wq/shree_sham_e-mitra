'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      
      if (data.success) {
        setStatus({ type: 'success', message: data.message });
        setFormData({ name: '', phone: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <header className="page-header">
        <div className="container fade-in appear">
          <h1>Contact Us</h1>
          <p>We're here to help. Get in touch with us today.</p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info fade-in appear">
              <h2>Get in Touch</h2>
              <p className="text-light" style={{ marginBottom: '1rem' }}>Aapke kisi bhi sawaal ya samasya ke liye humse sampark karein.</p>

              <div className="contact-item tilt-card">
                <div className="contact-item-icon"><i className="fa-solid fa-location-dot"></i></div>
                <div>
                  <h4>Address</h4>
                  <p>257, Ajmer Road Beawar<br/>Daya Nagar, Beawar, Rajasthan 305901</p>
                </div>
              </div>

              <div className="contact-item tilt-card">
                <div className="contact-item-icon"><i className="fa-solid fa-phone"></i></div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 6377507537</p>
                </div>
              </div>

              <div className="contact-item tilt-card">
                <div className="contact-item-icon"><i className="fa-solid fa-envelope"></i></div>
                <div>
                  <h4>Email</h4>
                  <p>jaishreeshyamemitra2006@gmail.com</p>
                </div>
              </div>

              <div className="contact-item tilt-card">
                <div className="contact-item-icon"><i className="fa-solid fa-clock"></i></div>
                <div>
                  <h4>Business Hours</h4>
                  <p>Mon-Sat: 9:00 AM - 7:00 PM<br/>Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="contact-form fade-in-right appear">
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Send us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Aapka Naam (Name)</label>
                  <input type="text" id="name" className="form-control" placeholder="Enter your name" required 
                    value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input type="tel" id="phone" className="form-control" placeholder="Enter your mobile number" required 
                    value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message / Query</label>
                  <textarea id="message" className="form-control" placeholder="How can we help you?" required
                    value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
                </div>
                <button type="submit" className="btn btn-primary pulse-glow" style={{ width: '100%' }} disabled={isLoading}>
                  {isLoading ? <span><i className="fa-solid fa-spinner fa-spin"></i> Sending...</span> : <span>Send Message</span>}
                </button>
              </form>
              {status.message && (
                <div className={`form-status form-status--${status.type}`} style={{ marginTop: '1rem' }}>
                  {status.message}
                </div>
              )}
            </div>
          </div>

          <div className="map-container fade-in appear" style={{ marginTop: '3rem' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.3018!2d74.3255553!3d26.1123813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396970a66ed9d779%3A0xaa37d0d7b59cab4!2s257%2C%20Ajmer%20Rd%20Beawar%2C%20Daya%20Nagar%2C%20Munshi%20Colony%2C%20Beawar%2C%20Rajasthan%20305901!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shree Shyam e-Mitra Location">
            </iframe>
          </div>
        </div>
      </section>
    </>
  );
}
