import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Import fonts
import "@fontsource/merriweather/400.css";
import "@fontsource/merriweather/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";

const theme = createTheme({
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: {
      fontFamily: "'Merriweather', serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Merriweather', serif",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "'Merriweather', serif",
      fontWeight: 700,
    },
    h4: {
      fontFamily: "'Merriweather', serif",
      fontWeight: 700,
    },
    h5: {
      fontFamily: "'Merriweather', serif",
      fontWeight: 700,
    },
    h6: {
      fontFamily: "'Merriweather', serif",
      fontWeight: 700,
    },
    body1: {
      fontFamily: "'Inter', sans-serif",
    },
    body2: {
      fontFamily: "'Inter', sans-serif",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
