import React from 'react';
import { MessageCircle, Ship, Sparkles } from 'lucide-react';
import { Reveal, RevealHeading, RevealItem, RevealStagger } from './motion/Reveal';
import './VesselTrySection.css';

const steps = [
  {
    title: 'You upload',
    body: 'Manuals, schematics, service history, photos — everything that defines your boat.',
  },
  {
    title: 'We train',
    body: 'We build a private knowledge layer and tune responses to your systems and terminology.',
  },
  {
    title: 'You ask',
    body: 'Get troubleshooting, part numbers, procedures, and inventory checks — whenever you need them.',
  },
];

const vesselTypes = ['Sail & power', 'Bluewater & coastal', 'Stock or heavily customized', 'Owner-operated or professional crew'];

const VesselTrySection = () => {
  return (
    <section id="built-for-any-vessel" className="vessel-try-section" aria-label="Built for any vessel and get started">
      <div className="vessel-try-inner">
        <Reveal as="div" className="vessel-try-built" y={36} duration={0.6}>
          <span className="vessel-try-eyebrow">Universal fit</span>
          <h2 className="vessel-try-title">Built for any vessel</h2>
          <p className="vessel-try-intro">
            Marine Mate isn’t tied to one manufacturer or hull type. Once we know your equipment, history, and how you
            use the boat, the copilot speaks your language — from trawler to cat, weekend cruiser to passage-maker.
          </p>
          <RevealStagger as="ul" className="vessel-try-tags" stagger={0.055} delayChildren={0.04}>
            {vesselTypes.map((t) => (
              <RevealItem as="li" key={t}>
                {t}
              </RevealItem>
            ))}
          </RevealStagger>
        </Reveal>

        <Reveal as="div" className="vessel-try-panel" delay={0.08} y={40} duration={0.62}>
          <p className="vessel-try-panel-label">How it works</p>
          <div className="vessel-try-steps">
            <div className="vessel-try-track" aria-hidden>
              <div className="vessel-try-track-fill" />
            </div>
            <RevealStagger as="ol" className="vessel-try-step-list" stagger={0.1} delayChildren={0.06}>
              {steps.map((step, i) => (
                <RevealItem as="li" key={step.title} className="vessel-try-step">
                  <span className="vessel-try-step-index">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </Reveal>

        <div id="try-now" className="vessel-try-now">
          <Reveal as="div" className="vessel-try-now-copy" y={32} duration={0.58}>
            <span className="vessel-try-eyebrow vessel-try-eyebrow--inline">
              <Sparkles size={14} aria-hidden />
              No guesswork
            </span>
            <RevealHeading as="h2" className="vessel-try-subtitle" delay={0.05} y={22}>
              Try it right now
            </RevealHeading>
            <Reveal as="p" delay={0.12} y={20} duration={0.5}>
              Join the founding boats, upload your docs, and see your first answers in days. Beta pricing keeps setup
              affordable while we tighten the product with your feedback.
            </Reveal>
          </Reveal>
          <Reveal as="div" className="vessel-try-now-actions" delay={0.14} y={24} duration={0.52}>
            <a href="#get-my-mate" className="vessel-try-btn vessel-try-btn--primary">
              Apply for beta — 50% off
            </a>
            <a href="#pricing" className="vessel-try-btn vessel-try-btn--ghost">
              View founding benefits
            </a>
          </Reveal>
        </div>

        <Reveal as="div" id="chat" className="vessel-try-chat" delay={0.06} y={36} duration={0.6}>
          <div className="vessel-try-chat-icon" aria-hidden>
            <MessageCircle size={28} strokeWidth={2} />
          </div>
          <div className="vessel-try-chat-copy">
            <RevealHeading as="h2" className="vessel-try-subtitle" delay={0} y={20}>
              Chat with your mate
            </RevealHeading>
            <Reveal as="p" delay={0.1} y={18} duration={0.5}>
              Your private console is where every conversation stays grounded in <em>your</em> manuals, inventory, and
              history. Founding captains get early access as soon as their mate is trained.
            </Reveal>
          </div>
          <a href="#get-my-mate" className="vessel-try-btn vessel-try-btn--primary">
            <Ship size={18} aria-hidden />
            Get my Marine Mate
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default VesselTrySection;
