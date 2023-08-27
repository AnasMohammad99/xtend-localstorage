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
const Cards = ({cData}) => {
  return (
    <GridWrapper container spacing={3}>
        {
            cData.map((collage)=>{
                return(
                    <Grid key={collage.name} item>
                        <CardComponent collage={collage} />
                    </Grid>
                )
            })
        }
    </GridWrapper >
  )
}

export default Cards