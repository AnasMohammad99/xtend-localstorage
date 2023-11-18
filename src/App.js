import { BrowserRouter } from 'react-router-dom';
import Layout from './layout';
import { useEffect, useState } from 'react';

function App() {
  // eslint-disable-next-line no-unused-vars
  useEffect(() => {
    try {

    } catch (error) {
      console.log(error.message);
    }
  },[])
  return (
    <BrowserRouter>
    <div className="App">
      <Layout />
    </div>
    </BrowserRouter>
  );
}

export default App;
