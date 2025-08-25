import * as React from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import {HideOnScroll} from './Header';

export default function BoxBasic() {
  return (
    <HideOnScroll timeout={1000}>
    <Box component="section" sx={{ height:'60vw', width:'100%', backgroundColor:'#474853'}}>
        <Container>

        </Container>
    </Box>
    </HideOnScroll>
  );
}
