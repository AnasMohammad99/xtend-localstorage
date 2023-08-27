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
const ProfCards = ({profData}) => {
  return (
    <GridWrapper container spacing={3}>
        {
            profData.map((prof)=>{
                return(
                    <Grid key={prof.name} item>
                        <CardComponent prof={prof} />
                    </Grid>
                )
            })
        }
    </GridWrapper >
  )
}

export default ProfCards