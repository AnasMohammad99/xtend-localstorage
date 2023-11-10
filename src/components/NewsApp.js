import React from 'react'
import { Spin } from 'antd';
import { Box, Grid } from '@mui/material';
import NewsCard from './NewsCard';
import styled from 'styled-components';

const NewsApp = ({news}) => {
 
  const Wrapper = styled(Box)({
    backgroundColor: 'white',
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
      {
        news===""?<Spin />:
        <Grid justifyContent="center" container spacing={2}>
        {
          Object.values(news).map((article)=>{
            if(article.author==null){
              return null
            } else{
              return (
                <Grid key={article.author} item xs={4}>
                  <NewsCard article={article} />
              </Grid>
            )
          }
          })
        }
      </Grid>
      }
    </Wrapper>
  )
}
export default NewsApp