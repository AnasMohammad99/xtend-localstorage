import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CardComponent({user}) {
  return (
    <Card sx={{ width:300, height:300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={user.image_url}
          alt={user.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {user.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {user.tagline}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}