import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Underline from './Underline.jsx';
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
        paddingTop:"1%",
        backgroundColor: "#24242aff",
        scrollBehavior:'smooth',
  
      }}
    >
            <Intro />
      <h3 style={{ textAlign: "center", fontFamily:'fantasy', paddingBottom:'5%', fontSize:120, fontWeight:25,color:'#f3f325ff' }}>
        <Underline sx={{height:5}}>
        My Arts
        </Underline>
      </h3>
      <ImageList
        variant="masonry"
        cols={matches ? 3 : 2}
        gap={16}
        sx={{
          marginTop:0,
          padding:4,
          overflow: "hidden",
          backgroundColor:'#f0ff8dff',
          borderRadius:15

        }}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            onClick={() => handleClickOpen(item)}
          >
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{ cursor: "pointer",  borderRadius:15 }}
            />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>by: {item.author}</span>}
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
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
];
