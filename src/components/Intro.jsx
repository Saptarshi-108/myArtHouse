import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { HideOnScroll } from "./Header";
import TypeWriter from "./TypeWriter";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer"; 


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

const paragraphVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function AnimatedParagraph({ text, delay = 0 }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={paragraphVariants}
      transition={{ duration: 0.9, ease: "easeOut", delay }}
    >
      <Typography
        variant="body1"
        sx={{
          fontFamily: "monospace",
          fontSize: { xs: 16, sm: 20, md: 26, lg: 36 },
          fontWeight: "bold",
          mb: 3,
          color: "#261616ff",
        }}
      >
        {text}
      </Typography>
    </motion.div>
  );
}

export default function Intro() {
  const paragraphs = [
    "Ever since my early sketches of huts, mountains, and rising suns, drawing has been my way of expressing what words often can’t.",
    "Over time, my interest has grown beyond simple sketches into exploring digital illustrations, where I enjoy blending creativity with modern tools.",
    "Whether on paper or screen, I have a natural knack for observing details and turning them into art that captures mood, movement, and imagination.",
  ];

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
        px: { xs: 2, sm: 4 },
        pt: { xs: "22%", sm: "16%", md: "11%" },
        borderRadius: 3,
      }}
    >
      <Container maxWidth="lg">
        {/* Greeting + Bio + Image */}
        <HideOnScroll timeout={1200}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: { xs: "1.5rem", md: "2rem" },
              color: "white",
              mb: { xs: 3, md: 6 },
            }}
          >
            {/* Left (Bio text) */}
            <Box
              sx={{
                flex: 1,
                textAlign: { xs: "center", md: "left" },
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              <Typography
                variant="h3"
                component="h1"
                gutterBottom
                sx={{
                  fontFamily: "fantasy",
                  fontSize: { xs: 26, sm: 34, md: 48, lg: 60 },
                  color: "#f3f325ff",
                }}
              >
                <TypeWriter textArray={messages} /> I am Saptarshi.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "monospace",
                  fontSize: { xs: 14, sm: 18, md: 22, lg: 25 },
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

            {/* Right (Profile Image) */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                flex: 1,
              }}
            >
              <Box
                component="img"
                src="https://plus.unsplash.com/premium_vector-1689096802077-02c79d04371f?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0"
                alt="A picture of me"
                sx={{
                  width: "100%",
                  maxWidth: { xs: "85%", sm: "420px", md: "600px" },
                  height: "auto",
                  borderRadius: "12px",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
                }}
              />
            </Box>
          </Box>
        </HideOnScroll>

        {/* Extra bio text with scroll in/out */}
        <Box sx={{ mt: 2, pb: { xs: "20vw", sm: "15vw", md: "10vw" } }}>
          {paragraphs.map((text, i) => (
            <AnimatedParagraph key={i} text={text} delay={i * 0.4} />
          ))}
        </Box>

        {/* Art preview image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }} // no "once", so it repeats
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <Box
            component="img"
            src="/pictures/bearded-guy.jpg"
            alt="A sketchy guy's sketch."
            sx={{
              position: "relative",
              inset: 0,
              width: "auto",
              height: "80vw",
              maxWidth: { xs: "90vw", sm: "70vw" },
              maxHeight: { xs: "60vh", md: "70vh" },
              margin: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "12px",
              boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.5)",
              mb: "5vw",
            }}
          />
        </motion.div>
      </Container>
    </Box>
  );
}
