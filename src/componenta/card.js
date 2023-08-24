import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CardComponent({estate}) {
  return (
    <Card sx={{ width:300, height:300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={estate.image}
          alt={estate.area}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {estate.area}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {estate.address}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}