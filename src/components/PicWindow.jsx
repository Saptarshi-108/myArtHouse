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

export default function PicWindow({ open, onClose, imageUrl }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageDisplay, setImageDisplay] = useState(false);

  useEffect(() => {.
    if (open) {
      setImageLoaded(false);
      setImageDisplay(false);
    }
  }, [open, imageUrl]);

  const handleImageLoad = () => {
    // The image has finished downloading, now we delay its display.
    setTimeout(() => {
      setImageLoaded(true);
    }, 2000); // 2000ms = 2-second delay
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
        {/* The loader is rendered only if the image is not ready to be displayed. */}
        {!imageDisplay && <Loader />}
        <img
          src={imageUrl}
          alt="Full-size image"
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
