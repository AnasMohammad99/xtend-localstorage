import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';




export default function WeatherCard({day}) {
  return (
    <div>
        {
            day?<Card  sx={{ maxWidth: 500 }}>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="Egypt">
                    <CardMedia
                    component="img"
                    height="50"
                    image={day.day.condition.icon}
                    alt={day.day.condition.text}
                    />
                </Avatar>
                }
                title="Egypt"
                subheader={day.date}
            />
            <CardMedia
                component="img"
                height="300"
                image="https://imengine.public.prod.cmg.infomaker.io/?uuid=c1d3deeb-6e98-5e7e-a0c2-a3d30517b8e7&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.9997&x=0&y=0&width=1200&height=675"
                alt="Sunny"
            />
            <CardContent>
                <Typography  variant="body2" color="text.secondary">
                {day.day.condition.text}||{day.day.avgtemp_c}<sup>C</sup>
                </Typography>
            </CardContent>
        </Card>:null
        }        
    </div>
  );
}
