import { useState } from 'react';
import Cards from './components/collage-card/cards';
import Layout from './layout';
import data from "./data.json";
import { AppBar, Typography } from '@mui/material';
import ProfCards from './components/prof-card/cards';
function App() {
  const [cData, setCData] = useState(data.collage);
  const [profData, setProfData] = useState(data.prof);
  return (
    <div className="App">
      <Layout  />
      <Cards cData={cData} />
      <AppBar position="static">
      <Typography variant="h4" style={{ textAlign:"center" }} color='white'>Meet your instructor</Typography>
      </AppBar>
      <ProfCards profData={profData} />
    </div>
  );
}

export default App;
