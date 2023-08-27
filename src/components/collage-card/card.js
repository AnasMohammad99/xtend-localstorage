import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Link } from '@mui/material';

export default function CardComponent({collage}) {
  return (
    <Card sx={{ width:300 }}>
      <CardActionArea>
      <CardContent style={{ height:150, flexDirection:"column",  display:"flex",  justifyContent:"space-between", alignItems:"center" }}>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {collage.country}
      </Typography>
      <Typography variant="h5" style={{textAlign:"center"}}>
        {collage.name}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        <Link style={{cursor:"pointer"}} href={collage.web_page} target='_blank'>{collage.web_page}</Link>
      </Typography>
    </CardContent>
      </CardActionArea>
    </Card>
  );
}