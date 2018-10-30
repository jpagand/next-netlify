import { css } from 'styled-components';

const sizes = {
  lg: 1200,
  md: 992,
  sm: 768,
};

// Iterate through the sizes and create a media template
const Media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }`;

  return acc;
}, {});

export default Media;
