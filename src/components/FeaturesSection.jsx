import React from 'react';
import { Wrench, BellRing, Database, PackageSearch, Users, ShieldCheck, Zap } from 'lucide-react';
import { Reveal, RevealHeading, RevealItem, RevealStagger } from './motion/Reveal';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Wrench size={22} strokeWidth={2} />,
      title: 'Instant troubleshooting',
      description:
        'Ask why a system misbehaves and get steps tuned to your exact equipment — not a generic manual.',
      variant: 'featured',
      span: 'wide',
    },
    {
      icon: <BellRing size={22} strokeWidth={2} />,
      title: 'Smart maintenance',
      description: 'Reminders from engine hours and your calendar — oil, zincs, filters, and more.',
      variant: 'default',
      span: 'narrow',
    },
    {
      icon: <Database size={22} strokeWidth={2} />,
      title: 'Boat memory',
      description: 'Every quirk, fix, and upgrade — stored and searchable in seconds.',
      variant: 'default',
      span: 'narrow',
    },
    {
      icon: <PackageSearch size={22} strokeWidth={2} />,
      title: 'Parts inventory',
      description: 'Know which spares are on board: filters, fuses, impellers, and custom lists.',
      variant: 'default',
      span: 'narrow',
      anchorId: 'inventory',
    },
    {
      icon: <Users size={22} strokeWidth={2} />,
      title: 'Seamless handoff',
      description: 'Share context with co-owners, crew, or buyers — the knowledge stays with the boat.',
      variant: 'default',
      span: 'narrow',
    },
    {
      icon: <ShieldCheck size={22} strokeWidth={2} />,
      title: 'System-specific answers',
      description: 'Grounded in your manuals, schematics, and photos — not open-web guesswork.',
      variant: 'dark',
      span: 'narrow',
    },
    {
      icon: <Zap size={22} strokeWidth={2} />,
      title: '24/7 on call',
      description: 'A marine-savvy copilot with perfect recall — even at anchor at 3am.',
      variant: 'dark',
      span: 'narrow',
    },
  ];

  return (
    <section id="what-marine-mate-does" className="features-section">
      <div className="features-section__inner">
        <div className="section-header">
          <Reveal as="div" duration={0.48} y={20}>
            <span className="section-eyebrow">Capabilities</span>
          </Reveal>
          <RevealHeading as="h2" className="section-title" delay={0.06} y={26}>
            What Your Marine Mate Does
          </RevealHeading>
          <Reveal as="p" className="section-lead" delay={0.12} duration={0.55} y={22}>
            Like having a technician who knows your hull number — trained on your vessel, available on demand.
          </Reveal>
        </div>

        <RevealStagger as="div" className="features-grid" delayChildren={0.06} stagger={0.065}>
          {features.map((feature) => (
            <RevealItem
              as="article"
              key={feature.title}
              id={feature.anchorId}
              className={`feature-card feature-card--${feature.variant} feature-card--${feature.span}`}
            >
              <div className="feature-icon-wrap">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
};

export default FeaturesSection;
