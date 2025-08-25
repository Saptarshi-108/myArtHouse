import * as React from 'react';
import { useEffect } from 'react';

export default function Loader() {
  useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
      .loader-container {
        display: flex;
        margin-left:55vw;
        height: 100%;
        width: 100%;
      }
      .loader {
        width: 100px;
        aspect-ratio: 1;
        padding: 10px;
        box-sizing: border-box;
        display: grid;
        background: #fff;
        filter: blur(5px) contrast(10);
        mix-blend-mode: darken;
      }
      .loader:before,
      .loader:after{
        content: "";
        grid-area: 1/1;
        background:
          linear-gradient(#000 0 0) left,
          linear-gradient(#000 0 0) right;
        background-size: 20px 40px;
        background-origin: content-box;
        background-repeat: no-repeat;
      }
      .loader:after {
        height: 20px;
        width: 20px;
        margin: auto 0;
        border-radius: 50%;
        background: #000;
        animation: l10 0.7s infinite;
      }
      @keyframes l10{
        90%,100% {transform: translate(300%)}
      }
    `;

    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  );
}
