import { useState } from 'react';
import Cards from './componenta/cards';
import Layout from './layout';
import data from "./data.json";
import ModalComponent from './componenta/modal';
function App() {
  const [eStates, setEStates] = useState(data.property);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="App">
      <Layout handleOpen={handleOpen} />
      <ModalComponent setEStates={setEStates} setOpen={setOpen} open={open} handleClose={handleClose} />
      <Cards eStates={eStates} />
    </div>
  );
}

export default App;
