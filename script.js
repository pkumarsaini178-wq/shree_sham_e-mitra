document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileMenuBtn.querySelector('i');
      if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.navbar')) {
        navLinks.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  }

  // Navbar Scroll Effect
  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  });

  // Typing Effect
  const typingElement = document.querySelector('.typing-text');
  if (typingElement) {
    const phrases = [
      '"Aapki Seva, Hamaari Zimmedaari"',
      'Digital India ki ore ek kadam',
      'Aapke liye, aapke dwaar'
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isPaused = false;

    function typeEffect() {
      const currentPhrase = phrases[phraseIndex];

      if (isPaused) {
        setTimeout(typeEffect, 2000);
        isPaused = false;
        return;
      }

      if (!isDeleting) {
        typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentPhrase.length) {
          isPaused = true;
          isDeleting = true;
          setTimeout(typeEffect, 2500);
          return;
        }
        setTimeout(typeEffect, 60);
      } else {
        typingElement.textContent = currentPhrase.substring(0, charIndex);
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          setTimeout(typeEffect, 500);
          return;
        }
        setTimeout(typeEffect, 30);
      }
    }

    setTimeout(typeEffect, 1000);
  }

  // Particles Background
  document.querySelectorAll('.hero-particles, .m-hero-particles').forEach(container => {
    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 15 + 10}s`;
      particle.style.animationDelay = `${Math.random() * 10}s`;
      particle.style.opacity = Math.random() * 0.5 + 0.1;
      container.appendChild(particle);
    }
  });

  // Counter Animation
  const statNumbers = document.querySelectorAll('.stat-item h3');
  if (statNumbers.length > 0) {
    let countersStarted = false;

    function startCounters() {
      if (countersStarted) return;
      countersStarted = true;

      statNumbers.forEach(stat => {
        const text = stat.textContent;
        const hasPlus = text.includes('+');
        const hasPercent = text.includes('%');
        const targetValue = parseFloat(text.replace(/[^0-9.]/g, ''));
        const suffix = hasPlus ? '+' : hasPercent ? '%' : '';

        if (isNaN(targetValue)) return;

        let currentValue = 0;
        const duration = 2000;
        const steps = 60;
        const increment = targetValue / steps;
        let step = 0;

        const timer = setInterval(() => {
          step++;
          currentValue += increment;

          if (step >= steps) {
            currentValue = targetValue;
            clearInterval(timer);
          }

          if (Number.isInteger(targetValue)) {
            stat.textContent = Math.floor(currentValue) + suffix;
          } else {
            stat.textContent = currentValue.toFixed(1) + suffix;
          }
        }, duration / steps);
      });
    }

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            startCounters();
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });

      observer.observe(statsSection);
    }
  }

  // Parallax on Hero
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY;
      if (scrollPos < window.innerHeight) {
        hero.style.backgroundPositionY = `${scrollPos * 0.3}px`;
      }
    });
  }

  // Scroll Animations
  const fadeElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .fade-in-scale');

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -60px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  fadeElements.forEach(el => {
    appearOnScroll.observe(el);
  });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // PREMIUM: Loading Screen
  const loadingScreen = document.getElementById('loadingScreen');
  if (loadingScreen) {
    const hideLoader = () => {
      setTimeout(() => {
        loadingScreen.classList.add('hidden');
        document.body.style.overflow = '';
      }, 800);
    };
    
    if (document.readyState === 'complete') {
      hideLoader();
    } else {
      window.addEventListener('load', hideLoader);
    }
  }

  // PREMIUM: Scroll Progress Bar
  const progressBar = document.getElementById('scrollProgress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = progress + '%';
    });
  }

  // PREMIUM: Back to Top
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // PREMIUM: Testimonials Carousel
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const testimonialDots = document.querySelectorAll('.testimonial-dot');
  if (testimonialCards.length > 0 && testimonialDots.length > 0) {
    let currentTestimonial = 0;
    let testimonialInterval;

    function showTestimonial(index) {
      testimonialCards.forEach(c => c.classList.remove('active'));
      testimonialDots.forEach(d => d.classList.remove('active'));
      testimonialCards[index].classList.add('active');
      testimonialDots[index].classList.add('active');
      currentTestimonial = index;
    }

    function nextTestimonial() {
      const next = (currentTestimonial + 1) % testimonialCards.length;
      showTestimonial(next);
    }

    testimonialDots.forEach(dot => {
      dot.addEventListener('click', () => {
        clearInterval(testimonialInterval);
        showTestimonial(parseInt(dot.dataset.index));
        testimonialInterval = setInterval(nextTestimonial, 5000);
      });
    });

    testimonialInterval = setInterval(nextTestimonial, 5000);
  }


  // PREMIUM: Active nav link highlight on scroll
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinksAll = document.querySelectorAll('.nav-link');
  if (sections.length > 0 && navLinksAll.length > 0) {
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        const top = section.offsetTop - 150;
        if (window.scrollY >= top) {
          current = section.getAttribute('id');
        }
      });
      navLinksAll.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('active-link');
        }
      });
    });
  }

  // PREMIUM: reveal observer for .fade-in-up
  const fadeUpElements = document.querySelectorAll('.fade-in-up');
  const fadeUpObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        fadeUpObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
  fadeUpElements.forEach(el => fadeUpObserver.observe(el));

  // Contact Form Email Submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const btnSpinner = document.getElementById('btnSpinner');
    const formStatus = document.getElementById('formStatus');

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !phone || !message) {
        showFormStatus('Kripya saare fields bharein.', 'error');
        return;
      }

      submitBtn.disabled = true;
      btnText.style.display = 'none';
      btnSpinner.style.display = 'inline';

      try {
        const response = await fetch('/send-message', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, phone, message })
        });

        const result = await response.json();

        if (result.success) {
          showFormStatus('Dhanyavaad! Aapka message successfully bhej diya gaya hai. Hum jald hi aapse sampark karenge.', 'success');
          contactForm.reset();
        } else {
          showFormStatus(result.error || 'Koi samasya aa gayi. Kripya punah prayas karein.', 'error');
        }
      } catch (err) {
        showFormStatus('Server se connect nahi ho paya. Kripya baad mein prayas karein.', 'error');
      } finally {
        submitBtn.disabled = false;
        btnText.style.display = 'inline';
        btnSpinner.style.display = 'none';
      }
    });

    function showFormStatus(text, type) {
      formStatus.style.display = 'block';
      formStatus.textContent = text;
      formStatus.className = type === 'success'
        ? 'form-status form-status--success'
        : 'form-status form-status--error';

      setTimeout(() => {
        formStatus.style.display = 'none';
      }, 6000);
    }
  }

  // Service Details Modal Logic
  const serviceDetailsData = {
    'pan': {
      title: 'PAN Card Apply/Correction',
      icon: 'fa-address-card',
      price: '200',
      documents: `
        <h4>पहचान प्रमाण (Identity Proof) (कोई एक):</h4>
        <ul>
          <li><i class="fa-solid fa-check"></i> आधार कार्ड (Recommended)</li>
          <li><i class="fa-solid fa-check"></i> वोटर आईडी / पासपोर्ट / ड्राइविंग लाइसेंस</li>
        </ul>
        <h4>पता प्रमाण (Address Proof) (कोई एक):</h4>
        <ul>
          <li><i class="fa-solid fa-check"></i> आधार कार्ड</li>
          <li><i class="fa-solid fa-check"></i> वोटर आईडी / बैंक पासबुक / बिजली बिल</li>
        </ul>
        <h4>जन्म तिथि प्रमाण (Date of Birth Proof) (कोई एक):</h4>
        <ul>
          <li><i class="fa-solid fa-check"></i> आधार कार्ड / जन्म प्रमाण पत्र / 10वीं मार्कशीट</li>
        </ul>
        <h4>अन्य आवश्यकताएं:</h4>
        <ul>
          <li><i class="fa-solid fa-check"></i> पासपोर्ट साइज फोटो</li>
          <li><i class="fa-solid fa-check"></i> मोबाइल नंबर (आधार से लिंक)</li>
          <li><i class="fa-solid fa-check"></i> ईमेल आईडी (यदि उपलब्ध हो)</li>
        </ul>
      `
    },
    'birth-death': {
      title: 'Birth/Death Certificate',
      icon: 'fa-baby',
      price: '300',
      documents: `
        <h4>जन्म प्रमाण पत्र के लिए:</h4>
        <ul>
          <li><i class="fa-solid fa-check"></i> बच्चे का जन्म अस्पताल/नर्सिंग होम प्रमाण पत्र</li>
          <li><i class="fa-solid fa-check"></i> माता-पिता का आधार कार्ड और जन आधार कार्ड</li>
          <li><i class="fa-solid fa-check"></i> माता-पिता का मोबाइल नंबर</li>
          <li><i class="fa-solid fa-check"></i> घर पर जन्म होने की स्थिति में शपथ पत्र (Affidavit)</li>
        </ul>
        <h4>मृत्यु प्रमाण पत्र के लिए:</h4>
        <ul>
          <li><i class="fa-solid fa-check"></i> अस्पताल/डॉक्टर द्वारा जारी मृत्यु प्रमाण पत्र</li>
          <li><i class="fa-solid fa-check"></i> मृतक का आधार कार्ड (यदि उपलब्ध हो)</li>
          <li><i class="fa-solid fa-check"></i> आवेदक का आधार कार्ड और जन आधार कार्ड</li>
          <li><i class="fa-solid fa-check"></i> श्मशान/कब्रिस्तान रसीद (यदि आवश्यक हो)</li>
        </ul>
        <p class="mt-2" style="color: var(--accent); font-size: 0.9em;"><i class="fa-solid fa-circle-info"></i> नोट: 21 दिनों के भीतर पंजीकरण कराना सबसे आसान होता है।</p>
      `
    },
    'certificate': {
      title: 'Income / Caste / Domicile Certificate',
      icon: 'fa-file-invoice',
      price: '200',
      documents: `
        <h4>आय प्रमाण पत्र (Income):</h4>
        <ul>
          <li><i class="fa-solid fa-check"></i> आधार कार्ड, जन आधार कार्ड, बैंक पासबुक</li>
          <li><i class="fa-solid fa-check"></i> आय का शपथ पत्र (Affidavit), पासपोर्ट साइज फोटो</li>
        </ul>
        <h4>जाति प्रमाण पत्र (Caste):</h4>
        <ul>
          <li><i class="fa-solid fa-check"></i> आधार कार्ड, जन आधार कार्ड, राशन कार्ड</li>
          <li><i class="fa-solid fa-check"></i> पिता/माता का जाति प्रमाण पत्र, परिवार रजिस्टर/जन्म प्रमाण पत्र</li>
        </ul>
        <h4>मूल निवास (Domicile):</h4>
        <ul>
          <li><i class="fa-solid fa-check"></i> आधार कार्ड, जन आधार कार्ड, राशन कार्ड, वोटर आईडी</li>
          <li><i class="fa-solid fa-check"></i> बिजली/पानी/टेलीफोन बिल</li>
        </ul>
      `
    },
    'driving-licence': {
      title: 'Driving Licence (LL & DL)',
      icon: 'fa-car',
      price: '3500',
      documents: `
        <h4>लर्निंग लाइसेंस (LL) के लिए:</h4>
        <ul>
          <li><i class="fa-solid fa-check"></i> आधार कार्ड, जन आधार कार्ड (यदि उपलब्ध हो)</li>
          <li><i class="fa-solid fa-check"></i> निवास प्रमाण (आधार, वोटर आईडी, बिजली बिल आदि)</li>
          <li><i class="fa-solid fa-check"></i> जन्म तिथि प्रमाण (आधार, 10वीं मार्कशीट आदि)</li>
          <li><i class="fa-solid fa-check"></i> पासपोर्ट साइज फोटो, मोबाइल नंबर</li>
        </ul>
        <h4>स्थायी ड्राइविंग लाइसेंस (DL) के लिए:</h4>
        <ul>
          <li><i class="fa-solid fa-check"></i> वैध लर्निंग लाइसेंस</li>
          <li><i class="fa-solid fa-check"></i> आधार कार्ड, निवास प्रमाण, आयु प्रमाण</li>
          <li><i class="fa-solid fa-check"></i> ड्राइविंग टेस्ट पास करना होगा</li>
        </ul>
      `
    },
    'jan-aadhar': {
      title: 'Jan Aadhar Card',
      icon: 'fa-id-card-clip',
      price: '300',
      documents: `
        <h4>नया कार्ड बनवाने / अपडेट के लिए:</h4>
        <ul>
          <li><i class="fa-solid fa-check"></i> परिवार मुखिया का आधार कार्ड और बैंक पासबुक</li>
          <li><i class="fa-solid fa-check"></i> 5 वर्ष से अधिक आयु के सभी सदस्यों के आधार कार्ड</li>
          <li><i class="fa-solid fa-check"></i> जन्म तिथि/आयु प्रमाण पत्र (जन्म प्रमाण पत्र, 10वीं मार्कशीट आदि)</li>
          <li><i class="fa-solid fa-check"></i> निवास प्रमाण (आधार कार्ड, बिजली बिल आदि)</li>
          <li><i class="fa-solid fa-check"></i> परिवार के सभी सदस्यों के रंगीन फोटो</li>
          <li><i class="fa-solid fa-check"></i> आय का स्व-घोषणा पत्र (Self Declaration)</li>
        </ul>
      `
    },
    'challan-traffic': {
      title: 'Traffic Challan Services',
      icon: 'fa-traffic-light',
      price: 'Actual Amount + 10% Service Charge',
      documents: `
        <h4>Required Documents:</h4>
        <ul>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> Vehicle Number (Mandatory)</li>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> RC (Registration Certificate) (Mandatory)</li>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> Mobile Number (Mandatory)</li>
          <li><i class="fa-solid fa-info-circle"></i> Driving Licence (Optional)</li>
          <li><i class="fa-solid fa-info-circle"></i> Challan Number (Optional)</li>
        </ul>
        <h4>Verification Process:</h4>
        <ol style="padding-left: 20px; font-size: 0.95rem; color: var(--text-light); margin-bottom: 1rem;">
          <li>Vehicle Number Verify</li>
          <li>RC Verify</li>
          <li>Challan Search</li>
          <li>Payment Confirmation</li>
          <li>Receipt Download</li>
        </ol>
      `
    },
    'challan-court': {
      title: 'Court Challan Services',
      icon: 'fa-gavel',
      price: 'Actual Amount + 10% Service Charge',
      documents: `
        <h4>Required Documents:</h4>
        <ul>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> Aadhaar Card (Mandatory)</li>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> Court Case Number (Mandatory)</li>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> Mobile Number (Mandatory)</li>
          <li><i class="fa-solid fa-info-circle"></i> PAN Card (Optional)</li>
          <li><i class="fa-solid fa-info-circle"></i> Advocate Details (Optional)</li>
        </ul>
        <h4>Verification Process:</h4>
        <ol style="padding-left: 20px; font-size: 0.95rem; color: var(--text-light); margin-bottom: 1rem;">
          <li>Identity Verification</li>
          <li>Case Verification</li>
          <li>Court Fee Calculation</li>
          <li>Challan Generation</li>
          <li>Payment Receipt</li>
        </ol>
      `
    },
    'challan-revenue': {
      title: 'Revenue & Property Challans',
      icon: 'fa-house-chimney',
      price: 'Actual Amount + 10% Service Charge',
      documents: `
        <h4>Required Documents:</h4>
        <ul>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> Aadhaar Card (Mandatory)</li>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> Property ID (Mandatory)</li>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> Jamabandi Copy (Mandatory)</li>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> Mobile Number (Mandatory)</li>
          <li><i class="fa-solid fa-info-circle"></i> Registry Copy (Optional)</li>
        </ul>
        <h4>Verification Process:</h4>
        <ol style="padding-left: 20px; font-size: 0.95rem; color: var(--text-light); margin-bottom: 1rem;">
          <li>Property Verification</li>
          <li>Ownership Verification</li>
          <li>Revenue Calculation</li>
          <li>Challan Generation</li>
          <li>Payment</li>
        </ol>
      `
    },
    'challan-education': {
      title: 'Education Challans',
      icon: 'fa-graduation-cap',
      price: 'Actual Amount + 10% Service Charge',
      documents: `
        <h4>Required Documents:</h4>
        <ul>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> Aadhaar Card (Mandatory)</li>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> Student ID (Mandatory)</li>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> Mobile Number (Mandatory)</li>
          <li><i class="fa-solid fa-info-circle"></i> Marksheet (Optional)</li>
          <li><i class="fa-solid fa-info-circle"></i> Admission Letter (Optional)</li>
        </ul>
        <h4>Verification Process:</h4>
        <ol style="padding-left: 20px; font-size: 0.95rem; color: var(--text-light); margin-bottom: 1rem;">
          <li>Student Verification</li>
          <li>Institution Verification</li>
          <li>Fee Calculation</li>
          <li>Challan Generation</li>
          <li>Payment</li>
        </ol>
      `
    },
    'challan-utility': {
      title: 'Utility & Municipal Challans',
      icon: 'fa-building',
      price: 'Actual Amount + 10% Service Charge',
      documents: `
        <h4>Electricity / Water Bill:</h4>
        <ul>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> Consumer/Connection Number</li>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> Mobile Number</li>
        </ul>
        <h4>Municipal Tax:</h4>
        <ul>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> Property ID</li>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> Aadhaar Card</li>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> Mobile Number</li>
        </ul>
        <h4>Verification Process:</h4>
        <ol style="padding-left: 20px; font-size: 0.95rem; color: var(--text-light); margin-bottom: 1rem;">
          <li>Consumer Verification</li>
          <li>Outstanding Amount Check</li>
          <li>Bill Generation</li>
          <li>Payment & Receipt Download</li>
        </ol>
      `
    },
    'challan-transport': {
      title: 'Transport Department Services',
      icon: 'fa-truck',
      price: 'Actual Amount + 10% Service Charge',
      documents: `
        <h4>Vehicle Registration Fee:</h4>
        <ul>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> Aadhaar Card, Vehicle Invoice</li>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> Insurance Copy, Pollution Certificate</li>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> Address Proof</li>
        </ul>
        <h4>Driving Licence Fee:</h4>
        <ul>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> Aadhaar Card, Passport Size Photo</li>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> Address Proof, Learning Licence (if applicable)</li>
        </ul>
        <h4>Verification Process:</h4>
        <ol style="padding-left: 20px; font-size: 0.95rem; color: var(--text-light); margin-bottom: 1rem;">
          <li>Identity Verification</li>
          <li>Vehicle Verification</li>
          <li>Fee Calculation</li>
          <li>Challan Generation & Payment</li>
        </ol>
      `
    },
    'challan-health': {
      title: 'Health Department Challans',
      icon: 'fa-hospital',
      price: 'Actual Amount + 10% Service Charge',
      documents: `
        <h4>Required Documents:</h4>
        <ul>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> Aadhaar Card (Mandatory)</li>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> Hospital Registration Slip (Mandatory)</li>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> Mobile Number (Mandatory)</li>
          <li><i class="fa-solid fa-info-circle"></i> Doctor Reference (Optional)</li>
        </ul>
        <h4>Verification Process:</h4>
        <ol style="padding-left: 20px; font-size: 0.95rem; color: var(--text-light); margin-bottom: 1rem;">
          <li>Patient Verification</li>
          <li>Service Verification</li>
          <li>Fee Collection</li>
          <li>Receipt Generation</li>
        </ol>
      `
    },
    'challan-gst': {
      title: 'GST & Tax Challans',
      icon: 'fa-file-invoice-dollar',
      price: 'Actual Amount + 10% Service Charge',
      documents: `
        <h4>GST Challan (PMT-06):</h4>
        <ul>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> GSTIN, PAN Card, Aadhaar Card, Mobile Number</li>
        </ul>
        <h4>Income Tax Challan (280):</h4>
        <ul>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> PAN Card, Aadhaar Card, Mobile Number</li>
        </ul>
        <h4>TDS Challan (281):</h4>
        <ul>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> TAN Number, PAN Card, Mobile Number</li>
        </ul>
        <h4>Verification Process:</h4>
        <ol style="padding-left: 20px; font-size: 0.95rem; color: var(--text-light); margin-bottom: 1rem;">
          <li>Taxpayer Verification</li>
          <li>Tax Calculation</li>
          <li>Challan Generation</li>
          <li>Payment Confirmation</li>
        </ol>
      `
    },
    'bill-payment': {
      title: 'Bill Payment & Recharge',
      icon: 'fa-money-bill-transfer',
      price: 'Actual Bill Amount + 10% Service Charge',
      documents: `
        <h4>Required Details:</h4>
        <ul>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> Old Bill Copy / K-Number / Consumer Number</li>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> Mobile Number</li>
        </ul>
        <h4>Supported Services:</h4>
        <ul>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> Electricity Bill (AVVNL, JVVNL, etc.)</li>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> Water Bill (PHED)</li>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> Mobile & DTH Recharge</li>
        </ul>
      `
    },
    'govt-scheme': {
      title: 'Government Scheme Registration',
      icon: 'fa-landmark',
      price: 'Varies per Scheme',
      documents: `
        <h4>General Required Documents:</h4>
        <ul>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> Jan Aadhar Card (Mandatory for Rajasthan Schemes)</li>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> Aadhaar Card</li>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> Bank Passbook Copy</li>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> Passport Size Photo</li>
          <li><i class="fa-solid fa-info-circle"></i> Income Certificate (If applicable)</li>
        </ul>
        <p class="mt-2" style="font-size: 0.9em; color: var(--text-light);"><i class="fa-solid fa-info-circle"></i> Note: Specific schemes like Palanhar, Pension, or Shramik Card may require additional specific documents.</p>
      `
    },
    'passport': {
      title: 'Passport Apply',
      icon: 'fa-passport',
      price: '200',
      documents: `
        <h4>Required Documents (Any 3 generally required):</h4>
        <ul>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> Aadhaar Card (Must have updated details and linked mobile)</li>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> 10th Marksheet (For Non-ECR category)</li>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> PAN Card or Voter ID</li>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> Bank Passbook (with photo affixed and stamped)</li>
        </ul>
        <h4>Other Requirements:</h4>
        <ul>
          <li><i class="fa-solid fa-check" style="color: var(--success);"></i> Active Mobile Number & Email ID</li>
        </ul>
        <p class="mt-2" style="font-size: 0.9em; color: var(--text-light);"><i class="fa-solid fa-info-circle"></i> Police verification will be conducted after the Passport Office appointment.</p>
      `
    }
  };

  const serviceModal = document.getElementById('serviceModal');
  if (serviceModal) {
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalPrice = document.getElementById('modalPrice');
    const modalBody = document.getElementById('modalBody');

    // Open modal on click
    document.querySelectorAll('.clickable-service').forEach(card => {
      card.addEventListener('click', (e) => {
        const serviceId = card.getAttribute('data-service');
        if (serviceId && serviceDetailsData[serviceId]) {
          const data = serviceDetailsData[serviceId];
          modalIcon.innerHTML = `<i class="fa-solid ${data.icon}"></i>`;
          modalTitle.textContent = data.title;
          modalPrice.textContent = 'Price: ' + (data.price.match(/^[0-9]+$/) ? '₹' + data.price : data.price);
          modalBody.innerHTML = data.documents;
          
          serviceModal.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    // Close modal
    closeModalBtn.addEventListener('click', () => {
      serviceModal.classList.remove('active');
      document.body.style.overflow = '';
    });

    serviceModal.addEventListener('click', (e) => {
      if (e.target === serviceModal) {
        serviceModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
});
