import React from 'react';
import { Globe, MessageCircle, Mail } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { Reveal, RevealItem, RevealStagger } from './motion/Reveal';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <Reveal as="div" className="footer-brand-section" y={32} duration={0.56}>
            <div className="footer-logo">
              <BrandLogo className="footer-brand-logo" width={32} height={32} />
              <span className="footer-brand">Marine Mate</span>
            </div>
            <p className="footer-tagline">
              Your vessel-specific AI copilot — manuals, maintenance, and inventory in one place.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Chat">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Website">
                <Globe size={20} />
              </a>
              <a href="#" className="social-link" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </Reveal>

          <RevealStagger as="div" className="footer-links-grid" stagger={0.08} delayChildren={0.06}>
            <RevealItem as="div" className="footer-column">
              <h4>Product</h4>
              <ul>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
                <li>
                  <a href="#what-marine-mate-does">What Marine Mate does</a>
                </li>
                <li>
                  <a href="#inventory">Inventory</a>
                </li>
                <li>
                  <a href="#chat">Chat with your mate</a>
                </li>
              </ul>
            </RevealItem>
            <RevealItem as="div" className="footer-column">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Founders</a>
                </li>
              </ul>
            </RevealItem>
            <RevealItem as="div" className="footer-column">
              <h4>Legal</h4>
              <ul>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
              </ul>
            </RevealItem>
          </RevealStagger>
        </div>

        <Reveal as="div" className="footer-bottom" y={16} duration={0.45}>
          <p>&copy; {new Date().getFullYear()} Marine Mate. All rights reserved.</p>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;
