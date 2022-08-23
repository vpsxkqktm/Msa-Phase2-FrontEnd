import axios from "axios";
import "./App.css";
import TopNav from './navbar/TopNav';
import React, { useState, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import CloseIcon from '@mui/icons-material/Close';
import {isMobile} from 'react-device-detect';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Navigation, Pagination } from "swiper";
import {Button} from './stories/Button';
import Game from './components/RpsGame';

export const goBack = () => {
  document.getElementById("first")?.style.setProperty("display", "flex");
  document.getElementById("second")?.style.setProperty("display", "none");
}
const goToGame = () => {
  document.getElementById("first")?.style.setProperty("display", "none");
  document.getElementById("second")?.style.setProperty("display", "flex");
};
function App() {
  
  const [inVal, setInVal] = useState("");
  const [fi,setFi] = useState<any[]>([]);
  const ref= useRef<any>(null);
  const l = () =>{
    document.getElementById('first')?.style.setProperty("display", "flex");
    document.getElementById('pop')?.style.setProperty("display", "none"); 
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
      }
      document.getElementById('pop')?.style.setProperty("display", "flex"); 
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
        <Button primary={true} size={'large'} backgroundColor={'orange'} label={'want to play game?'} onClick={goToGame}/>
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
            <div style={{display: 'flex', width: '100vw', height: '85vh'}}>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              autoplay={{
              delay: 2500,
              //pauseOnMouseEnter: true,
              disableOnInteraction: false
              }}
              navigation
              pagination={{ clickable: true }}
              //scrollbar={{ draggable: true }}
              className='swiper-container'
             >
                {fi.map((data, index) => <SwiperSlide key={data.props.children[3]} virtualIndex={index} style={{display: 'flex', justifyContent: 'center'}} ><div>{data}</div></SwiperSlide> )}
            </Swiper>
            </div>
        
        
      </div>
      <div id ="second" style={{
        display: 'none',
        alignItems: 'center',
        height: '92.5vh',
        backgroundColor: 'skyblue',
        zIndex: 0,
        flexDirection: 'column'}}>
        
        <Game/>
      </div>
    </>
  );
}
export default App;
//style={{display: 'flex', width: '100vw', height: '85vh'}}
// style={{display:'flex', justifyContent: 'center'}}