import { useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

/** Viewport max-width matching mobile layout + motion-off breakpoint */
export const MOTION_DISABLED_MAX_WIDTH = 768;

/**
 * True when entrance / scroll-linked motion should be skipped: prefers-reduced-motion
 * or narrow viewport (mobile), so the UI feels instant and scroll stays smooth.
 */
export function useMotionDisabled() {
  const prefersReduced = useReducedMotion();
  const [isNarrow, setIsNarrow] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia(`(max-width: ${MOTION_DISABLED_MAX_WIDTH}px)`).matches
      : false
  );

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOTION_DISABLED_MAX_WIDTH}px)`);
    const sync = () => setIsNarrow(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  return Boolean(prefersReduced || isNarrow);
}
