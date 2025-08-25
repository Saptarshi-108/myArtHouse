import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

/**
 * The Intro component displays a biography and a picture in a responsive layout.
 * It's designed to introduce a user with a short bio and an image on the side.
 */
export default function Intro() {
  return (
    <Box
      component="section"
      sx={{
        height: "auto",
        minHeight: "60vw",
        width: "100%",
        backgroundColor: "#474853",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        paddingTop: "10%",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: "2rem",
            color: "white",
          }}
        >
          {/* Left section for the biography text */}
          <Box
            sx={{
              flex: 1,
              textAlign: { xs: "center", md: "left" },
              // To move the text to the left, we can adjust the alignment of the parent box.
              // We'll remove the center alignment and let it default to the left.
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{ fontFamily: "fantasy", fontSize: 60 }}
            >
              নমস্কার !<br /> I am Saptarshi.
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontFamily: "monospace", fontSize: 25, fontWeight: 10 }}
            >
              Beyond the code, I have a second life with a pen and a tablet.
              <br /> I have a passion for sketching and digital illustration. I
              am an aspiring web developer with a knack and appreciation for
              anything beautiful.
              <br /> Building and creating anything is somewhere I find my solace.
            </Typography>
          </Box>

          {/* Right section for the picture */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              flex: 1, // Allow the image box to take up its share of space
            }}
          >
            <Box
              component="img"
              src="https://placehold.co/400x400/3949AB/FFFFFF?text=Alex"
              alt="A picture of me"
              sx={{
                width: "100%",
                maxWidth: "600px",
                height: "auto",
                borderRadius: "12px",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
