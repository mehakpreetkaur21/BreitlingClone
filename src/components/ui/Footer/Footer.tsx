// components/Footer/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { Instagram, Youtube, Facebook, Twitter, Globe } from 'lucide-react';
import './Footer.css';

interface ContactCenterResponse {
  phoneNumber: string;
  weekdayHours: string;
  weekendHours: string;
  email: string;
}

const Footer = async () => {
  let contactData = { phone: '-', weekdayHours: '-', weekendHours: '-', email: '-' };

  try {
    const response = await fetch('https://www.breitling.com/api/contact-center/?countryCode=IN');
    if (response.ok) {
      const data: ContactCenterResponse = await response.json();
      contactData = {
        phone: data.phoneNumber || '-',
        weekdayHours: data.weekdayHours || '-',
        weekendHours: data.weekendHours || '-',
        email: data.email || '-'
      };
    }
  } catch (error) {
    console.error('Error fetching contact data:', error);
  }

  const customerServiceLinks = [
    ['/faq', 'FAQ'],
    ['/boutique', 'Find a boutique'],
    ['/services', 'Our services'],
    ['/order-check', 'Check your order'],
    ['/account', 'My account'],
    ['/register', 'Register your Breitling']
  ];

  const watchesLinks = [
    ['/watches/womens', "Women's watches"],
    ['/watches/mens', "Men's watches"],
    ['/watches/gold', 'Gold'],
    ['/watches/limited', 'Limited editions'],
    ['/watches/novelties', 'Novelties'],
    ['/collections', 'All collections']
  ];

  const aboutLinks = [
    ['/about/books', 'Breitling Books'],
    ['/about/partnerships', 'Partnerships'],
    ['/about/sustainability', 'Sustainability'],
    ['/about/catalog', 'Download catalog'],
    ['/about/career', 'Career']
  ];

  const legalLinks = [
    ['/terms', 'Terms of use'],
    ['/press', 'Press lounge'],
    ['/career', 'Career'],
    ['/human-rights', 'Human rights statement'],
    ['/privacy', 'Privacy policy'],
    ['/contact', 'Contact'],
    ['/imprint', 'Imprint'],
    ['/accessibility', 'Accessibility']
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="newsletter-section">
          <Link href="/newsletter" className="newsletter-link">
            <div className="newsletter-link2">SUBSCRIBE TO OUR NEWSLETTER</div>
            <span className="newsletter-arrow">›</span>
          </Link>

            <div className="contact-info">
                <span className="phone">{contactData.phone}</span>
                <span className="hours">{contactData.weekdayHours}, {contactData.weekendHours}</span>
                <span className="email">{contactData.email}</span>
            </div>
        </div>

        <div className="footer-content">
          <div className="footer-column">
            <h3 className="footer-title">CUSTOMER SERVICE</h3>
            <ul className="footer-links">
              {customerServiceLinks.map(([href, label]) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">WATCHES</h3>
            <ul className="footer-links">
              {watchesLinks.map(([href, label]) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">ABOUT</h3>
            <ul className="footer-links">
              {aboutLinks.map(([href, label]) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column social-column">
            <h3 className="footer-title">SOCIAL NETWORK</h3>
            <div className="social-links">
              <Link href="#" className="social-link" aria-label="Instagram">
                <Instagram size={24} />
              </Link>
              <Link href="#" className="social-link" aria-label="YouTube">
                <Youtube size={24} />
              </Link>
              <Link href="#" className="social-link" aria-label="Facebook">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="social-link" aria-label="Twitter">
                <Twitter size={24} />
              </Link>
            </div>

            <div className="country-selector">
              <h4 className="country-title">COUNTRY/REGION</h4>
              <div className="country-button">
                <Globe size={16} />
                <span>INDIA - ENGLISH</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            {legalLinks.map(([href, text]) => (
              <Link key={href} href={href}>{text}</Link>
            ))}
          </div>
          <div className="footer-copyright">
            <span>©2025 Breitling. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;