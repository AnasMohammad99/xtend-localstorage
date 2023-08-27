import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';

const ToolbarWrapper = styled(Toolbar)(({ theme }) => ({
    display:'flex',
    justifyContent:'center',
  }));

export default function Layout({handleOpen}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <ToolbarWrapper>
        <Typography variant="h4" style={{ textAlign:"center" }} color='white'>Team page</Typography>
        </ToolbarWrapper>
      </AppBar>
    </Box>
  );
}
