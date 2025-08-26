import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { HideOnScroll } from "./Header";
import TypeWriter from "./TypeWriter";
/**
 * The Intro component displays a biography and a picture in a responsive layout.
 * It's designed to introduce a user with a short bio and an image on the side.
 */
const messages = [
  "Hello!",
  "नमस्ते!",
  "নমস্কার!",
  "Привет!",
  "Ciao!",
  "こんにちは！",
  "你好!",
  "Hallo!",
  "வணக்கம்!",
  "안녕하세요!",
  "Hola!",
];
export default function Intro() {
  return (
    <Box
      component="section"
      sx={{
        minHeight: "60vw",
        width: "100%",
        backgroundColor: "#588aabff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        paddingTop: "11%",
        borderRadius: 10,
      }}
    >
      <Container maxWidth="lg">
        <HideOnScroll>
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
                sx={{ fontFamily: "fantasy", fontSize: 60, color: "#f3f325ff" }}
              >
                <TypeWriter textArray={messages}></TypeWriter> I am Saptarshi.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "monospace",
                  fontSize: 25,
                  fontWeight: "bold",
                }}
              >
                Beyond the code, I have a second life with a pen and a tablet.
                <br /> I have a passion for sketching and digital illustration.
                I am an aspiring web developer with a knack and appreciation for
                anything beautiful.
                <br /> Building and creating anything is somewhere I find my
                solace.
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
                src="https://plus.unsplash.com/premium_vector-1689096802077-02c79d04371f?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        </HideOnScroll>{" "}
        <Typography
          variant="body1"
          sx={{
            fontFamily: "monospace",
            fontSize: 40,
            fontWeight: "bold",
            marginTop: 0,
            paddingBottom: "10vw",
            color: "#261616ff",
          }}
        >
          <p>
            Ever since my early sketches of huts, mountains, and rising suns,
            drawing has been my way of expressing what words often can’t. Over
            time, my interest has grown beyond simple sketches into exploring
            digital illustrations, where I enjoy blending creativity with modern
            tools.
          </p>{" "}
          Whether on paper or screen, I have a natural knack for observing
          details and turning them into art that captures mood, movement, and
          imagination.
        </Typography>
        <Box
          component="img"
          src="/pictures/bearded-guy.jpg"
          alt="A sketchy guy's sketch."
          sx={{
            position: "relative",
            inset: 0,
            width: "auto",
            height: "80vw",
            maxWidth: "70vw",
            maxHeight: "70vh",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "12px",
            boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.5)",
            paddingTop: 0,
            marginTop: 0,
            marginBottom: 0,
          }}
        />
      </Container>
    </Box>
  );
}

