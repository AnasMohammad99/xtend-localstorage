import React, { useMemo } from 'react'
import { Box } from '@mui/material';
import styled from 'styled-components';

const AppDashboard = () => {
  const Wrapper = styled(Box)({
    backgroundColor: 'white',
    color:"black",
    padding: 10,
    margin:20,
    borderRadius: 5,
    height:"85vh",
    overflowY:"scroll",
  
    '&::-webkit-scrollbar': {
      display:"none"
    }, 
    '@media (max-width: 780px)': {
      overflowX:"scroll",
    }
  });
  return (
    <Wrapper>
    </Wrapper>
  )
}

export default AppDashboard