import s from "./instructions.module.css"
import { useState } from "react";


type InstructionsProps = {
    show: boolean;
  };

export default function Instructions({show}:InstructionsProps) {
    
    return (show ? <div className={s.scoreContainer}>
        <div className={s.scoreBox}>
            <h1>Guide</h1>
            <h2>How to play</h2>
            <p>Move the sliders for red, green and blue until the colour in the bottom half matches the colour in the top half. Then press submit</p>
            <h2>Score</h2>
            <p>You are scored based on how similar you can get the colours. The score is out of 100</p>


        </div>

    </div> : null)
};



