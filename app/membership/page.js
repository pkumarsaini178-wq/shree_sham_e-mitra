"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Membership() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  const faqs = [
    { question: "Membership lene ke kya fayde hain?", answer: "Membership lene par aapko har service ke liye alag se fee nahi deni padti. Ek baar membership lo aur saari suvidhaon ka unlimited upyog karein. Jitna bada plan, utni zyada bachat!" },
    { question: "Kya main plan upgrade kar sakta hoon?", answer: "Haan, aap kisi bhi samay apna plan upgrade kar sakte hain. Sirf price ka difference dena hoga. Jaise 1 Month se 6 Month ya 1 Year plan mein upgrade possible hai." },
    { question: "Kya membership poori family ke liye valid hai?", answer: "Haan, aapki membership aapke parivar ke sabhi sadasyon ke liye valid hai. Ek hi membership se ghar ke sabhi log seva ka fayda utha sakte hain." },
    { question: "Kya membership refundable hai?", answer: "Membership ek baar activate hone ke baad non-refundable hai. Lekin agar aap kisi karan se service use nahi kar paate hain toh hum aapki membership ko next cycle ke liye extend kar sakte hain." },
    { question: "Kya main kisi bhi din membership le sakta hoon?", answer: "Bilkul! Aap kisi bhi din Shree Shyam e-Mitra aakar ya phone karke membership le sakte hain. Kisi bhi tarah ki online ya offline suvidha uplabdh hai. Aaj hi sampark karein!" },
  ];

  return (
    <>
      {/* ==================== HERO ==================== */}
      <header className="m-hero">
        <div className="m-hero-particles"></div>
        <div className="m-hero-shapes">
          <div className="m-shape m-shape-1"></div>
          <div className="m-shape m-shape-2"></div>
          <div className="m-shape m-shape-3"></div>
        </div>
        <div className="container">
          <div className="m-hero-content">
            <div className="m-hero-badge">
              <i className="fa-solid fa-crown"></i>
              <span>Membership Plans 2026</span>
            </div>
            <h1>Apni <span className="highlight">Membership</span> Chunein</h1>
            <p className="m-hero-sub">Ek baar membership lo, saari suvidhaon ka unlimited upyog karein! Jitna bada plan, utni zyada bachat.</p>
            <div className="m-hero-stats">
              <div className="m-hero-stat">
                <span className="m-hero-stat-num">10k+</span>
                <span className="m-hero-stat-label">Happy Members</span>
              </div>
              <div className="m-hero-stat">
                <span className="m-hero-stat-num">50+</span>
                <span className="m-hero-stat-label">Services</span>
              </div>
              <div className="m-hero-stat">
                <span className="m-hero-stat-num">&#8377;--</span>
                <span className="m-hero-stat-label">Max Savings</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ==================== HOW IT WORKS ==================== */}
      <section className="m-how">
        <div className="container">
          <div className="text-center fade-in appear">
            <h2 className="section-title">Kaise Kaam Karta Hai</h2>
            <p className="section-subtitle">Sirf 3 aasan steps mein apni membership shuru karein</p>
          </div>
          <div className="m-steps">
            <div className="m-step fade-in appear">
              <div className="m-step-num">1</div>
              <div className="m-step-icon"><i className="fa-solid fa-hand-pointer"></i></div>
              <h4>Plan Chunein</h4>
              <p>Apni zaroorat ke hisaab se sahi membership plan select karein</p>
            </div>
            <div className="m-step-connector"></div>
            <div className="m-step fade-in appear" style={{ transitionDelay: '0.15s' }}>
              <div className="m-step-num">2</div>
              <div className="m-step-icon"><i className="fa-solid fa-file-pen"></i></div>
              <h4>Registration Karein</h4>
              <p>Apna registration form bharein aur basic details submit karein</p>
            </div>
            <div className="m-step-connector"></div>
            <div className="m-step fade-in appear" style={{ transitionDelay: '0.3s' }}>
              <div className="m-step-num">3</div>
              <div className="m-step-icon"><i className="fa-solid fa-circle-check"></i></div>
              <h4>Services Ka Luth Uthayein</h4>
              <p>Membership active hone ke baad saari suvidhaon ka faayda uthayein</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PRICING PLANS ==================== */}
      <section className="m-pricing" id="plans">
        <div className="container">
          <div className="text-center fade-in appear">
            <h2 className="section-title">Membership Plans</h2>
            <p className="section-subtitle">Har plan mein aapko milengi alag-alag services. Jitna bada plan, utni zyada bachat!</p>
          </div>

          {/* TOP ROW: 3 main plans */}
          <div className="m-plans-top">
            {/* 1 Month */}
            <div className="m-card fade-in appear tilt-card">
              <div className="m-card-top m-card-top--basic">
                <span className="m-card-badge">Basic</span>
                <div className="m-card-icon-wrap">
                  <div className="m-card-icon"><i className="fa-solid fa-calendar-day"></i></div>
                </div>
                <h3 className="m-card-title">1 Month</h3>
                <div className="m-card-price"><span className="m-price-amount">--</span></div>
                <p className="m-card-desc">Try karein humari limited services ek mahine ke liye</p>
              </div>
              <div className="m-card-body">
                <div className="m-card-feature-group">
                  <span className="m-feature-label">Included Services</span>
                  <ul className="m-feature-list">
                    <li><i className="fa-solid fa-check"></i> PAN Card Apply/Correction</li>
                    <li><i className="fa-solid fa-check"></i> Birth/Death Certificate</li>
                    <li><i className="fa-solid fa-check"></i> Bill Payment & Recharge</li>
                    <li><i className="fa-solid fa-check"></i> 2 Traffic Challan Payment</li>
                  </ul>
                </div>
                <div className="m-card-feature-group m-card-excluded">
                  <span className="m-feature-label">Not Included</span>
                  <ul className="m-feature-list">
                    <li><i className="fa-solid fa-xmark"></i> Passport / Driving Licence</li>
                    <li><i className="fa-solid fa-xmark"></i> Property Tax / Revenue</li>
                    <li><i className="fa-solid fa-xmark"></i> Court / GST / ITR</li>
                  </ul>
                </div>
              </div>
              <div className="m-card-footer">
                <Link href="/contact" className="btn btn-outline m-card-btn pulse-glow">Contact for Price</Link>
              </div>
            </div>

            {/* 3 Months */}
            <div className="m-card fade-in appear tilt-card" style={{ transitionDelay: '0.1s' }}>
              <div className="m-card-top m-card-top--silver">
                <span className="m-card-badge m-badge-silver">Silver</span>
                <div className="m-card-icon-wrap">
                  <div className="m-card-icon" style={{ background: 'linear-gradient(135deg, #F1F5F9, #E2E8F0)', color: '#475569' }}><i className="fa-solid fa-calendar-week"></i></div>
                </div>
                <h3 className="m-card-title">3 Months</h3>
                <div className="m-card-price"><span className="m-price-amount">--</span></div>
                <p className="m-card-desc">Teen mahine ka saath — aur bhi zyada suvidha</p>
              </div>
              <div className="m-card-body">
                <div className="m-card-feature-group">
                  <span className="m-feature-label">Included Services</span>
                  <ul className="m-feature-list">
                    <li><i className="fa-solid fa-check"></i> Sabhi 1 Month ki services</li>
                    <li><i className="fa-solid fa-check"></i> Passport Apply (1 baar)</li>
                    <li><i className="fa-solid fa-check"></i> Driving Licence (Learner)</li>
                    <li><i className="fa-solid fa-check"></i> 5 Traffic Challan Payment</li>
                    <li><i className="fa-solid fa-check"></i> Income/Caste/Domicile</li>
                    <li><i className="fa-solid fa-check"></i> Water Bill / Electricity Bill</li>
                  </ul>
                </div>
                <div className="m-card-feature-group m-card-excluded">
                  <span className="m-feature-label">Not Included</span>
                  <ul className="m-feature-list">
                    <li><i className="fa-solid fa-xmark"></i> Property Tax / Court Challan</li>
                    <li><i className="fa-solid fa-xmark"></i> GST / ITR / Scheme Reg.</li>
                  </ul>
                </div>
              </div>
              <div className="m-card-footer">
                <Link href="/contact" className="btn btn-outline m-card-btn pulse-glow">Contact for Price</Link>
              </div>
            </div>

            {/* 6 Months (FEATURED) */}
            <div className="m-card m-card--featured fade-in appear tilt-card" style={{ transitionDelay: '0.2s' }}>
              <div className="m-card-top m-card-top--gold">
                <span className="m-card-badge m-badge-gold">Gold <i className="fa-solid fa-star" style={{ fontSize: '0.6rem' }}></i></span>
                <div className="m-card-icon-wrap">
                  <div className="m-card-icon" style={{ background: 'linear-gradient(135deg, #FEF3C7, #FDE68A)', color: '#D97706' }}><i className="fa-solid fa-crown"></i></div>
                </div>
                <h3 className="m-card-title">6 Months</h3>
                <div className="m-card-price"><span className="m-price-amount">--</span> <span className="m-price-period">/6mo</span></div>
                <p className="m-card-desc">Sabse popular plan! Aadhi saal ki unlimited services</p>
              </div>
              <div className="m-card-body">
                <div className="m-card-feature-group">
                  <span className="m-feature-label">Included Services</span>
                  <ul className="m-feature-list">
                    <li><i className="fa-solid fa-check"></i> Sabhi 3 Month ki services</li>
                    <li><i className="fa-solid fa-check"></i> Property Tax / Revenue Challan</li>
                    <li><i className="fa-solid fa-check"></i> Court Challan Filing</li>
                    <li><i className="fa-solid fa-check"></i> 10 Traffic Challan Payment</li>
                    <li><i className="fa-solid fa-check"></i> Govt Scheme Registration</li>
                    <li><i className="fa-solid fa-check"></i> RC Transfer / Vehicle Reg.</li>
                    <li><i className="fa-solid fa-check"></i> Unlimited Certificates</li>
                  </ul>
                </div>
                <div className="m-card-feature-group m-card-excluded">
                  <span className="m-feature-label">Not Included</span>
                  <ul className="m-feature-list">
                    <li><i className="fa-solid fa-xmark"></i> GST / Professional Tax</li>
                    <li><i className="fa-solid fa-xmark"></i> Land Conversion</li>
                  </ul>
                </div>
              </div>
              <div className="m-card-footer">
                <Link href="/contact" className="btn btn-accent m-card-btn pulse-glow"><i className="fa-solid fa-fire"></i> Contact for Price</Link>
              </div>
            </div>
          </div>

          {/* BOTTOM ROW: 2 plans */}
          <div className="m-plans-bottom">
            {/* 9 Months */}
            <div className="m-card m-card--half fade-in appear tilt-card" style={{ transitionDelay: '0.3s' }}>
              <div className="m-card-top m-card-top--platinum">
                <span className="m-card-badge m-badge-platinum">Platinum</span>
                <div className="m-card-icon-wrap">
                  <div className="m-card-icon" style={{ background: 'linear-gradient(135deg, #E0E7FF, #C7D2FE)', color: '#4F46E5' }}><i className="fa-solid fa-gem"></i></div>
                </div>
                <h3 className="m-card-title">9 Months</h3>
                <div className="m-card-price"><span className="m-price-amount">--</span> <span className="m-price-period">/9mo</span></div>
                <p className="m-card-desc">Teen chauthai saal ki super savings ke saath</p>
              </div>
              <div className="m-card-body">
                <div className="m-card-feature-group">
                  <span className="m-feature-label">Included Services</span>
                  <ul className="m-feature-list">
                    <li><i className="fa-solid fa-check"></i> Sabhi 6 Month ki services</li>
                    <li><i className="fa-solid fa-check"></i> GST Challan (PMT-06)</li>
                    <li><i className="fa-solid fa-check"></i> Professional Tax Payment</li>
                    <li><i className="fa-solid fa-check"></i> 20 Traffic Challan Payment</li>
                    <li><i className="fa-solid fa-check"></i> Passport Renewal</li>
                    <li><i className="fa-solid fa-check"></i> Driving Licence (Permanent)</li>
                    <li><i className="fa-solid fa-check"></i> Land Conversion</li>
                    <li><i className="fa-solid fa-check"></i> Hospital / Medical Certificate</li>
                  </ul>
                </div>
              </div>
              <div className="m-card-footer">
                <Link href="/contact" className="btn btn-outline m-card-btn pulse-glow">Contact for Price</Link>
              </div>
            </div>

            {/* 1 Year */}
            <div className="m-card m-card--half fade-in appear tilt-card" style={{ transitionDelay: '0.4s' }}>
              <div className="m-card-top m-card-top--diamond">
                <span className="m-card-badge m-badge-diamond">Diamond <i className="fa-solid fa-gem" style={{ fontSize: '0.6rem' }}></i></span>
                <div className="m-card-icon-wrap">
                  <div className="m-card-icon" style={{ background: 'linear-gradient(135deg, #FEE2E2, #FECACA)', color: '#DC2626' }}><i className="fa-solid fa-star"></i></div>
                </div>
                <h3 className="m-card-title">1 Year</h3>
                <div className="m-card-price"><span className="m-price-amount">--</span> <span className="m-price-period">/yr</span></div>
                <p className="m-card-desc">Poore saal ki unlimited — sabse kifayati plan!</p>
              </div>
              <div className="m-card-body">
                <div className="m-card-feature-group">
                  <span className="m-feature-label">Included Services</span>
                  <ul className="m-feature-list">
                    <li><i className="fa-solid fa-check"></i> Sabhi 9 Month ki services</li>
                    <li><i className="fa-solid fa-check"></i> ITR Filing (1 baar free)</li>
                    <li><i className="fa-solid fa-check"></i> Scholarship Challan</li>
                    <li><i className="fa-solid fa-check"></i> Unlimited Traffic Challan</li>
                    <li><i className="fa-solid fa-check"></i> University / Board Exam Fees</li>
                    <li><i className="fa-solid fa-check"></i> Trade License Renewal</li>
                    <li><i className="fa-solid fa-check"></i> SSO Rajasthan Portal Access</li>
                    <li><i className="fa-solid fa-check"></i> Priority Support (24/7)</li>
                    <li><i className="fa-solid fa-check"></i> Free Document Scanning</li>
                    <li><i className="fa-solid fa-check"></i> Home Visit (1 baar)</li>
                  </ul>
                </div>
              </div>
              <div className="m-card-footer">
                <Link href="/contact" className="btn btn-accent m-card-btn pulse-glow"><i className="fa-solid fa-phone"></i> Contact for Price</Link>
              </div>
            </div>
          </div>

          {/* ==================== SAVINGS BAR ==================== */}
          <div className="m-savings fade-in appear">
            <div className="m-savings-content">
              <div className="m-savings-icon"><i className="fa-solid fa-indian-rupee-sign"></i></div>
              <div>
                <h3>Annual Plan Mein Bachat!</h3>
                <p>1 Year membership lene par aapko lagbhag <strong>40% tak ki bachat</strong> hoti hai compared to monthly plan. Zyada savings, zyada services!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== COMPARISON TABLE ==================== */}
      <section className="m-compare">
        <div className="container">
          <div className="text-center fade-in appear">
            <h2 className="section-title">Plan Comparison</h2>
            <p className="section-subtitle">Ek nazar mein sabhi plans ki tulna karein aur apne liye sahi plan chunein</p>
          </div>

          <div className="compare-table-wrap fade-in appear">
            <table className="m-compare-table">
              <thead>
                <tr>
                  <th>Service</th>
                  <th><span className="m-th-label">1 Month</span><span className="m-th-badge">Basic</span></th>
                  <th><span className="m-th-label">3 Months</span><span className="m-th-badge m-badge-silver">Silver</span></th>
                  <th className="col-highlight"><span className="m-th-label">6 Months</span><span className="m-th-badge m-badge-gold">Gold</span></th>
                  <th><span className="m-th-label">9 Months</span><span className="m-th-badge m-badge-platinum">Platinum</span></th>
                  <th><span className="m-th-label">1 Year</span><span className="m-th-badge m-badge-diamond">Diamond</span></th>
                </tr>
              </thead>
              <tbody>
                <tr><td>PAN Card Apply/Correction</td><td><i className="fa-solid fa-check check-yes"></i></td><td><i className="fa-solid fa-check check-yes"></i></td><td className="col-highlight"><i className="fa-solid fa-check check-yes"></i></td><td><i className="fa-solid fa-check check-yes"></i></td><td><i className="fa-solid fa-check check-yes"></i></td></tr>
                <tr><td>Birth / Death Certificate</td><td><i className="fa-solid fa-check check-yes"></i></td><td><i className="fa-solid fa-check check-yes"></i></td><td className="col-highlight"><i className="fa-solid fa-check check-yes"></i></td><td><i className="fa-solid fa-check check-yes"></i></td><td><i className="fa-solid fa-check check-yes"></i></td></tr>
                <tr><td>Bill Payment & Recharge</td><td><i className="fa-solid fa-check check-yes"></i></td><td><i className="fa-solid fa-check check-yes"></i></td><td className="col-highlight"><i className="fa-solid fa-check check-yes"></i></td><td><i className="fa-solid fa-check check-yes"></i></td><td><i className="fa-solid fa-check check-yes"></i></td></tr>
                <tr><td>Traffic Challan</td><td><span className="m-limit">2</span></td><td><span className="m-limit">5</span></td><td className="col-highlight"><span className="m-limit">10</span></td><td><span className="m-limit">20</span></td><td><span className="m-unlimited">Unlimited</span></td></tr>
                <tr><td>Income / Caste / Domicile</td><td><i className="fa-solid fa-xmark check-no"></i></td><td><i className="fa-solid fa-check check-yes"></i></td><td className="col-highlight"><i className="fa-solid fa-check check-yes"></i></td><td><i className="fa-solid fa-check check-yes"></i></td><td><i className="fa-solid fa-check check-yes"></i></td></tr>
                <tr><td>Passport Apply</td><td><i className="fa-solid fa-xmark check-no"></i></td><td><i className="fa-solid fa-check check-yes"></i></td><td className="col-highlight"><i className="fa-solid fa-check check-yes"></i></td><td><i className="fa-solid fa-check check-yes"></i></td><td><i className="fa-solid fa-check check-yes"></i></td></tr>
                <tr><td>Driving Licence</td><td><i className="fa-solid fa-xmark check-no"></i></td><td><span className="m-limit">Learner</span></td><td className="col-highlight"><i className="fa-solid fa-check check-yes"></i></td><td><span className="m-limit">Permanent</span></td><td><i className="fa-solid fa-check check-yes"></i></td></tr>
                <tr><td>Govt Scheme Registration</td><td><i className="fa-solid fa-xmark check-no"></i></td><td><i className="fa-solid fa-xmark check-no"></i></td><td className="col-highlight"><i className="fa-solid fa-check check-yes"></i></td><td><i className="fa-solid fa-check check-yes"></i></td><td><i className="fa-solid fa-check check-yes"></i></td></tr>
                <tr><td>Property Tax / Revenue</td><td><i className="fa-solid fa-xmark check-no"></i></td><td><i className="fa-solid fa-xmark check-no"></i></td><td className="col-highlight"><i className="fa-solid fa-check check-yes"></i></td><td><i className="fa-solid fa-check check-yes"></i></td><td><i className="fa-solid fa-check check-yes"></i></td></tr>
                <tr><td>Court Challan</td><td><i className="fa-solid fa-xmark check-no"></i></td><td><i className="fa-solid fa-xmark check-no"></i></td><td className="col-highlight"><i className="fa-solid fa-check check-yes"></i></td><td><i className="fa-solid fa-check check-yes"></i></td><td><i className="fa-solid fa-check check-yes"></i></td></tr>
                <tr><td>RC / Vehicle Registration</td><td><i className="fa-solid fa-xmark check-no"></i></td><td><i className="fa-solid fa-xmark check-no"></i></td><td className="col-highlight"><i className="fa-solid fa-check check-yes"></i></td><td><i className="fa-solid fa-check check-yes"></i></td><td><i className="fa-solid fa-check check-yes"></i></td></tr>
                <tr><td>GST Challan (PMT-06)</td><td><i className="fa-solid fa-xmark check-no"></i></td><td><i className="fa-solid fa-xmark check-no"></i></td><td className="col-highlight"><i className="fa-solid fa-xmark check-no"></i></td><td><i className="fa-solid fa-check check-yes"></i></td><td><i className="fa-solid fa-check check-yes"></i></td></tr>
                <tr><td>Professional Tax</td><td><i className="fa-solid fa-xmark check-no"></i></td><td><i className="fa-solid fa-xmark check-no"></i></td><td className="col-highlight"><i className="fa-solid fa-xmark check-no"></i></td><td><i className="fa-solid fa-check check-yes"></i></td><td><i className="fa-solid fa-check check-yes"></i></td></tr>
                <tr><td>Land Conversion</td><td><i className="fa-solid fa-xmark check-no"></i></td><td><i className="fa-solid fa-xmark check-no"></i></td><td className="col-highlight"><i className="fa-solid fa-xmark check-no"></i></td><td><i className="fa-solid fa-check check-yes"></i></td><td><i className="fa-solid fa-check check-yes"></i></td></tr>
                <tr><td>ITR Filing</td><td><i className="fa-solid fa-xmark check-no"></i></td><td><i className="fa-solid fa-xmark check-no"></i></td><td className="col-highlight"><i className="fa-solid fa-xmark check-no"></i></td><td><i className="fa-solid fa-xmark check-no"></i></td><td><span className="m-free">1 Free</span></td></tr>
                <tr><td>SSO Rajasthan Portal</td><td><i className="fa-solid fa-xmark check-no"></i></td><td><i className="fa-solid fa-xmark check-no"></i></td><td className="col-highlight"><i className="fa-solid fa-xmark check-no"></i></td><td><i className="fa-solid fa-xmark check-no"></i></td><td><i className="fa-solid fa-check check-yes"></i></td></tr>
                <tr><td>Priority Support</td><td><i className="fa-solid fa-xmark check-no"></i></td><td><i className="fa-solid fa-xmark check-no"></i></td><td className="col-highlight"><i className="fa-solid fa-xmark check-no"></i></td><td><i className="fa-solid fa-xmark check-no"></i></td><td><span className="m-free">24/7</span></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="m-faq">
        <div className="container">
          <div className="text-center fade-in appear">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Membership se related aam sawaalon ke jawab</p>
          </div>
          <div className="m-faq-list fade-in appear">
            {faqs.map((faq, index) => (
              <div key={index} className={`m-faq-item ${openFaq === index ? 'm-faq-open' : ''}`}>
                <button className="m-faq-question" onClick={() => toggleFaq(index)}>
                  <span>{faq.question}</span>
                  <i className="fa-solid fa-chevron-down"></i>
                </button>
                <div className="m-faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="m-cta">
        <div className="container">
          <div className="m-cta-box fade-in appear">
            <div className="m-cta-content">
              <h2>Aaj Hi Membership Lein!</h2>
              <p>Kisi bhi plan ki jaankari, price aur registration ke liye humse sampark karein. Hamari team aapki sahayta ke liye tayaar hai.</p>
              <div className="m-cta-btns">
                <Link href="/contact" className="btn btn-accent btn-lg pulse-glow"><i className="fa-solid fa-phone"></i> Call Now</Link>
                <Link href="/contact" className="btn btn-outline btn-lg" style={{ borderColor: 'white', color: 'white' }}><i className="fa-solid fa-envelope"></i> Enquire Online</Link>
              </div>
            </div>
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
