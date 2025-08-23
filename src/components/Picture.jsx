import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme, styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

// Styled component for the dialog box, using MUI's `styled` utility
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
}));

/**
 * Reusable Dialog component to display a full-size image.
 * @param {object} props - Component props.
 * @param {boolean} props.open - Controls the dialog's visibility.
 * @param {function} props.onClose - Function to close the dialog.
 * @param {string} props.imageUrl - The URL of the image to display.
 */
function CustomizedDialogs({ open, onClose, imageUrl }) {
  return (
    <BootstrapDialog
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      maxWidth="lg"
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Image
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={(theme) => ({
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <img
          src={imageUrl}
          alt="Full-size image"
          style={{
            display: 'block',
            maxWidth: '100%',
            maxHeight: '80vh',
            margin: 'auto',
          }}
        />
      </DialogContent>
    </BootstrapDialog>
  );
}

/**
 * The main application component that includes a loading screen and an image gallery.
 */
export default function App() {
  // State to manage the loading status
  const [isLoading, setIsLoading] = useState(true);

  // useEffect to simulate a loading process and hide the loader after a delay
  useEffect(() => {
    // A timer to simulate data fetching or asset loading
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2-second delay to show the animation
  }, []);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  // State to manage the dialog box for the images
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleClickOpen = (imageUrl) => {
    setSelectedImage(imageUrl);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage('');
  };

  // The loading screen component
  const LoadingScreen = () => (
    <div style={loadingScreenStyles}>
      <div style={loaderStyles}></div>
    </div>
  );

  // The main content component (the image gallery)
  const MainContent = () => (
    <Box sx={{
      width: '100%',
      height: '80%',
      paddingLeft: { xs: '2%', sm: '5%', md: '10%' },
      paddingRight: { xs: '2%', sm: '5%', md: '10%' },
      paddingBottom: '10%',
      paddingTop: '2%',
      overflowY: 'scroll'
    }}>
      <ImageList
        variant="masonry"
        cols={matches ? 3 : 2}
        gap={16}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img} onClick={() => handleClickOpen(item.img)}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{ cursor: 'pointer' }}
            />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>by: {item.author}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>

      <CustomizedDialogs
        open={open}
        onClose={handleClose}
        imageUrl={selectedImage}
      />
    </Box>
  );

  return (
    <div style={containerStyles}>
      {/* Conditionally render the loading screen or the main content */}
      {isLoading ? <LoadingScreen /> : <MainContent />}
    </div>
  );
}

// Inline styles for the loading screen and loader.
// This is an alternative to using styled-components or a separate CSS file.
const containerStyles = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
};

const loadingScreenStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999,
};

// **Updated loader styles**
const loaderStyles = {
  width: '120px',
  height: '20px',
  background: `
    linear-gradient(#000 50%, #0000 0),
    linear-gradient(#0000 50%, #000 0),
    linear-gradient(#000 50%, #0000 0),
    linear-gradient(#0000 50%, #000 0),
    linear-gradient(#000 50%, #0000 0),
    linear-gradient(#0000 50%, #000 0)
    #ddd`,
  backgroundSize: 'calc(100%/6 + 1px) 200%',
  backgroundRepeat: 'no-repeat',
  animation: 'l12 2s infinite',
};

// CSS for the keyframe animation
// This must be added to a global stylesheet or programmatically.
const styleTag = document.createElement('style');
styleTag.innerHTML = `
  @keyframes l12 {
    0%   {background-position: calc(0*100%/5) 100%,calc(1*100%/5)   0%,calc(2*100%/5) 100%,calc(3*100%/5)   0%,calc(4*100%/5) 100%,calc(5*100%/5)   0%}
    16.67% {background-position: calc(0*100%/5)   0%,calc(1*100%/5)   0%,calc(2*100%/5) 100%,calc(3*100%/5)   0%,calc(4*100%/5) 100%,calc(5*100%/5)   0%}
    33.33% {background-position: calc(0*100%/5)   0%,calc(1*100%/5) 100%,calc(2*100%/5) 100%,calc(3*100%/5)   0%,calc(4*100%/5) 100%,calc(5*100%/5)   0%}
    50%    {background-position: calc(0*100%/5)   0%,calc(1*100%/5) 100%,calc(2*100%/5)   0%,calc(3*100%/5)   0%,calc(4*100%/5) 100%,calc(5*100%/5)   0%}
    66.67% {background-position: calc(0*100%/5)   0%,calc(1*100%/5) 100%,calc(2*100%/5)   0%,calc(3*100%/5) 100%,calc(4*100%/5) 100%,calc(5*100%/5)   0%}
    83.33% {background-position: calc(0*100%/5)   0%,calc(1*100%/5) 100%,calc(2*100%/5)   0%,calc(3*100%/5) 100%,calc(4*100%/5)   0%,calc(5*100%/5)   0%}
    100%   {background-position: calc(0*100%/5)   0%,calc(1*100%/5) 100%,calc(2*100%/5)   0%,calc(3*100%/5) 100%,calc(4*100%/5)   0%,calc(5*100%/5) 100%}
  }
`;
document.head.appendChild(styleTag);

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
];
