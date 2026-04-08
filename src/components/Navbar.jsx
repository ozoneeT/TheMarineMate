import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import './Navbar.css';

const navLinks = [
  { href: '#pricing', label: 'Pricing' },
  { href: '#inventory', label: 'Inventory' },
  { href: '#get-my-mate', label: 'Get My Mate' },
  { href: '#chat', label: 'Chat with your mate' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  /* Native scroll lock only — no layout effect, so the drawer isn’t blocked by a full-document reflow */
  useEffect(() => {
    if (!menuOpen) return undefined;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.removeProperty('overflow');
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar">
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
      </nav>

      <div
        id="mobile-nav"
        className={`navbar-mobile ${menuOpen ? 'navbar-mobile--open' : ''}`}
        aria-hidden={!menuOpen}
      >
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
    </>
  );
};

export default Navbar;
