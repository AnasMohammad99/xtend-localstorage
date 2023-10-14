import styled from '@emotion/styled';
import { Box, Grid } from '@mui/material';
import React from 'react'
import WeatherCard from './WeatherCard';
import { Spin } from 'antd';

const WeatherApp = ({weather}) => {
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
  // console.log(weather.forecast)
  return (
    <Wrapper>
        
        <Grid justifyContent="center" container spacing={2}>
        {
          
          weather.forecast?weather.forecast.forecastday.map((day)=>{
            if(day.date==null){
              return null
            } else{
              return (
                <Grid key={day.date} item xs={4}>
                  <WeatherCard day={day} />
              </Grid>
            )
          }
          }):<Spin />
          
        }
      </Grid>
      <WeatherCard weather={weather} />
    </Wrapper>
  )
}

export default WeatherApp