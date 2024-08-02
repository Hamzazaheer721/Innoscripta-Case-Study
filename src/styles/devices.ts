export const size: Record<string, number> = {
  xs: 0,
  sm: 360,
  md: 640,
  lg: 968,
  xl: 1200,
  xxl: 1500,
};

export const device = {
  tiny: `(min-width: ${size.xs}px) and (max-width: ${size.sm - 1}px)`,
  mobile: `(min-width: ${size.sm}px) and (max-width: ${size.md - 1}px)`,
  tablet: `(min-width: ${size.md}px) and (max-width: ${size.lg - 1}px)`,
  laptop: `(min-width: ${size.lg}px) and (max-width: ${size.xl - 1}px)`,
  desktop: `(min-width: ${size.xl}px) and (max-width: ${size.xxl - 1}px)`,
  desktop1080p: `(min-width: ${size.xxl}px) `,
};
