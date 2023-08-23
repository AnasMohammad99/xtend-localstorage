import { useEffect, useState } from 'react';
import Cards from './componenta/cards';
import Layout from './layout';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [searchUsers, setSearchUsers] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  function handleSearch() {
      if (searchVal === "") {
        
        setSearchUsers(users); 
         return; 
        }
      const filterBySearch = users.filter((user) => {
          if (user.name.toLowerCase().includes(searchVal.toLowerCase())) {
             return user; 
            }
      })
      console.log(filterBySearch);
      setSearchUsers(filterBySearch)
  }
  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((result) => {
        setUsers(result.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="App">
      <Layout handleSearch={handleSearch} searchVal={searchVal} setSearchVal={setSearchVal} />
      <Cards searchUsers={searchUsers} />
    </div>
  );
}

export default App;
