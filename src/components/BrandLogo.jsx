import React from 'react';

const LOGO_SRC = '/marine-mate-logo.png';

/**
 * Site wordmark icon (transparent PNG). Use everywhere the brand glyph appears.
 */
export function BrandLogo({
  className = '',
  width = 32,
  height = 32,
  alt = 'Marine Mate',
  loading = 'lazy',
  ...rest
}) {
  return (
    <img
      src={LOGO_SRC}
      alt={alt}
      width={width}
      height={height}
      className={className}
      decoding="async"
      loading={loading}
      {...rest}
    />
  );
}

export { LOGO_SRC };
