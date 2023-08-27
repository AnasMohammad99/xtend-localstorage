import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, Box, Button, CardActionArea, Link } from '@mui/material';

export default function CardComponent({prof}) {
  return (
    <Card sx={{ width:300 }}>
      <CardContent style={{ height:220, flexDirection:"column",  display:"flex",  justifyContent:"space-between", alignItems:"center" }}>
      
        <Avatar style={{width:100, height:100}} />
      <Typography sx={{ fontSize: 12, textAlign:"center" }} color="text.secondary" >
        {prof.university}
      </Typography>
      <Typography variant="h5" style={{textAlign:"center"}}>
        {prof.name}
      </Typography>
      <Typography color="text.secondary">
       {prof.age}
      </Typography>
      <Button>Message him now</Button>
    </CardContent>
    </Card>
  );
}