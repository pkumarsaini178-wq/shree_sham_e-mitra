"use client";
import React from 'react';
import Link from 'next/link';

export default function Vacancy() {
  return (
    <>
      <header className="v-page-header">
        <div className="container">
          <div className="v-header-content fade-in appear">
            <div className="v-badge">
              <i className="fa-solid fa-briefcase"></i>
              <span>Latest Vacancies</span>
            </div>
            <h1>Nauki aur <span className="highlight">Vacancy Updates</span></h1>
            <p className="v-header-sub">Sabse nayi sarkari aur private naukriyon ki jaankari paane ke liye hamaare WhatsApp channel se judein.</p>
            <a href="https://whatsapp.com/channel/0029Va4UN8U29757sLNagO25" target="_blank" rel="noopener noreferrer" className="btn btn-accent btn-lg pulse-glow">
              <i className="fa-brands fa-whatsapp"></i> Join WhatsApp Channel
            </a>
          </div>
        </div>
      </header>

      <section className="v-channel-bar">
        <div className="container">
          <div className="v-channel-card fade-in appear tilt-card">
            <div className="v-channel-icon"><i className="fa-brands fa-whatsapp"></i></div>
            <div className="v-channel-info">
              <h3>Humara WhatsApp Channel</h3>
              <p>Har roz nayi vacancy notifications direct aapke phone par. Aaj hi join karein!</p>
            </div>
            <a href="https://whatsapp.com/channel/0029Va4UN8U29757sLNagO25" target="_blank" rel="noopener noreferrer" className="btn btn-accent pulse-glow">
              <i className="fa-brands fa-whatsapp"></i> Join Now
            </a>
          </div>
        </div>
      </section>

      <section className="v-list-section section-padding">
        <div className="container">
          <div className="text-center fade-in-up appear">
            <h2 className="section-title">Recent Vacancy Notifications</h2>
            <p className="section-subtitle">Yahan par aapko milengi sabhi latest vacancy updates jo hamaare WhatsApp channel par share ki gayi hain.</p>
          </div>

          <div className="v-feed">
            <div className="v-post fade-in-up appear tilt-card">
              <div className="v-post-head">
                <div className="v-post-avatar"><i className="fa-brands fa-whatsapp"></i></div>
                <div className="v-post-meta">
                  <span className="v-post-channel">Shree Shyam e-Mitra Vacancy</span>
                  <span className="v-post-date"><i className="fa-regular fa-clock"></i> 2 hours ago</span>
                </div>
              </div>
              <div className="v-post-body">
                <div className="v-post-badge">Sarkari Naukri</div>
                <h3>Rajasthan Police Constable Bharti 2026</h3>
                <p>Rajasthan Police ne nayi constable bharti ke liye notification jari kiya hai. Total posts: 8500. Yogyata: 12th pass. Aavedan ki aakhri tarikh: 15 July 2026.</p>
                <div className="v-post-tags">
                  <span><i className="fa-solid fa-graduation-cap"></i> 12th Pass</span>
                  <span><i className="fa-solid fa-location-dot"></i> Rajasthan</span>
                  <span><i className="fa-solid fa-file-lines"></i> 8500 Posts</span>
                </div>
                <div className="v-post-actions">
                  <a href="#" className="btn btn-sm btn-primary" onClick={(e) => e.preventDefault()}>Apply Link Available</a>
                  <a href="https://whatsapp.com/channel/0029Va4UN8U29757sLNagO25" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline"><i className="fa-brands fa-whatsapp"></i> Channel Par Dekhein</a>
                </div>
              </div>
            </div>

            <div className="v-post fade-in-up appear tilt-card">
              <div className="v-post-head">
                <div className="v-post-avatar"><i className="fa-brands fa-whatsapp"></i></div>
                <div className="v-post-meta">
                  <span className="v-post-channel">Shree Shyam e-Mitra Vacancy</span>
                  <span className="v-post-date"><i className="fa-regular fa-clock"></i> 1 day ago</span>
                </div>
              </div>
              <div className="v-post-body">
                <div className="v-post-badge">Private Job</div>
                <h3>Bank of Baroda - SO & Management Trainee</h3>
                <p>Bank of Baroda ne Specialist Officers (SO) aur Management Trainee ke liye bharti nikali hai. Graduates ke liye badhiya mauka. Online aavedan shuru.</p>
                <div className="v-post-tags">
                  <span><i className="fa-solid fa-graduation-cap"></i> Graduate</span>
                  <span><i className="fa-solid fa-calendar"></i> Last Date: 20 July</span>
                  <span><i className="fa-solid fa-building"></i> Bank of Baroda</span>
                </div>
                <div className="v-post-actions">
                  <a href="#" className="btn btn-sm btn-primary" onClick={(e) => e.preventDefault()}>Apply Now</a>
                  <a href="https://whatsapp.com/channel/0029Va4UN8U29757sLNagO25" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline"><i className="fa-brands fa-whatsapp"></i> Channel Par Dekhein</a>
                </div>
              </div>
            </div>

            <div className="v-post fade-in-up appear tilt-card">
              <div className="v-post-head">
                <div className="v-post-avatar"><i className="fa-brands fa-whatsapp"></i></div>
                <div className="v-post-meta">
                  <span className="v-post-channel">Shree Shyam e-Mitra Vacancy</span>
                  <span className="v-post-date"><i className="fa-regular fa-clock"></i> 3 days ago</span>
                </div>
              </div>
              <div className="v-post-body">
                <div className="v-post-badge">Sarkari Naukri</div>
                <h3>RPSC Ras/RTS Pre Exam 2026</h3>
                <p>RPSC dwara Rajasthan Administrative Services (RAS) ke liye preliminary exam ka notification. Yogyata: Graduate. Aavedan ki aakhri tarikh 30 June 2026. Exam August mein.</p>
                <div className="v-post-tags">
                  <span><i className="fa-solid fa-graduation-cap"></i> Graduate</span>
                  <span><i className="fa-solid fa-location-dot"></i> Rajasthan</span>
                  <span><i className="fa-solid fa-file-lines"></i> RPSC</span>
                </div>
                <div className="v-post-actions">
                  <a href="#" className="btn btn-sm btn-primary" onClick={(e) => e.preventDefault()}>Apply Link Available</a>
                  <a href="https://whatsapp.com/channel/0029Va4UN8U29757sLNagO25" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline"><i className="fa-brands fa-whatsapp"></i> Channel Par Dekhein</a>
                </div>
              </div>
            </div>

            <div className="v-post fade-in-up appear tilt-card">
              <div className="v-post-head">
                <div className="v-post-avatar"><i className="fa-brands fa-whatsapp"></i></div>
                <div className="v-post-meta">
                  <span className="v-post-channel">Shree Shyam e-Mitra Vacancy</span>
                  <span className="v-post-date"><i className="fa-regular fa-clock"></i> 5 days ago</span>
                </div>
              </div>
              <div className="v-post-body">
                <div className="v-post-badge">Private Job</div>
                <h3>TCS Off Campus Drive 2026</h3>
                <p>TCS ne freshers ke liye off campus drive nikala hai. Yogyata: B.E/B.Tech/MCA/M.Sc. Selected candidates ko 3.5 - 7 LPA tak salary.</p>
                <div className="v-post-tags">
                  <span><i className="fa-solid fa-graduation-cap"></i> B.E/B.Tech</span>
                  <span><i class="fa-solid fa-indian-rupee-sign"></i> 3.5-7 LPA</span>
                  <span><i className="fa-solid fa-building"></i> TCS</span>
                </div>
                <div className="v-post-actions">
                  <a href="#" className="btn btn-sm btn-primary" onClick={(e) => e.preventDefault()}>Apply Now</a>
                  <a href="https://whatsapp.com/channel/0029Va4UN8U29757sLNagO25" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline"><i className="fa-brands fa-whatsapp"></i> Channel Par Dekhein</a>
                </div>
              </div>
            </div>

            <div className="v-post fade-in-up appear tilt-card">
              <div className="v-post-head">
                <div className="v-post-avatar"><i className="fa-brands fa-whatsapp"></i></div>
                <div className="v-post-meta">
                  <span className="v-post-channel">Shree Shyam e-Mitra Vacancy</span>
                  <span className="v-post-date"><i className="fa-regular fa-clock"></i> 1 week ago</span>
                </div>
              </div>
              <div className="v-post-body">
                <div className="v-post-badge">Sarkari Naukri</div>
                <h3>Rajasthan Patwari Bharti 2026</h3>
                <p>Rajasthan Revenue Department ne Patwari ke liye bharti nikali hai. Total posts: 5200. Yogyata: Graduate with RS-CIT. Online aavedan jaldi shuru hoga.</p>
                <div className="v-post-tags">
                  <span><i className="fa-solid fa-graduation-cap"></i> Graduate</span>
                  <span><i className="fa-solid fa-location-dot"></i> Rajasthan</span>
                  <span><i className="fa-solid fa-file-lines"></i> 5200 Posts</span>
                </div>
                <div className="v-post-actions">
                  <a href="#" className="btn btn-sm btn-primary" onClick={(e) => e.preventDefault()}>Notification PDF</a>
                  <a href="https://whatsapp.com/channel/0029Va4UN8U29757sLNagO25" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline"><i className="fa-brands fa-whatsapp"></i> Channel Par Dekhein</a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center fade-in appear" style={{ marginTop: '3rem' }}>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Aur bhi vacancies ke liye hamaare WhatsApp channel se jude rahein.</p>
            <a href="https://whatsapp.com/channel/0029Va4UN8U29757sLNagO25" target="_blank" rel="noopener noreferrer" className="btn btn-accent btn-lg pulse-glow">
              <i className="fa-brands fa-whatsapp"></i> Join WhatsApp Channel
            </a>
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
