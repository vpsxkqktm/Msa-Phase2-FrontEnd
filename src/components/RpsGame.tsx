import React, { useState } from 'react'
import RockImg from '../img/r.png';
import PaperImg from '../img/p.png';
import SciImg from '../img/s.png';
import { Image } from './Image'
import { Button } from '../stories/Button'
import {goBack} from '../App'

let img:any;
let pcPosition:any;


const RpsGame = () => {
    const [val,setVal] = useState("");
    const [pcVal, setPcVal] = useState("");
    const [score,setScore] = useState(0);
    const [pcScore,setPcScore] = useState(0);
    let pos = ["r", "p", "s"];

    const Reset = () => {
        setVal("");
        setPcVal("");
        setScore(0);
        setPcScore(0);
        img = "";
        pcPosition = "";
    };

    const goBackPrep = () => {
        Reset();
        goBack();
    }

    const check = (x:any) => {
        setVal(x);
        let y = pos[Math.floor(Math.random()*pos.length)];
        setPcVal(y);
        if ((x === "r" && y === "s") || (x === "p" && y === "r") || (x === "s" && y === "p")){
            setScore(score + 1);
        } else if ((x === "s" && y === "r") || (x === "r" && y === "p") || (x === "p" && y === "s")){
            setPcScore(pcScore + 1);
        }
    };
    
    const myPosition = () => {
        if (val === "r"){
            img = <Image src={RockImg} position={"r"}/>
        } else if (val === "p"){
            img = <Image src={PaperImg} position={"p"}/>
        } else if (val ==="s"){
            img = <Image src={SciImg} position={"s"}/>
        }
    }

    const callPc = () => {
          if (pcVal === "r"){
            pcPosition = <Image src={RockImg} position={"r"}/>
        } else if (pcVal === "p"){
            pcPosition = <Image src={PaperImg} position={"p"}/>
        } else if (pcVal ==="s"){
            pcPosition = <Image src={SciImg} position={"s"}/>
        }
    }
    
    myPosition();
    callPc();
    return(
        <>
        <text style={{fontSize: "200%"}}>
        Beat the Computer!
        </text>
        <div><Button primary={true} size={'small'} backgroundColor={'orange'} label={'Go back'} onClick={goBackPrep}/>
        <Button primary={true} size={'small'} backgroundColor={'orange'} label={'Reset'} onClick={Reset}/></div>
        
            <div style={{display: 'flex', flex: 0.5, width: '100vw', flexDirection:"row"}}>
                <div style={{display: 'flex', flex: 0.5, alignItems: 'center', justifyContent: 'end', flexDirection:"column"}}>
                
                    <div style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'end', width: '50%', flexDirection:"column"}}>
                        <text style={{fontSize:'200%'}}>score: {score}</text>
                        {img}</div>
                        <text style={{fontSize:'200%'}}>You</text></div>
                <div style={{display: 'flex', flex: 0.5, alignItems: 'center', justifyContent: 'end', flexDirection:"column"}}>
                
                <div style={{display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'end', width: '50%', flexDirection:"column"}}>
                <text style={{fontSize:'200%'}}>score: {pcScore}</text>
                    {pcPosition}</div>
                    <text style={{fontSize:'200%'}}>Computer</text></div>
            </div>
            <div style={{display: 'flex', flex: 0.5, width: '100vw', flexDirection:"row"}}>
                <div style={{display: 'flex', flex: 0.333, alignItems: 'center', justifyContent: 'center',flexDirection:"column"}}><Image src={RockImg} position={"r"}/>
                
                <Button primary={true} size={'large'} backgroundColor={'black'} label={'Rock'} onClick={() => check("r")}/>
                </div>
                <div style={{display: 'flex', flex: 0.334, alignItems: 'center', justifyContent: 'center',flexDirection:"column"}}><Image src={PaperImg} position={"p"}/>
                <Button primary={true} size={'large'} backgroundColor={'black'} label={'Paper'} onClick={() => check("p")}/>
                </div>
                <div style={{display: 'flex', flex: 0.333, alignItems: 'center', justifyContent: 'center',flexDirection:"column"}}><Image src={SciImg} position={"s"}/>
                <Button primary={true} size={'large'} backgroundColor={'black'} label={'Scissors'} onClick={() => check("s")}/>
                </div>
            </div>
        </>
    )

};

export default RpsGame;