import * as React from 'react';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import Loader from './Loader.jsx';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function PicWindow({ open, onClose, imageUrl, title, desc }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageDisplay, setImageDisplay] = useState(false);

  useEffect(() => {
    if (open) {
      setImageLoaded(false);
      setImageDisplay(false);
    }
  }, [open, imageUrl]);

  const handleImageLoad = () => {
    // The image has finished downloading, now we delay its display.
    setTimeout(() => {
      setImageLoaded(true);
    }, 1000); // 1000ms = 1-second delay
  };

  useEffect(() => {
    if (imageLoaded) {
      setImageDisplay(true);
    }
  }, [imageLoaded]);

  return (
    <BootstrapDialog
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      maxWidth="lg"
      sx={{justifyContent:'center',alignItems:'center'}}
    >
      <DialogTitle sx={{ m: 0, p: 2,   backgroundColor:'#faffd6ff', fontFamily:'monospace', fontWeight:'bold', fontSize:20, overflow:'hidden' }} id="customized-dialog-title">
        {title || 'Image'}
      </DialogTitle>
      <DialogTitle sx={{ m: 0, p: 2,   backgroundColor:'#A6B28B', fontFamily:'monospace', fontSize:15, overflow:'hidden' }} id="customized-dialog-title">
        {desc || 'Description'}
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
        {!imageDisplay && <Loader />}
        <img
          src={imageUrl}
          alt={title || 'Full-size image'}
          style={{
            visibility: imageDisplay ? 'visible' : 'hidden',
            maxWidth: '100%',
            maxHeight: '80vh',
            margin: 'auto',
          }}
          onLoad={handleImageLoad}
        />
      </DialogContent>
    </BootstrapDialog>
  );

}
