import * as React from 'react';
import { keyframes, styled } from '@mui/system';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';

// The typing effect: animates the width from 0 to 100%
const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

// The typewriter cursor effect: animates the border color to create a blinking effect
const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: orange; }
`;

/**
 * A styled Box component that applies the typewriter animation to its children.
 * This component handles the CSS for the typewriter effect, making it reusable.
 */
const TypewriterBox = styled(Box)(({ theme }) => ({
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  // Keep margin: 'auto' to center the box
  margin: 'auto',
  // You can set the border right here if you want the cursor
  borderRight: '0.15em solid orange',
  letterSpacing: '0.15em',
  animation:
    // We add a key to the parent Box to re-trigger the animation on text change
    // This allows the animation to play for each new line of text.
    `${typing} 0.8s steps(20, end), ` + // Reduced from 1.5s to 0.8s
    `${blinkCaret} 0.75s step-end infinite`,
  // Adjust width for responsiveness
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

/**
 * The Typewriter component to display a series of texts with a typing animation.
 * The component will cycle through the text array provided.
 * @param {object} props The component props.
 * @param {string[]} props.textArray The array of strings to display.
 * @param {object} [props.textProps] Props to pass to the inner Typography component.
 */
export default function Typewriter({ textArray, textProps }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    // Set a timeout to cycle to the next line of text
    // The delay should be greater than the animation duration to prevent flickering.
    const timer = setTimeout(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 2500); // Reduced from 4500ms to 1500ms for a faster cycle

    // Cleanup the timer when the component unmounts or the index changes
    return () => clearTimeout(timer);
  }, [currentTextIndex, textArray]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'fantasy',
        fontSize: 40,
        width: '100%', // Ensure the container takes full width
      }}
    >
      <TypewriterBox key={currentTextIndex}>
        <Typography
          component="h1"
          sx={{
            fontSize: '2.5rem', // Make it larger
            fontWeight: 700, // Make it bolder
            textAlign: 'center', // Center the text within the TypewriterBox
            whiteSpace: 'pre', // Ensures spacing for each character is preserved
            '@media (min-width:600px)': {
              fontSize: '3.5rem',
            },
            '@media (min-width:900px)': {
              fontSize: '4.5rem',
            }
          }}
          {...textProps}
        >
          {textArray[currentTextIndex]}
        </Typography>
      </TypewriterBox>
    </Box>
  );
}
