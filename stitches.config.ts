import { createStyled } from '@stitches/react';

export const { styled, css } = createStyled({
  prefix: '',
  tokens: {
    fonts: {
      $system: 'system-ui',
    },
    colors: {
      $hiContrast: 'hsl(206,10%,5%)',
      $loContrast: 'white',
    },
    fontSizes: {
      $1: '13px',
      $2: '15px',
      $3: '17px',
    },
  },
  breakpoints: {
    bp1: (rule) => `@media (max-width: 640px) { ${rule} }`,
    bp2: (rule) => `@media (min-width: 768px) { ${rule} }`,
    bp3: (rule) => `@media (min-width: 1024px) { ${rule} }`,
    bp4: (rule) => `@media (min-width: 1280px) { ${rule} }`,
  },
  utils: {},
});

