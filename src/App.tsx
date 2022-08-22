import axios from "axios";
import "./App.css";
import TopNav from './navbar/TopNav';
import React, { useState, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import CloseIcon from '@mui/icons-material/Close';
import {isMobile} from 'react-device-detect';

function App() {
  // const [name, setName] = useState("");
  // const [activeTime, setActiveTime] = useState("");
  // const [diet, setDiet] = useState("");
  // const [geoRange, setGeoRange] = useState("");
  // const [habitat, setHabitat] = useState("");
  // const [maxLength, setMaxlength] = useState("");
  // const [maxWeight, setMaxWeight] = useState("");
  // const [image, setImage] = useState("");
  const [inVal, setInVal] = useState("");
  const [fi,setFi] = useState<any[]>([]);
  const ref= useRef<any>(null);
  // active_time: "Nocturnal"
  // animal_type: "Bird"
  // diet: "Fish and marine invertebrates"
  // geo_range: "Australia and New Zealand"
  // habitat: "Ocean and coastal shores"
  // id: 106
  // image_link: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Little_Penguin_Feb09.jpg"
  // latin_name: "Eudyptula minor"
  // length_max: "1.5"
  // length_min: "1.3"
  // lifespan: "25"
  // name: "Little Blue Penguin"
  // weight_max: "3.3"
  // weight_min: "3"
  // const [animalArray, setAinmalArray] = useState([]);

  // const  animals = (x :any[]=[]) => {
  //   // console.log(x);
  //   const y = x.map((info) => (
  //     <>
  //     <img src={info.image_link} style={{width: '50vw', height: '50vh'}}/>
  //     {info.name}<br/>
  //     {info.active_time}<br/>
  //     {info.diet}<br/>
  //     {info.geo_range}<br/>
  //     {info.habitat}<br/>
  //     {info.length_max}<br/>
  //     {info.weight_max};
  //     </>
  //   ));
  //   console.log(y);
  //   return (y);
  // };
  const l = () =>{
    document.getElementById('first')?.style.setProperty("display", "flex");
    document.getElementById('pop')?.style.setProperty("display", "none"); 
    // if (ref.current !== null)
    ref.current.value = null;
    setFi([]);
  };
  function t() {
    
    let x = parseInt(inVal);
    if (x < 1 || x > 10 || isNaN(x)){
      alert("it is not valid input");
      return
    }
    document.getElementById('first')?.style.setProperty("display", "none");
    axios.get("https://zoo-animal-api.herokuapp.com/animals/rand/" + inVal)
  .then((res) => {
      // let animalArray = [];
      for (let i = 0; i < parseInt(inVal); i++){
        if (isMobile){
          setFi(fi => 
            [...fi, 
              <>
              <img src={res.data[i].image_link} style={{width: '100vw', height: '50vh'}}/><br/>
              Name: {res.data[i].name}<br/>
              Active time: {res.data[i].active_time}<br/>
              Diet: {res.data[i].diet}<br/>
              Geo_range: {res.data[i].geo_range}<br/>
              Habitat: {res.data[i].habitat}<br/>
              Max length: {res.data[i].length_max}<br/>
              Max weight: {res.data[i].weight_max}
              </>
            ]);
        }else{
          setFi(fi => 
            [...fi, 
              <>
              <img src={res.data[i].image_link} style={{width: '50vw', height: '50vh'}}/><br/>
              Name: {res.data[i].name}<br/>
              Active time: {res.data[i].active_time}<br/>
              Diet: {res.data[i].diet}<br/>
              Geo_range: {res.data[i].geo_range}<br/>
              Habitat: {res.data[i].habitat}<br/>
              Max length: {res.data[i].length_max}<br/>
              Max weight: {res.data[i].weight_max}
              </>
            ]);
        }
        // <img src={res.data[i].image_link} style={{width: '50vw', height: '50vh'}}/>
        // {info.name}<br/>
        // {info.active_time}<br/>
        // {info.diet}<br/>
        // {info.geo_range}<br/>
        // {info.habitat}<br/>
        // {info.length_max}<br/>
        // {info.weight_max};
      
        // {
        // src : res.data[i].image_link,
        // name: res.data[i].name,
        // active_time: res.data[i].active_time,
        // diet: res.data[i].diet,
        // geo_range: res.data[i].geo_range,
        // habitat: res.data[i].habitat,
        // length_max: res.data[i].length_max,
        // weight_max: res.data[i].weight_max,
        // }])
      }
      // console.log(res.data);
      // console.log(animalArray);
      // setName("Name: " + res.data.name);
      // setActiveTime("Active time: " + res.data.active_time);
      // setDiet("Diet: " + res.data.diet);
      // setGeoRange("Geo-range: " + res.data.geo_range);
      // setHabitat("Habitat: " + res.data.habitat);
      // setMaxlength("Max-length: " + res.data.length_max);
      // setMaxWeight("Max-weight: " + res.data.weight_max);
      // setImage(res.data.image_link);
      document.getElementById('pop')?.style.setProperty("display", "flex"); 
      // animals(animalArray);
    });
  }
  return (
    <>
      <TopNav/>
      <div id= 'first' style={{
        
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '92.5vh',
        backgroundColor: 'skyblue',
        zIndex: 0,
        flexDirection: 'column'
      }}>
      
        Get the Random Animal!
        <br/>
        <div style={{alignItems: 'center', justifyContent: 'center'}}>
        <input ref={ref} onChange={event => setInVal(event.target.value)} placeholder="how many animals?(10)"/>
        <SearchIcon cursor={"pointer"} onClick={() => t() }/>
        </div>
      </div>
        <div className="popup" id='pop'
          style={{
          
            display: 'none', 
            position:'absolute' , 
            width: '100vw', 
            height: '92.5vh',  
            zIndex:1,
            alignItems: 'center',
            //justifyContent: 'center',
            flexDirection: 'column'
            }}>
            <div>
            wanna play more? <CloseIcon cursor={'pointer'} onClick={()=>l()} />
            </div>
            {/* <img src={image} style={{width: '50vw', height: '50vh'}}/>
            {name}<br/>
            {activeTime}<br/>
            {diet}<br/>
            {geoRange}<br/>
            {habitat}<br/>
            {maxLength}<br/>
            {maxWeight}; */}
            
            {/* {animals()} */}
            <div>
            {fi.map((data) => <div key={data.props.children[3]}>{data}</div> )}
            </div>
        
        
      </div>
            
    </>
  );
}
export default App;