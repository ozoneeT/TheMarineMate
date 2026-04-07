import { createElement } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { revealEase, revealTransition, revealViewport } from './revealMotion.js';

function pickMotion(as, fallback) {
  if (typeof as === 'string' && motion[as]) return motion[as];
  return fallback;
}

export function Reveal({ children, className, as = 'div', delay = 0, duration = 0.58, y = 40, ...rest }) {
  const reduce = useReducedMotion();
  const Cmp = pickMotion(as, motion.div);
  return createElement(Cmp, {
    className,
    initial: reduce ? false : { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: revealViewport,
    transition: revealTransition(duration, delay, reduce),
    ...rest,
  }, children);
}

export function RevealHeading({ children, className, as = 'h2', delay = 0, duration = 0.62, y = 32, ...rest }) {
  const reduce = useReducedMotion();
  const Cmp = pickMotion(as, motion.h2);
  return createElement(Cmp, {
    className,
    initial: reduce ? false : { opacity: 0, y, filter: 'blur(10px)' },
    whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
    viewport: revealViewport,
    transition: revealTransition(duration, delay, reduce),
    ...rest,
  }, children);
}

export function RevealStagger({ children, className, stagger = 0.085, delayChildren = 0.08, as = 'div', ...rest }) {
  const reduce = useReducedMotion();
  const Cmp = pickMotion(as, motion.div);
  return createElement(Cmp, {
    className,
    initial: 'hidden',
    whileInView: 'show',
    viewport: revealViewport,
    variants: {
      hidden: {},
      show: {
        transition: {
          staggerChildren: reduce ? 0 : stagger,
          delayChildren: reduce ? 0 : delayChildren,
        },
      },
    },
    ...rest,
  }, children);
}

export function RevealItem({ children, className, as = 'div', ...rest }) {
  const reduce = useReducedMotion();
  const Cmp = pickMotion(as, motion.div);
  return createElement(Cmp, {
    className,
    variants: {
      hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.52, ease: revealEase },
      },
    },
    ...rest,
  }, children);
}
