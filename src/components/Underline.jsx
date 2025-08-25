import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

/**
 * A styled component that wraps text with an animated, wrapping underline on hover.
 * This component is reusable and can be customized with various props.
 * @param {object} props The component props.
 * @param {React.ReactNode} props.children The content to be wrapped.
 * @param {number} [props.fontSize=16] The font size of the text.
 * @param {string} [props.fontWeight='normal'] The font weight of the text.
 * @param {string} [props.fontFamily='inherit'] The font family of the text.
 */
const Underline = styled(Box)(({ fontSize, fontWeight, fontFamily }) => ({
  // We use `display: 'inline'` to ensure the underline wraps with the text.
  display: 'inline',
  cursor: 'pointer',
  // Set font styles based on props.
  fontSize: `${fontSize}px`,
  fontWeight,
  fontFamily,
  // The animated underline effect is created using a linear gradient on the background.
  background: `
    linear-gradient(to right, rgba(100, 200, 200, 1), rgba(100, 200, 200, 1)),
    linear-gradient(to right, rgba(118, 47, 45, 1), rgba(127, 126, 126, 1), rgba(44, 117, 190, 1))
  `,
  backgroundSize: '100% 0.1em, 0 0.1em',
  backgroundPosition: '100% 100%, 0 100%',
  backgroundRepeat: 'no-repeat',
  // The transition animates the change in background size.
  transition: 'background-size 400ms',
  // The hover effect changes the background size to reveal the second gradient.
  '&:hover, &:focus': {
    backgroundSize: '0 0.1em, 100% 0.1em',
  },
}));

export default Underline;