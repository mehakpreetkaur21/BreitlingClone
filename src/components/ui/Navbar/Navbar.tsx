'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Globe, Search, Heart, User, Phone, ChevronDown } from 'lucide-react';
import { FaUniversalAccess } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (isMenuOpen && !event.target.closest('.navigation-section')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav className="navbar">
      <div className="main-container">
        <div className="top-row">
          <div className="left-container">
            {!isMobile && (
              <>
                <div className="language-selector">
                  <div><Globe size={20}/></div>
                  <span className="country-code">IN</span>
                  <span className="language">ENGLISH</span>
                  <ChevronDown />
                </div>
                <div className="phone-container">
                  <Phone size={19}/>
                  <span className="phone-number">+41 32 654 54 54</span>
                </div>
              </>
            )}
          </div>

          <div className="logo-container">
            <Link href="/">
              <img src="https://www.breitling.com/_next/static/images/breitling-140.svg" alt="Breitling Logo" />
            </Link>
          </div>

          <div className="right-container">
            <div className='action-icon'>
              <FaUniversalAccess size={isMobile ? 20 : 24}/>
            </div>
            <div className="action-icon"><Search size={isMobile ? 20 : 24} /></div>
            <div className="action-icon"><Heart size={isMobile ? 20 : 24} /></div>
            <div className="action-icon"><User size={isMobile ? 20 : 24} /></div>
            {isMobile && (
              <button className="mobile-menu-button" onClick={toggleMenu}>
                {isMenuOpen ? '✖' : '☰'}
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="navigation-section">
        {!isMobile && (
          <div className="desktop-navigation">
            <Link className="nav-link" href="/collections">Collections</Link>
            <Link className="nav-link" href="/watches">Watches</Link>
            <Link className="nav-link" href="/straps">Straps</Link>
            <Link className="nav-link" href="/sunglasses">Sunglasses</Link>
            <Link className="nav-link" href="/services">Services</Link>
            <Link className="nav-link" href="/stores">Stores</Link>
            <Link className="nav-link" href="/about">About</Link>
          </div>
        )}

        {isMobile && isMenuOpen && (
          <div className={`mobile-navigation ${isMenuOpen ? 'open' : ''}`}>
            <div className="mobile-nav-links">
              <Link className="mobile-nav-link" href="/collections" onClick={() => setIsMenuOpen(false)}>
                Collections
              </Link>
              <Link className="mobile-nav-link" href="/watches" onClick={() => setIsMenuOpen(false)}>
                Watches
              </Link>
              <Link className="mobile-nav-link" href="/straps" onClick={() => setIsMenuOpen(false)}>
                Straps
              </Link>
              <Link className="mobile-nav-link" href="/sunglasses" onClick={() => setIsMenuOpen(false)}>
                Sunglasses
              </Link>
              <Link className="mobile-nav-link" href="/services" onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
              <Link className="mobile-nav-link" href="/stores" onClick={() => setIsMenuOpen(false)}>
                Stores
              </Link>
              <Link className="mobile-nav-link" href="/about" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              
              <div className="mobile-contact-info">
                <div className="mobile-language-selector">
                  <Globe size={18}/>
                  <span>IN - ENGLISH</span>
                  <ChevronDown size={16} />
                </div>
                <div className="mobile-phone">
                  <Phone size={18}/>
                  <span>+41 32 654 54 54</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;