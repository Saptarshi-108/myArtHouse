import * as React from "react";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Loader from "./Loader.jsx";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: theme.spacing(3),
    backgroundColor: "#d3f3f4ff",
    color: "#000000ff",
    boxShadow: "0px 10px 40px rgba(0,0,0,0.6)",
    margin: theme.spacing(1), // add breathing space on mobile
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "50vh",
  },
}));

export default function PicWindow({ open, onClose, imageUrl, title, desc }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (open) {
      setImageLoaded(false);
    }
  }, [open, imageUrl]);

  const handleImageLoad = () => {
    // smooth delay for loader animation
    setTimeout(() => setImageLoaded(true), 600);
  };

  return (
    <BootstrapDialog
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      maxWidth="lg"
      fullWidth
    >
      <DialogTitle
        sx={{
          m: 0,
          p: { xs: 1.5, sm: 2 },
          fontFamily: "'Merriweather', serif",
          fontWeight: 700,
          fontSize: { xs: "1.2rem", sm: "1.6rem", md: "1.8rem" },
          color: "#000000ff",
          backgroundColor: "#ffffb2ff",
          borderBottom: "1px solid #333",
          textAlign: "center",
        }}
        id="customized-dialog-title"
      >
        {title || "Artwork"}
      </DialogTitle>

      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: "absolute",
          right: 12,
          top: 12,
          color: "#000000ff",
          "&:hover": { color: "#363607ff" },
        }}
      >
        <CloseIcon />
      </IconButton>

      <DialogContent dividers>
        {!imageLoaded && <Loader />}
        <img
          src={imageUrl}
          alt={title || "Full-size artwork"}
          style={{
            display: imageLoaded ? "block" : "none",
            maxWidth: "90vw",
            maxHeight: "65vh",
            borderRadius: "12px",
            boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.4)",
            marginBottom: "20px",
          }}
          onLoad={handleImageLoad}
        />
        {imageLoaded && (
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Inter', sans-serif",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              lineHeight: { xs: 1.5, sm: 1.7 },
              color: "#222", // dark text on white background
              textAlign: "center",
              maxWidth: { xs: "90%", sm: "600px", md: "800px" },
              wordBreak: "break-word",
            }}
          >
            {desc}
          </Typography>
        )}
      </DialogContent>
    </BootstrapDialog>
  );
}
