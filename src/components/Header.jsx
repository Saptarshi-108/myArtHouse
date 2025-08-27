import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";

export function HideOnScroll({ children, timeout = 800 }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 400,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger} timeout={timeout}>
      {children}
    </Slide>
  );
}


HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  timeout: PropTypes.number,
};

function Header() {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll>
        <AppBar
          color="primary"
          sx={{
            backgroundColor: "#844d36",
            boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
          }}
        >
          <Toolbar
            sx={{
              alignItems: "center",
              justifyContent: "center",
              py: { xs: 1, sm: 1.5, md: 2 }, // toolbar padding adjusts with screen
            }}
          >
            <Typography
              variant="h1"
              component="div"
              sx={{
                fontFamily: "fantasy",
                fontWeight: "regular",
                fontSize: {
                  xs: "8vw", // extra small screens
                  sm: "6vw", // small
                  md: "5vw", // medium
                  lg: "10vw", // large+
                },
                lineHeight: 1.1,
                color: "#fbe9d0",
                textAlign: "center",
              }}
            >
              ᵐʸArtᴴᵒᵘˢᵉ
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* Spacer so content below doesn't overlap header */}
      <Toolbar />
      <Container />
    </React.Fragment>
  );
}

export default Header;
