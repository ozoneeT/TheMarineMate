import React from 'react';
import { Reveal, RevealHeading, RevealItem, RevealStagger } from './motion/Reveal';
import './HowItWorksSection.css';

const needPoints = [
  {
    index: '01',
    title: "Manuals Don't Answer Questions",
    body:
      "Your boat came with a binder. It doesn't know your engine hours, your specific configuration, or what you tried last time. Your Mate does.",
  },
  {
    index: '02',
    title: "Marine Techs Aren't Available at 3am",
    body:
      "Problems don't wait for business hours. Your Mate is on call whenever you need it — at the dock, at anchor, or halfway through a passage.",
  },
  {
    index: '03',
    title: "Generic AI Doesn't Know Your Boat",
    body:
      "ChatGPT doesn't know you have a bow thruster, a specific engine, and 2,200 hours on the clock. Your Mate knows all of it — and remembers every conversation you've had with it.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="why-marine-mate" className="how-section" aria-labelledby="why-marine-heading">
      <div className="how-section__inner how-section__inner--combined">
        <div className="how-content">
          <RevealHeading as="h2" id="why-marine-heading" className="how-title" y={30} duration={0.64}>
            Why <span className="how-title-accent">Marine Mate</span>
          </RevealHeading>

          <RevealStagger as="div" className="how-story" stagger={0.1} delayChildren={0.08}>
            <RevealItem as="p">
              Every boat owner knows the feeling. Something's wrong, the clock is ticking, and you're buried in manuals
              that don't know anything about your boat.
            </RevealItem>
            <RevealItem as="p">
              That's exactly where I was — standing on our dock while Chad and his crew dug through the engine compartment
              trying to figure out why our boat wouldn't start. I wanted to help. What I needed was something that knew our
              vessel — not just the manufacturer specs, but our actual setup, our components, our history.
            </RevealItem>
            <RevealItem as="p">
              So I built it. The Marine Mate was born from that afternoon, and from there, Intelligent Mate grew — AI copilots
              for every kind of asset owner who's ever been stuck without answers when it matters most.
            </RevealItem>
          </RevealStagger>
        </div>

        <div id="why-your-boat-needs-this" className="how-needs" aria-labelledby="why-need-heading">
          <header className="how-needs-header">
            <RevealHeading as="h3" id="why-need-heading" className="how-needs-title" delay={0} y={24}>
              Why Your Boat Needs This.
            </RevealHeading>
            <Reveal as="p" className="how-needs-lead" delay={0.08} y={18} duration={0.52}>
              Everything else you own has an expert on call. Your boat should too.
            </Reveal>
          </header>

          <RevealStagger as="ol" className="how-needs-list" stagger={0.12} delayChildren={0.05}>
            {needPoints.map((point) => (
              <RevealItem as="li" key={point.index} className="how-needs-item">
                <span className="how-needs-bg-num" aria-hidden>
                  {point.index}
                </span>
                <div className="how-needs-item-copy">
                  <h4 className="how-needs-item-title">{point.title}</h4>
                  <p>{point.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
