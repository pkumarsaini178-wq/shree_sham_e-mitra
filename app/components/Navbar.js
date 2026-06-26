'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link href="/" className="logo">
          <i className="fa-solid fa-desktop"></i> Shree Shyam <span>e-Mitra</span>
        </Link>
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`fa-solid ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link></li>
          <li><Link href="/services" className={`nav-link ${pathname === '/services' ? 'active' : ''}`}>Services</Link></li>
          <li><Link href="/membership" className={`nav-link ${pathname === '/membership' ? 'active' : ''}`}>Membership</Link></li>
          <li><Link href="/vacancy" className={`nav-link ${pathname === '/vacancy' ? 'active' : ''}`}>Vacancy</Link></li>
          <li><Link href="/portfolio" className={`nav-link ${pathname === '/portfolio' ? 'active' : ''}`}>Portfolio</Link></li>
          <li><Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>About Us</Link></li>
          <li><Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
