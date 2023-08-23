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
const Cards = ({searchUsers}) => {
  return (
    <GridWrapper container spacing={3}>
        {
            searchUsers.map((user)=>{
                return(
                    <Grid key={user.id} item>
                        <CardComponent user={user} />
                    </Grid>
                )
            })
        }
    </GridWrapper >
  )
}

export default Cards