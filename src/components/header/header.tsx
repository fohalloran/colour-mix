import Instructions from "../instructions/instructions";
import s from "./header.module.css"
import { useState } from "react";
export default function Header() {
    const [showInstructions, setShowInstructions] = useState(false)
    
    function pressHowToPlay(){
        setShowInstructions(!showInstructions)
    }
    return (<div className={s.container}><h1 className={s.text}>COLOUR MIX</h1><button className={s.btn} onClick={pressHowToPlay}>How to play</button><Instructions show={showInstructions} /></div>)
};
