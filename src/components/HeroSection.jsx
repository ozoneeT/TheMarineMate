import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Ship } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import './HeroSection.css';

const HeroSection = () => {
  const reduce = useReducedMotion();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  
  const mockupY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 60]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.4]);

  return (
    <section ref={sectionRef} className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-background-stars"></div>
      <div className="hero-inner">
        <div className="hero-copy">
          <motion.div
            className="hero-pill"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span>Founding boats beta out!</span>
            <span className="pill-divider" />
            <a href="#pricing" className="pill-link">
              Read more <ArrowRight size={14} />
            </a>
          </motion.div>

          <motion.h1 
            id="hero-heading" 
            className="hero-title"
          >
            <motion.span 
              className="hero-title-line"
              initial={reduce ? false : { opacity: 0, y: 28, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              Your boat has a brain.
            </motion.span>
            <motion.span
              className="hero-title-line hero-title-line--tagline"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              Meet your{' '}
              <span className="hero-title-brand">Marine Mate</span>.
            </motion.span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
          >
            An AI copilot trained on your vessel — manuals, photos, upgrades, service history, and spare
            parts. Empower your crew, fix things faster, and maximize time on the water effortlessly.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.5 }}
          >
            <a href="#pricing" className="hero-btn hero-btn--primary">
              Apply for beta — 50% off
            </a>
            <a href="#try-now" className="hero-btn hero-btn--ghost">
              See how it works
            </a>
          </motion.div>
        </div>

        <motion.div className="hero-visual-wrapper" style={{ opacity: glowOpacity }}>
          <div className="hero-glow-arc"></div>



          <motion.div
            className="hero-mockup glass glow-box"
            initial={reduce ? false : { opacity: 0, scale: 0.96, rotateX: 8 }}
            animate={{ opacity: 1, scale: 1, rotateX: 4 }}
            transition={{ duration: 0.85, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            whileHover={reduce ? {} : { rotateX: 0, scale: 1.01, transition: { duration: 0.35 } }}
            style={{ y: mockupY, transformPerspective: 1200 }}
          >
            <div className="mockup-header">
              <div className="mockup-dots" aria-hidden>
                <span />
                <span />
                <span />
              </div>
              <div className="mockup-title-group">
                <BrandLogo className="mockup-title-logo" width={18} height={18} loading="eager" alt="" />
                <div className="mockup-title">Marine Mate Console</div>
              </div>
              <span className="mockup-live">
                <span className="mockup-live-dot" />
                Live
              </span>
            </div>
            <div className="mockup-body">
              <div className="chat-message bot">
                <Ship className="chat-icon" size={16} aria-hidden />
                <p>
                  Captain — engine hours are at 2,200. Starboard impeller service is due. Want the OEM
                  procedure and a parts check from your onboard inventory?
                </p>
              </div>
              <div className="chat-message user">
                <p>Yes — do we have parts in the aft locker?</p>
              </div>
              <div className="chat-message bot">
                <Ship className="chat-icon" size={16} aria-hidden />
                <p>
                  Found 1× OEM impeller kit (488-XYZ) in the aft starboard locker. Step-by-step schematic
                  sent to your phone.
                </p>
              </div>
              <div className="chat-message user">
                <p>Add a spare set to my order list.</p>
              </div>
              <div className="chat-message bot typing" aria-hidden>
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
