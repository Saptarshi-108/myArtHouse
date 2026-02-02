import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#8e8268",
        color: "white",
        textAlign: "center",
        padding: "16px",
        position: "relative",
        bottom: 0,
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Stack
        direction="column" // A parent Stack to manage the vertical layout
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          spacing={4}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="body1">About Me</Typography>
          <Typography variant="body1">Contact</Typography>
          <Typography variant="body1">Privacy Policy</Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={4}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="body2">
            <a href="mailto:saptarshimandal1.618@gmail.com" style={{ color: 'white', textDecoration: 'none' }}>
              saptarshimandal1.618@gmail.com
            </a>
          </Typography>
          {/* Correct way to make a React icon a link */}
          <a href="https://www.instagram.com/doodledude_7" target="_blank" rel="noopener noreferrer">
            <FaInstagram style={{ fontSize: "24px", color: "white" }} />
          </a>
          <a href="https://github.com/Saptarshi-108" target="_blank" rel="noopener noreferrer">
            <FaGithub style={{ fontSize: "24px", color: "white" }} />
          </a>
          {/* <a href="https://www.youtube.com/@DoodleDude7" target="_blank" rel="noopener noreferrer">
            <FaYoutube style={{ fontSize: "24px", color: "white" }} />
          </a> */}
          <Box component="a"
     href="https://www.youtube.com/@DoodleDude7"
     target="_blank"
     rel="noopener noreferrer"
     sx={{ color: "white" }}>
  <FaYoutube size={24} />
</Box>

        </Stack>
      </Stack>
    </Box>
  );
};


export default Footer;



