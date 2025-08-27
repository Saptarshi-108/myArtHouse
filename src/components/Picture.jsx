import React, { useState } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Underline from "./Underline.jsx";
import Intro from "./Intro.jsx";
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
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
              }}
            />

            <ImageListItemBar
              title={item.title}
              subtitle={<span>{item.desc}</span>}
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
  { img: "/pictures/acvalhalla.png", title: "Viking Warrior", desc:"Take us to valhalla..." },
  { img: "/pictures/avtar.jpg", title: "Aang, Sokka, Iroh", desc:"Some of my fav characters in ATLA." },
  { img: "/pictures/batman.png", title: "The Dark Knight", desc:"I am vengeance." },
  { img: "/pictures/bearded-guy.jpg", title: "Beard Guy", desc:"Guy with bombastic sideeye." },
  { img: "/pictures/bobross.png", title: "Bob Ross", desc:"One of my favourite artists." },
  { img: "/pictures/bobrossart.png", title: "The Mountains' call", desc:"Bob Ross inspired art." },
  { img: "/pictures/budhha.jpg", title: "Blissful Buddha", desc:"	ཨོཾ་མ་ཎི་པདྨེ་ཧཱུྃ " },
  { img: "/pictures/cool.jpg", title: "Cool", desc:"Doodling in boring classes." },
  { img: "/pictures/dark-corridor.jpg", title: "Dark Corridor", desc:"(pic.) Dark Hospital Corridor." },
  { img: "/pictures/dark-is-the-night.png", title: "Dark is the Night", desc:"War kills men before a smoke does it." },
  { img: "/pictures/fujikaze.jpg", title: "Fuji Kaze", desc:"Shinunoga E-Wa Album Cover(2021)" },
  { img:"/pictures/hope.png",title:"Eyes filled with hope", desc:"He looks above for help and hope."},
  { img: "/pictures/ghibli-howling-castle.jpg", title: "Ghibli Howl's Castle", desc:"from Howl's Moving Castle(Hayao Miyazaki)" },
  { img: "/pictures/ghost.jpg", title: "Ghost", desc:"Lt. Simon 'Ghost' Riley" },
  { img: "/pictures/hp-lovecraft.jpg", title: "HP Lovecraft", desc:"Father of cosmic horror" },
  { img: "/pictures/kedarnath.png", title: "Kedarnath Mandir", desc:"Om namah shivay" },
  { img: "/pictures/old-and-young.jpg", title: "Old and Young", desc:"Generation gap.. huh?" },
  { img: "/pictures/agfa200.jpg", title: "Agfa 200", desc:"(pic.) My grandfather's camera." },
  { img: "/pictures/robot.jpg", title: "CyberBot", desc:"His sword is smokin' hot (LITERALLY)" },
  { img: "/pictures/ronin.jpg", title: "Lone Samurai", desc:"to become Invincible under the sun" },
  { img: "/pictures/satyajit-ray.png", title: "Satyajit Ray", desc:"Eminent oscar winner director, writer and lot more." },
  { img: "/pictures/shiva.png", title: "Shiva", desc:"rapid sketch of mahadev" },
  { img: "/pictures/sketch.jpg", title: "Sketch", desc:"random sketch practice" },
  { img: "/pictures/solitary-knight.jpg", title: "Solitary Knight", desc:"mourns the loss of his fallen brothers." },
  { img: "/pictures/takehiko-inoue.jpg", title: "Takehiko Inoue", desc:"Writer and artist of Vagabond mangaka" },
  { img: "/pictures/the-journey.jpg", title: "The Journey", desc:"travelling through barren lands" },
  { img: "/pictures/smalltown.jpg", title: "My Small Town", desc:"(pic.) beautiful sky in a small town" },
  { img: "/pictures/stairs.jpg", title: "Stairs", desc:"(pic.) Life is a series of stairs." },
  { img: "/pictures/bluesky.jpg", title: "Blue Sky", desc:"(pic.) autumnal blue sky" },
];


