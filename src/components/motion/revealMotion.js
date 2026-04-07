/** Calm deceleration — reads “premium” without feeling bouncy */
export const revealEase = [0.22, 1, 0.36, 1];

/** Reveal when entering view; stays visible after (no hide on scroll-away) */
export const revealViewport = {
  once: true,
  margin: '-48px 0px -10% 0px',
  amount: 0.15,
};

export function revealTransition(duration, delay, reduce) {
  return {
    duration: reduce ? 0 : duration,
    delay: reduce ? 0 : delay,
    ease: revealEase,
  };
}
