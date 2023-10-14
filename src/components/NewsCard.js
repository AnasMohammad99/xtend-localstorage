import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from '@mui/material';



export default function NewsCard({article}) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
            <Card  sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label={article.author}>
                        {article.author[0]}
                    </Avatar>
                    }
                    title={article.author}
                    subheader={article.publishedAt}
                />
                <CardMedia
                    component="img"
                    height="150"
                    image={article.urlToImage}
                    alt=""
                />
                <CardContent>
                    <Typography  variant="body2" color="text.secondary">
                    {article.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton onClick={handleExpandClick}>
                    <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography paragraph>Content:</Typography>
                    <Typography paragraph>
                        {article.content}
                    </Typography>
                    </CardContent>
                </Collapse>
            </Card>
</div>
  );
}
