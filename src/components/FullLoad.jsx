import * as React from 'react';
import { useState, useEffect } from 'react';

/**
 * A component that handles a full-screen loading animation.
 * It renders its children only after a simulated loading delay.
 * @param {object} props The component props.
 * @param {React.ReactNode} props.children The content to be shown after the loading animation.
 */
export default function FullLoad({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  // This useEffect injects the CSS for the initial loading screen animation and hides the scrollbar.
  useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
      /* Loading animation CSS */
      @keyframes l12 {
        0%   {background-position: calc(0*100%/5) 100%,calc(1*100%/5)   0%,calc(2*100%/5) 100%,calc(3*100%/5)   0%,calc(4*100%/5) 100%,calc(5*100%/5)   0%}
        16.67% {background-position: calc(0*100%/5)   0%,calc(1*100%/5)   0%,calc(2*100%/5) 100%,calc(3*100%/5)   0%,calc(4*100%/5) 100%,calc(5*100%/5)   0%}
        33.33% {background-position: calc(0*100%/5)   0%,calc(1*100%/5) 100%,calc(2*100%/5) 100%,calc(3*100%/5)   0%,calc(4*100%/5) 100%,calc(5*100%/5)   0%}
        50%    {background-position: calc(0*100%/5)   0%,calc(1*100%/5) 100%,calc(2*100%/5)   0%,calc(3*100%/5)   0%,calc(4*100%/5) 100%,calc(5*100%/5)   0%}
        66.67% {background-position: calc(0*100%/5)   0%,calc(1*100%/5) 100%,calc(2*100%/5)   0%,calc(3*100%/5) 100%,calc(4*100%/5) 100%,calc(5*100%/5)   0%}
        83.33% {background-position: calc(0*100%/5)   0%,calc(1*100%/5) 100%,calc(2*100%/5)   0%,calc(3*100%/5) 100%,calc(4*100%/5)   0%,calc(5*100%/5)   0%}
        100%   {background-position: calc(0*100%/5)   0%,calc(1*100%/5) 100%,calc(2*100%/5)   0%,calc(3*100%/5) 100%,calc(4*100%/5)   0%,calc(5*100%/5) 100%}
      }
      
      /* CSS to hide the scrollbar for the main content box */
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `;
    document.head.appendChild(styleTag);

    // Clean up the style tag on unmount.
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  // Simulates a loading process and hides the loader after a delay
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 1-second delay to show the animation
  }, []);

  const LoadingScreen = () => (
    <div style={loadingScreenStyles}>
      <div style={loaderStyles}></div>
    </div>
  );

  return (
    <div style={containerStyles}>
      {isLoading ? <LoadingScreen /> : children}
    </div>
  );
}

// Inline styles for the loading screen and loader.
const containerStyles = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
};

const loadingScreenStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: '#2a6aa5ff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 999999,
};

const loaderStyles = {
  width: '120px',
  height: '20px',
  background: `
    linear-gradient(#000 50%, #0000 0),
    linear-gradient(#0000 50%, #000 0),
    linear-gradient(#000 50%, #0000 0),
    linear-gradient(#0000 50%, #000 0),
    linear-gradient(#000 50%, #0000 0),
    linear-gradient(#0000 50%, #000 0)
    #ddd`,
  backgroundSize: 'calc(100%/6 + 1px) 200%',
  backgroundRepeat: 'no-repeat',
  animation: 'l12 1s infinite',
};