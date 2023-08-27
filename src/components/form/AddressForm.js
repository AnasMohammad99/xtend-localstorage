import * as React from 'react';
import { Grid, TextField, Typography } from '@mui/material';

export default function AddressForm({area,
                                      setArea,
                                      city,
                                      setCity,
                                      address,
                                      setAddress,
                                      image,
                                      setImage
                                    }) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="area"
            name="area"
            label="Area"
            value={area}
            onChange={(e)=>setArea(e.target.value)}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            value={city}
            onChange={(e)=>setCity(e.target.value)}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address line"
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="image"
            name="image"
            label="image url"
            value={image}
            onChange={(e)=>setImage(e.target.value)}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}