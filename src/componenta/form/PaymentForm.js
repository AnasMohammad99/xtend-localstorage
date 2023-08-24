import * as React from 'react';
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';

export default function PaymentForm({esatetype,
                                      setEsateType,
                                      space,
                                      setSpace,
                                      beds,
                                      setBeds,
                                      baths,
                                      setBaths,
                                      parking,
                                      setParking,
                                      price,
                                      setPrice,
                                      construction,
                                      setConstruction,}) {
  // const [esatetype, setEsateType] = React.useState('');

  const handleChange = (event) => {
    setEsateType(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="floorspace"
            label="floorspace"
            value={space}
            onChange={(e)=>setSpace(e.target.value)}
            fullWidth
            type="number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="beds"
            label="number of beds"
            value={beds}
            onChange={(e)=>setBeds(e.target.value)}
            fullWidth
            type="number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="baths"
            label="number of baths"
            value={baths}
            onChange={(e)=>setBaths(e.target.value)}
            fullWidth
            type="number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="parking"
            label="parking capacity"
            value={parking}
            onChange={(e)=>setParking(e.target.value)}
            fullWidth
            type="number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="construction"
            label="construction"
            value={construction}
            onChange={(e)=>setConstruction(e.target.value)}
            fullWidth
            variant="standard"
          />
        </Grid>
        {/* <Grid item xs={12} md={6}>
          <TextField
            required
            id="construction 2"
            label="construction 2"
            fullWidth
            variant="standard"
          />
        </Grid> */}
        <Grid item xs={12} md={6}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">estate Type</InputLabel>
        <Select
          label="estate Type"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={esatetype}
          required
          onChange={handleChange}
        >
          <MenuItem value='studio'>studio</MenuItem>
          <MenuItem value='Single Family'>Single Family</MenuItem>
          <MenuItem value='Multi Family'>Multi Family</MenuItem>
        </Select>
        </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="price"
            label="price"
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
            fullWidth
            type="number"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}