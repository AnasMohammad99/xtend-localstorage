import * as React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';


export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        estate details
      </Typography>
      <List disablePadding>
          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText primary='id' />
            <Typography variant="body2">t</Typography>
          </ListItem>
          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText primary='area' />
            <Typography variant="body2">t</Typography>
          </ListItem>
          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText primary='address' />
            <Typography variant="body2">t</Typography>
          </ListItem>
          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText primary='beds' />
            <Typography variant="body2">t</Typography>
          </ListItem>
          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText primary='baths' />
            <Typography variant="body2">t</Typography>
          </ListItem>
          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText primary='parking' />
            <Typography variant="body2">t</Typography>
          </ListItem>
          <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText primary='price' />
            <Typography variant="body2">t</Typography>
          </ListItem>
      </List>
    </React.Fragment>
  );
}