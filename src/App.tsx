import axios from "axios";
import "./App.css";
import TopNav from './navbar/TopNav';
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  
  const [name, setName] = useState("");
  const [activeTime, setActiveTime] = useState("");
  const [diet, setDiet] = useState("");
  const [geoRange, setGeoRange] = useState("");
  const [habitat, setHabitat] = useState("");
  const [maxLength, setMaxlength] = useState("");
  const [maxWeight, setMaxWeight] = useState("");
  const [image, setImage] = useState("");


  function t() {
    axios.get("https://zoo-animal-api.herokuapp.com/animals/rand")
  .then((res) => {
      // console.log(res.data);
      setName("Name: " + res.data.name);
      setActiveTime("Active time: " + res.data.active_time);
      setDiet("Diet: " + res.data.diet);
      setGeoRange("Geo-range: " + res.data.geo_range);
      setHabitat("Habitat: " + res.data.habitat);
      setMaxlength("Max-length: " + res.data.length_max);
      setMaxWeight("Max-weight: " + res.data.weight_max);
      setImage(res.data.image_link);
      document.getElementById('pop')?.style.setProperty("display", "flex"); 
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
        <div className="popup" id='pop'
          style={{

            display: 'none', 
            position:'absolute' , 
            width: '100vw', 
            height: '92.5vh', 
            backgroundColor: 'skyblue', 
            zIndex:1,
            alignItems: 'center',
            // justifyContent: 'center',
            flexDirection: 'column'
            }}>
            <img src={image} style={{width: '50vw', height: '50vh'}}/>
            {name}<br/>
            {activeTime}<br/>
            {diet}<br/>
            {geoRange}<br/>
            {habitat}<br/>
            {maxLength}<br/>
            {maxWeight}
        </div>
      </div>
            
    </>
  );
}
export default App;