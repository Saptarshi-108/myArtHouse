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
import itemData from "./pictures.json"; // imported JSON directly

export default function Picture() {
  const theme = useTheme();

  // Responsive breakpoints
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));
  const isMd = useMediaQuery(theme.breakpoints.only("md"));

  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({
    url: "",
    title: "",
    desc: "",
  });

  const handleClickOpen = (item) => {
    setSelectedImage({ url: item.img, title: item.title, desc: item.desc });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage({ url: "", title: "", desc: "" });
  };

  // truncate helper
  const truncate = (text, length) =>
    text.length > length ? text.substring(0, length) + "..." : text;

  const MainContent = () => (
    <Box
      className="hide-scrollbar"
      sx={{
        width: "100%",
        minHeight: "100%",
        px: { xs: "4%", sm: "6%", md: "8%", lg: "10%" },
        pb: "10%",
        pt: "2%",
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
          fontSize: isXs ? 36 : isSm ? 54 : isMd ? 72 : 96,
          fontWeight: 25,
          color: "#f3f325ff",
        }}
      >
        <Underline sx={{ height: 5 }}>My Art Pieces</Underline>
      </h3>

      <ImageList
        variant="masonry"
        cols={isXs ? 1 : isSm ? 2 : isMd ? 3 : 4}
        gap={16}
        sx={{
          mt: 0,
          p: { xs: 1, sm: 2, md: 3, lg: 4 },
          overflow: "hidden",
          backgroundColor: "#f0ff8dff",
          borderRadius: 3,
        }}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            onClick={() => handleClickOpen(item)}
            sx={{
              cursor: "pointer",
              "&:hover img": {
                transform: "scale(1.03)",
                transition: "0.3s ease",
              },
            }}
          >
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              style={{
                borderRadius: 15,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
                width: "100%",
                height: "auto",
              }}
            />

            <ImageListItemBar
              title={item.title}
              subtitle={truncate(item.desc, 60)}
              position="below"
              sx={{
                "& .MuiImageListItemBar-title": {
                  fontSize: { xs: 14, sm: 16, md: 18 },
                  fontFamily: "Merriweather",
                  fontWeight: "bold",
                  color: "#000",
                },
                "& .MuiImageListItemBar-subtitle": {
                  fontSize: { xs: 12, sm: 13, md: 14 },
                  fontFamily: "monospace",
                  color: "#373737ff",
                },
                // backgroundColor:'#ffffffb7',
                // borderBottomLeftRadius:10,
                // borderBottomRightRadius:10,
                // borderTopRightRadius:10,
                // borderTopLeftRadius:10,
                // marginTop:1,
                // boxShadow:'black 10px',
                // padding:1 
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
        desc={selectedImage.desc}
      />
    </Box>
  );

  return <MainContent />;
}
