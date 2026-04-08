import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMotionDisabled } from './motion/useMotionDisabled.js';
import { Menu, X } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { revealEase } from './motion/revealMotion.js';
import './Navbar.css';

const navLinks = [
  { href: '#pricing', label: 'Pricing' },
  { href: '#inventory', label: 'Inventory' },
  { href: '#get-my-mate', label: 'Get My Mate' },
  { href: '#chat', label: 'Chat with your mate' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const motionOff = useMotionDisabled();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.nav
        className="navbar"
        initial={motionOff ? false : { opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: motionOff ? 0 : 0.55, ease: revealEase }}
      >
        <div className="navbar-container">
          <a href="#" className="navbar-logo" onClick={closeMenu}>
            <BrandLogo className="navbar-brand-logo" width={30} height={30} loading="eager" />
            <span className="navbar-brand">The Marine Mate</span>
          </a>

          <ul className="navbar-links" role="list">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>

          <div className="navbar-actions">
            <a href="#get-my-mate" className="btn-nav-primary">
              Get My Mate
            </a>
            <button
              type="button"
              className="navbar-menu-toggle"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {menuOpen ? (
        <div id="mobile-nav" className="navbar-mobile">
          <button type="button" className="navbar-mobile-backdrop" aria-label="Close menu" onClick={closeMenu} />
          <div className="navbar-mobile-panel">
            <ul className="navbar-mobile-links">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} onClick={closeMenu}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#get-my-mate" className="btn-nav-primary btn-nav-primary--block" onClick={closeMenu}>
              Get My Mate
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
