export let figmaBaseWidth = 1490;

if( window.innerWidth < 800) {
  figmaBaseWidth = 560;
}

export const px = (valuePx: number): number => {
  const scale = window.innerWidth / figmaBaseWidth;
  return valuePx * scale;
};

export const metrics = {
  px,
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
  maxWidth: '1200px',
};
