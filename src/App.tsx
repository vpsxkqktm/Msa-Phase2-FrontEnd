import axios from "axios";
import "./App.css";
import TopNav from './navbar/TopNav';
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { display } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';


function App() {
  
  const [userId, setUserId] = useState("");

  function t() {
    axios.get("https://friends.roblox.com/v1/users/" + userId + "/friends", 
    {headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'crossdomain' : true
    },
    
  }).then((res) => {
    
      console.log(res.data);
    });
  }
  return (
    <>
      <TopNav/>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '92vh',
        backgroundColor: 'pink'
      }}>
        <form>
          <input type='text' 
          placeholder='name' 
          id ='searchInput'
          onChange={(e) => setUserId(e.target.value)}
          />
          <SearchIcon cursor='pointer' onClick={t} />
        </form>
      </div>
    </>
  );
}
export default App;