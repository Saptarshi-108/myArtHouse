import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Underline from "./Underline.jsx";
import Intro from "./Intro";

// Import the new components
import PicWindow from "./PicWindow.jsx";

/**
 * The main application component that includes a loading screen and an image gallery.
 */
export default function Picture() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  // State to manage the dialog box for the images
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ url: "", title: "" });

  // Modified to also pass the title
  const handleClickOpen = (item) => {
    setSelectedImage({ url: item.img, title: item.title });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage({ url: "", title: "" });
  };

  const MainContent = () => (
    <Box
      className="hide-scrollbar" // This is the correct way to apply the CSS.
      sx={{
        width: "100%",
        height: "100%",
        paddingLeft: { xs: "2%", sm: "5%", md: "10%" },
        paddingRight: { xs: "2%", sm: "5%", md: "10%" },
        paddingBottom: "10%",
        paddingTop: "1%",
        backgroundColor: "#24242aff",
        scrollBehavior: "smooth",
      }}
    >
      <Intro />
      <h3
        style={{
          textAlign: "center",
          fontFamily: "fantasy",
          paddingBottom: "5%",
          fontSize: 120,
          fontWeight: 25,
          color: "#f3f325ff",
        }}
      >
        <Underline sx={{ height: 5 }}>My Art Pieces</Underline>
      </h3>
      <ImageList
        variant="masonry"
        cols={matches ? 3 : 2}
        gap={16}
        sx={{
          marginTop: 0,
          padding: 4,
          overflow: "hidden",
          backgroundColor: "#f0ff8dff",
          borderRadius: 15,
        }}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img} onClick={() => handleClickOpen(item)}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{
                cursor: "pointer",
                borderRadius: 15,
                // border: "3px solid #000", 
              }}
            />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>{item.author}</span>}
              position="below"
              sx={{
                "& .MuiImageListItemBar-title": {
                  fontSize: 20,
                  fontFamily: "monospace",
                  fontWeight: "bold",
                },
                "& .MuiImageListItemBar-subtitle": {
                  fontSize: 15,
                  fontFamily: "monospace",
                  fontWeight: "regular",
                },
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>

      <PicWindow
        open={open}
        onClose={handleClose}
        imageUrl={selectedImage.url}
        title={selectedImage.title}
      />
    </Box>
  );

  return <MainContent />;
}

const itemData = [
  {
    img: "src/pictures/avtar.jpg",
    title: "Team Avatar",
    author: "Some of my favourite characters from ATLA",
  },
  {
    img: "src/pictures/Batman.png",
    title: "Batman",
    author: "The Dark knight",
  },
  {
    img: "src/pictures/bobross.png",
    title: "Bob Ross",
    author: "One of my favourite artists... Bob Ross",
  },
  {
    img: "src/pictures/BobRossArt.png",
    title: "The Mountains",
    author: "From Bob Ross",
  },
  {
    img: "src/pictures/cool.jpg",
    title: "The Cool guy",
    author: "Doodling in boring classes...",
  },
  {
    img: "src/pictures/ACvalhalla.png",
    title: "Viking warrior",
    author: "Take us to Valhalla!",
  },
  {
    img: "src/pictures/dark is the night.png",
    title: "Dark is the Night",
    author: "A Soviet Rifleman smoking in the trench",
  },
  {
    img: "src/pictures/ghibli howling castle .jpg",
    title: "Ghibli Howl's Castle",
    author: "from Howl's Moving Castle (Hayao Miyazaki)",
  },
  {
    img: "src/pictures/IMG_20250516_202742.jpg",
    title: "Solitary Knight",
    author: "Lonely knight mourning his fallen brothers.",
  },
  {
    img: "src/pictures/Kedarnath.png",
    title: "Kedarnath Mandir",
    author: "Om namah shivay (ॐ नमः शिवाय)",
  },
  {
    img: "src/pictures/IMG_20250711_191225.jpg",
    title: "H.P. Lovecraft",
    author: "Father of Cosmic Horror",
  },
  {
    img: "src/pictures/old and young.jpg",
    title: "Old and Young",
    author: "Am I bored?",
  },
  {
    img: "src/pictures/robot.jpg",
    title: "Smokin' Hot",
    author: "This gladiator has a hot sword.LITERALLY.",
  },
  {
    img: "src/pictures/shiva.png",
    title: "Mahadev",
    author: "Har Har Mahadev",
  },
  {
    img: "src/pictures/sketch.jpg",
    title: "Portrait sketches",
    author: "Sketching for practice",
  },
  {
    img: "src/pictures/takehiko inoue.jpg",
    title: "Takehiko Inoue",
    author: "Author and Illustrator of Vagabond",
  },
  {
    img: "src/pictures/SatyajitRay.png",
    title: "Satyajit Ray",
    author: "Eminent Artist,Oscar winning Film-Director,Author.",
  },
  {
    img: "src/pictures/Ronin.jpg",
    title: "Lone Samurai",
    author: "Two Swords - One for man, another for monsters.",
  },
    {
    img: "src/pictures/Budhha.jpg",
    title: "Budhha in bliss",
    author: "Buddham Saranam Gachami",
  },
    {
    img: "src/pictures/Ghost.jpg",
    title: "Ghost (COD)",
    author: "Lt. Simon 'Ghost' Riley (TF141)",
  },
    {
    img: "src/pictures/IMG_20250826_193049.jpg",
    title: "Don't mess with me",
    author: "Sketch of a bearded guy.",
  },
      {
    img: "src/pictures/TheJourney.jpg",
    title: "The Journey",
    author: "Journey through open barren lands",
  },
        {
    img: "src/pictures/darkcorridoor.jpg",
    title: "The Dark Corridor",
    author: "Dark Corridor in a Hospital (Pic.)",
  },
];

