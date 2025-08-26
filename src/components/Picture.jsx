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
import PicWindow from "./PicWindow.jsx";

export default function Picture() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ url: "", title: "" });

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
      className="hide-scrollbar"
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
              src={item.img}
              alt={item.title}
              loading="lazy"
              style={{
                cursor: "pointer",
                borderRadius: 15,
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
  { img: "/pictures/avtar.jpg", title: "Team Avatar", author: "Some of my favourite characters from ATLA" },
  { img: "/pictures/batman.png", title: "Batman", author: "The Dark knight" },
  { img: "/pictures/bobross.png", title: "Bob Ross", author: "One of my favourite artists... Bob Ross" },
  { img: "/pictures/bobrossart.png", title: "The Mountains", author: "From Bob Ross" },
  { img: "/pictures/cool.jpg", title: "The Cool guy", author: "Doodling in boring classes..." },
  { img: "/pictures/acvalhalla.png", title: "Viking warrior", author: "Take us to Valhalla!" },
  { img: "/pictures/dark-is-the-night.png", title: "Dark is the Night", author: "A Soviet Rifleman smoking in the trench" },
  { img: "/pictures/ghibli-howling-castle.jpg", title: "Ghibli Howl's Castle", author: "from Howl's Moving Castle (Hayao Miyazaki)" },
  { img: "/pictures/fujikaze.jpg", title: "Fuji Kaze", author: "Shinunoga E-Wa Album Cover (2021)" },
  { img: "/pictures/solitary-knight.jpg", title: "Solitary Knight", author: "Lonely knight mourning his fallen brothers." },
  { img: "/pictures/kedarnath.png", title: "Kedarnath Mandir", author: "Om namah shivay (ॐ नमः शिवाय)" },
  { img: "/pictures/hp-lovecraft.jpg", title: "H.P. Lovecraft", author: "Father of Cosmic Horror" },
  { img: "/pictures/old-and-young.jpg", title: "Old and Young", author: "Am I bored?" },
  { img: "/pictures/robot.jpg", title: "Smokin' Hot", author: "This gladiator has a hot sword. LITERALLY." },
  { img: "/pictures/shiva.png", title: "Mahadev", author: "Har Har Mahadev" },
  { img: "/pictures/sketch.jpg", title: "Portrait sketches", author: "Sketching for practice" },
  { img: "/pictures/takehiko-inoue.jpg", title: "Takehiko Inoue", author: "Author and Illustrator of Vagabond" },
  { img: "/pictures/satyajit-ray.png", title: "Satyajit Ray", author: "Eminent Artist, Oscar winning Film-Director, Author." },
  { img: "/pictures/ronin.jpg", title: "Lone Samurai", author: "Two Swords - One for man, another for monsters." },
  { img: "/pictures/buddha.jpg", title: "Buddha in bliss", author: "Buddham Saranam Gachami" },
  { img: "/pictures/ghost.jpg", title: "Ghost (COD)", author: "Lt. Simon 'Ghost' Riley (TF141)" },
  { img: "/pictures/bearded-guy.jpg", title: "Don't mess with me", author: "Sketch of a bearded guy." },
  { img: "/pictures/the-journey.jpg", title: "The Journey", author: "Journey through open barren lands" },
  { img: "/pictures/dark-corridor.jpg", title: "The Dark Corridor", author: "Dark Corridor in a Hospital (Pic.)" },
];

