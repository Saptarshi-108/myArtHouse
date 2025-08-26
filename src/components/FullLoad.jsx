import * as React from 'react';
import { useState, useEffect } from 'react';

export default function FullLoad({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
      @keyframes l12 {
        0%   {background-position: calc(0*100%/5) 100%,calc(1*100%/5)   0%,calc(2*100%/5) 100%,calc(3*100%/5)   0%,calc(4*100%/5) 100%,calc(5*100%/5)   0%}
        16.67% {background-position: calc(0*100%/5)   0%,calc(1*100%/5)   0%,calc(2*100%/5) 100%,calc(3*100%/5)   0%,calc(4*100%/5) 100%,calc(5*100%/5)   0%}
        33.33% {background-position: calc(0*100%/5)   0%,calc(1*100%/5) 100%,calc(2*100%/5) 100%,calc(3*100%/5)   0%,calc(4*100%/5) 100%,calc(5*100%/5)   0%}
        50%    {background-position: calc(0*100%/5)   0%,calc(1*100%/5) 100%,calc(2*100%/5)   0%,calc(3*100%/5)   0%,calc(4*100%/5) 100%,calc(5*100%/5)   0%}
        66.67% {background-position: calc(0*100%/5)   0%,calc(1*100%/5) 100%,calc(2*100%/5)   0%,calc(3*100%/5) 100%,calc(4*100%/5) 100%,calc(5*100%/5)   0%}
        83.33% {background-position: calc(0*100%/5)   0%,calc(1*100%/5) 100%,calc(2*100%/5)   0%,calc(3*100%/5) 100%,calc(4*100%/5)   0%,calc(5*100%/5)   0%}
        100%   {background-position: calc(0*100%/5)   0%,calc(1*100%/5) 100%,calc(2*100%/5)   0%,calc(3*100%/5) 100%,calc(4*100%/5)   0%,calc(5*100%/5) 100%}
      }
      .hide-scrollbar::-webkit-scrollbar { display: none; }
      .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    `;
    document.head.appendChild(styleTag);
    return () => document.head.removeChild(styleTag);
  }, []);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  // lock/unlock body scroll when loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isLoading]);

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

const containerStyles = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const loadingScreenStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: '#2a6aa5ff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 999999
};

const loaderStyles = {
  width: '220px',
  height: '25px',
  background: `
    linear-gradient(#000 50%, #0000 0),
    linear-gradient(#0000 50%, #000 0),
    linear-gradient(#000 50%, #0000 0),
    linear-gradient(#0000 50%, #000 0),
    linear-gradient(#000 50%, #0000 0),
    linear-gradient(#0000 50%, #000 0)
    #eaf606ff`,
  backgroundSize: 'calc(100%/6 + 1px) 200%',
  backgroundRepeat: 'no-repeat',
  animation: 'l12 1s infinite'
};
