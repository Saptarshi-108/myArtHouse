import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';

export function HideOnScroll({ children, timeout = 500 }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    // The timeout prop is now passed dynamically from the function's parameters.
    <Slide appear={false} direction="down" in={!trigger} timeout={timeout}>
      {children}
    </Slide>
  );
}

function Header() {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll>
        <AppBar color="primary" sx={{backgroundColor:'#844d36', }}>
          <Toolbar sx={{alignItems:'center', justifyContent:'center'}}>
            <Typography variant="h1" component="div" sx={{
               fontFamily:'fantasy',
               fontWeight:'regular',
               fontSize:170,
              color:'#fbe9d0'
            }}>
              Art House 
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container>
      </Container>
    </React.Fragment>
  );
}

export default Header;