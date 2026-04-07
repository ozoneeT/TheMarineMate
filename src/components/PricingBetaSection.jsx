import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { Reveal, RevealHeading, RevealItem, RevealStagger } from './motion/Reveal';
import './PricingBetaSection.css';

const benefits = [
  '50% off your one-time setup fee',
  '$19/mo subscription — locked in forever',
  'Priority build slot (3–5 days)',
  'Parts inventory tracking included',
  'Direct access to the founders',
  'Founding Boat badge on your profile',
  'Help shape the product roadmap',
];

const PricingBetaSection = () => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-inner">
        <header className="pricing-header">
          <Reveal as="div" duration={0.5} y={24}>
            <span className="pricing-eyebrow">
              <Sparkles size={14} aria-hidden />
              Limited beta
            </span>
          </Reveal>
          <RevealHeading as="h2" delay={0.06} y={28}>
            Become a founding Boat
          </RevealHeading>
          <Reveal as="p" delay={0.12} duration={0.55} y={22}>
            We are onboarding our first ten beta vessels at half setup cost — you get a fully built Marine Mate; we get
            sharp feedback to make the product better for every captain.
          </Reveal>
        </header>

        <div className="pricing-layout">
          <Reveal as="div" className="pricing-benefits" delay={0.04} y={36}>
            <h3 className="pricing-benefits-title">You get</h3>
            <RevealStagger as="ul" className="pricing-benefits-list" stagger={0.055} delayChildren={0.05}>
              {benefits.map((text) => (
                <RevealItem as="li" key={text}>
                  <Check size={18} className="pricing-check" strokeWidth={2.5} aria-hidden />
                  <span>{text}</span>
                </RevealItem>
              ))}
            </RevealStagger>
            <div className="pricing-we-ask">
              <h4>We ask for</h4>
              <p>
                Honest feedback in the first 60 days · One short check-in or survey · Permission to share your story
                (anonymized is fine) · Beta patience while we ship fast
              </p>
            </div>
          </Reveal>

          <Reveal as="div" delay={0.14} y={40} duration={0.62}>
            <div id="get-my-mate" className="pricing-cta-card">
              <div className="pricing-cta-top">
                <span className="pricing-cta-label">Beta pricing</span>
                <div className="pricing-spots">
                  <span className="pricing-spots-num">10</span>
                  <span className="pricing-spots-text">of 10 spots</span>
                </div>
              </div>

              <div className="pricing-tiers">
                <div className="pricing-tier">
                  <span className="pricing-tier-name">Stock</span>
                  <div className="pricing-tier-prices">
                    <span className="pricing-tier-new">$149</span>
                    <span className="pricing-tier-old">$297</span>
                  </div>
                </div>
                <div className="pricing-tier-divider" aria-hidden />
                <div className="pricing-tier">
                  <span className="pricing-tier-name">Custom</span>
                  <div className="pricing-tier-prices">
                    <span className="pricing-tier-new">$299</span>
                    <span className="pricing-tier-old">$597</span>
                  </div>
                </div>
              </div>
              <p className="pricing-sub-note">Then $19/mo — locked in for life</p>

              <button type="button" className="pricing-apply-btn">
                Apply for a founding spot
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default PricingBetaSection;
