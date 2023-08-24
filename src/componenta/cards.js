import React from 'react'
import CardComponent from './card'
import { Grid } from '@mui/material'
import styled from '@emotion/styled';
const GridWrapper = styled(Grid)(({ theme }) => ({
    marginTop:'2rem',
    marginBottom:'2rem',
    display:'flex',
    justifyContent:'center'
  }));
const Cards = ({eStates}) => {
  return (
    <GridWrapper container spacing={3}>
        {
            eStates.map((estate)=>{
                return(
                    <Grid key={estate.id} item>
                        <CardComponent estate={estate} />
                    </Grid>
                )
            })
        }
    </GridWrapper >
  )
}

export default Cards