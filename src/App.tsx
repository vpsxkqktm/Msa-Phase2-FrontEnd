import axios from "axios";
import "./App.css";
import TopNav from './navbar/TopNav';
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { display } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';
import zIndex from "@mui/material/styles/zIndex";
import { Hidden } from "@mui/material";


function App() {
  
  const [userId, setUserId] = useState("");

  function t() {
    axios.get("https://zoo-animal-api.herokuapp.com/animals/rand")
  .then((res) => {
      console.log(res.data);
      return <div>asd</div>
    });
  }
  return (
    <>
      <TopNav/>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '92.5vh',
        backgroundColor: 'pink',
        zIndex: 0
      }}>
        <button onClick={() =>t()}>
          Get the Random Animal!
        </button>
        <div className="popup" 
          style={{
            display: 'none', 
            position:'absolute' , 
            width: '100vw', 
            height: '92.5vh', 
            backgroundColor: 'skyblue', 
            zIndex:1}}>
            asdf
        </div>
      </div>
            
    </>
  );
}
export default App;