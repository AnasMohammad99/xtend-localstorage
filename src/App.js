import { BrowserRouter } from 'react-router-dom';
import Layout from './layout';
import { useEffect, useState } from 'react';
function App() {
  const [news, setNews] = useState("")
  const [Crypto, setCrypto] = useState("")
  const [weather, setweather] = useState("");
  useEffect(() => {
    try {
      async function fetchCrypto() {
        const response = await fetch("http://localhost:5000/api/v1/crypto/")
        const data = await response.json();
        setCrypto(data)
        // console.log(data);
        // console.log(Crypto);
        return data
      }
      async function fetchNews() {
        const response = await fetch("http://localhost:5000/api/v1/news/")
        const data = await response.json();
        setNews(data)
        return data
      }
      async function fetchWeather() {
        const response = await fetch("http://localhost:5000/api/v1/weather/")
        const data = await response.json();
        setweather(data)
        return data
      }
      fetchCrypto();
      fetchNews(); 
      fetchWeather();
    } catch (error) {
      console.log(error.message);
    }
  },[])
  return (
    <BrowserRouter>
    <div className="App">
      <Layout news={news} Crypto={Crypto} weather={weather}  />
    </div>
    </BrowserRouter>
  );
}

export default App;
