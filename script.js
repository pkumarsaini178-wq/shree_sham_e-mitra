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
    window.addEventListener('load', () => {
      setTimeout(() => {
        loadingScreen.classList.add('hidden');
        document.body.style.overflow = '';
      }, 800);
    });
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

  // PREMIUM: 3D Tilt Effect
  const tiltCards = document.querySelectorAll('.tilt-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 15;
      const rotateY = (centerX - x) / 15;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03,1.03,1.03)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
    });
  });

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
});
