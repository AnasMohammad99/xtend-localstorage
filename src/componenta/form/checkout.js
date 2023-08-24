import * as React from 'react';
import { Box, Button, Container, Paper, Step, StepLabel, Stepper, Typography } from '@mui/material';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import { useState } from 'react';

const steps = ['estate address', 'estate details', 'Review your estate details'];
export default function CheckoutComponent({setEStates, setOpen}) {
  const [id, setId] = useState(Math.round(Math.random()*100000000))
  const [area, setArea] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [image, setImage] = useState('https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg')
  const [esatetype, setEsateType] = useState('')
  const [space, setSpace] = useState()
  const [beds, setBeds] = useState()
  const [baths, setBaths] = useState()
  const [parking, setParking] = useState()
  const [price, setPrice] = useState()
  const [construction, setConstruction] = useState("")
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm area={area} setArea={setArea} city={city} setCity={setCity} address={address} setAddress={setAddress} image={image} setImage={setImage} />;
      case 1:
        return <PaymentForm esatetype={esatetype} setEsateType={setEsateType} space={space} setSpace={setSpace} beds={beds} setBeds={setBeds} baths={baths} setBaths={setBaths} parking={parking} setParking={setParking} price={price} setPrice={setPrice} construction={construction} setConstruction={setConstruction} />;
      case 2: 
        return <Review />;
      default:
        throw new Error('Unknown step');
    }
  }
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const handleSubmit=(event)=>{
    event.preventDefault();
    let newEstate = {
            id:id,
            area:area,
            address:address,
            city:city,
            image:image,
            type:esatetype,
            floorspace:space,
            beds:beds,
            baths:baths,
            price:price,
            parking:parking,
            construction:construction
    }
    setEStates(prevValue=>[...prevValue, newEstate])
    setOpen(false)
    console.log(newEstate);
    return 0
  }
  return (
    <form onSubmit={handleSubmit}>
      <Container maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                estate has been added
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                {
                  activeStep !== steps.length - 1 ? 
                  <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >Next</Button>:
                <Button
                  variant="contained"
                  type='submit'
                  sx={{ mt: 3, ml: 1 }}
                >submit</Button>
                }
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </form>
  );
}