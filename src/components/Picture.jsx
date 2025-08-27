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
  { img: "/pictures/acvalhalla.png", title: "AC Valhalla", subtitle:"" },
  { img: "/pictures/avtar.jpg", title: "Avatar", subtitle:"" },
  { img: "/pictures/batman.png", title: "Batman", subtitle:"" },
  { img: "/pictures/bearded-guy.jpg", title: "Bearded Guy", subtitle:"" },
  { img: "/pictures/bobross.png", title: "Bob Ross", subtitle:"" },
  { img: "/pictures/bobrossart.png", title: "Bob Ross Art", subtitle:"" },
  { img: "/pictures/budhha.jpg", title: "Buddha", subtitle:"" },
  { img: "/pictures/cool.jpg", title: "Cool", subtitle:"" },
  { img: "/pictures/dark-corridor.jpg", title: "Dark Corridor", subtitle:"" },
  { img: "/pictures/dark-is-the-night.png", title: "Dark is the Night", subtitle:"" },
  { img: "/pictures/fujikaze.jpg", title: "Fuji Kaze", subtitle:"" },
  { img:"/pictures/hope.png",title:"Eyes filled with hope", subtitle:""},
  { img: "/pictures/ghibli-howling-castle.jpg", title: "Ghibli Howling Castle", subtitle:"" },
  { img: "/pictures/ghost.jpg", title: "Ghost", subtitle:"" },
  { img: "/pictures/hp-lovecraft.jpg", title: "HP Lovecraft", subtitle:"" },
  { img: "/pictures/kedarnath.png", title: "Kedarnath", subtitle:"" },
  { img: "/pictures/old-and-young.jpg", title: "Old and Young", subtitle:"" },
  { img: "/pictures/agfa200.jpg", title: "Agfa 200 (pic.)", subtitle:"" },
  { img: "/pictures/robot.jpg", title: "Robot", subtitle:"" },
  { img: "/pictures/ronin.jpg", title: "Ronin", subtitle:"" },
  { img: "/pictures/satyajit-ray.png", title: "Satyajit Ray", subtitle:"" },
  { img: "/pictures/shiva.png", title: "Shiva", subtitle:"" },
  { img: "/pictures/sketch.jpg", title: "Sketch", subtitle:"" },
  { img: "/pictures/solitary-knight.jpg", title: "Solitary Knight", subtitle:"" },
  { img: "/pictures/takehiko-inoue.jpg", title: "Takehiko Inoue", subtitle:"" },
  { img: "/pictures/the-journey.jpg", title: "The Journey", subtitle:"" },
  { img: "/pictures/smalltown.jpg", title: "My Small Town (pic.)", subtitle:"" },
  { img: "/pictures/stairs.jpg", title: "Stairs (pic.)", subtitle:"" },
  { img: "/pictures/bluesky.jpg", title: "Blue Sky (pic.)", subtitle:"" },
];
