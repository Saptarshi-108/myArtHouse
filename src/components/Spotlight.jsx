import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { keyframes } from '@mui/system';
// I'm gonna add this feature, 
// Define the animation for the spotlight effect
const spotlightAnimation = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0;
  }
`;

/**
 * A component that recreates the Tailwind CSS spotlight effect using Material-UI.
 * The spotlight effect is created with a pseudo-element and a radial gradient.
 */
export default function SpotlightMUIPage() {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        height: '40rem',
        width: '100%',
        overflow: 'hidden',
        borderRadius: '8px',
        bgcolor: 'rgb(14, 14, 14)', // Black-like color
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'sans-serif',
      }}
    >
      {/* Background grid pattern */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundSize: '40px 40px',
          backgroundImage: 'linear-gradient(to right, #171717 1px, transparent 1px), linear-gradient(to bottom, #171717 1px, transparent 1px)',
          userSelect: 'none',
        }}
      />

      {/* The spotlight element, created with a pseudo-element for a single `Box` */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) scale(0.8)',
          width: { xs: '800px', md: '1200px' },
          height: { xs: '800px', md: '1200px' },
          background: 'radial-gradient(circle, #ffffff, transparent 70%)',
          opacity: 0,
          animation: `${spotlightAnimation} 5s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
          pointerEvents: 'none',
        }}
      />

      {/* Content container */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 10,
          mx: 'auto',
          width: '100%',
          maxWidth: '1280px', // Corresponds to max-w-7xl in Tailwind
          p: 4,
          pt: { xs: '20px', md: '0px' },
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            textAlign: 'center',
            fontSize: { xs: '2.25rem', md: '4.5rem' }, // Corresponds to text-4xl and md:text-7xl
            fontWeight: 'bold',
            background: 'linear-gradient(to bottom, #f5f5f5, #a3a3a3)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            bgcolor: 'rgba(0,0,0,0.5)', // bg-opacity-50
          }}
        >
          Spotlight <br /> is the new trend.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mx: 'auto',
            mt: 4,
            maxWidth: '560px', // Corresponds to max-w-lg
            textAlign: 'center',
            fontSize: '1rem',
            fontWeight: 'normal',
            color: '#a3a3a3', // neutral-300
          }}
        >
          Spotlight effect is a great way to draw attention to a specific part
          of the page. Here, we are drawing the attention towards the text
          section of the page. I don&apos;t know why but I&apos;m running out of
          copy.
        </Typography>
      </Box>
    </Box>
  );
}