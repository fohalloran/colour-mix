import { useState } from "react";
import Input from "../input/input";
import s from "./game-window.module.css"
import dynamic from 'next/dynamic'

const NoSSRTarget = dynamic(() => import('../target/target'), {
    ssr: false
})


export default function GameWindow() {

    const numRounds = 3
    const startingRGBValue = 150
    const maxDelta = 255 * 3 //255-0 is the biggest someone can be incorrect, 3 because there are 3 colours


    const [targetRGB,setTarget] = useState<number[]>([Math.round(Math.random() * 255), Math.round(Math.random() * 255), Math.round(Math.random() * 255)])
    const [guessRGB, setRGBGuess] = useState<number[]>([150, 150, 150]);
    const [score, setScore] = useState<number>();
    const [showScore, setShowScore] = useState(false)
    const [showFinalScore, setShowFinalScore] = useState(false)
    const [rounds, setRounds] = useState(1)
    const [totalScore, setTotalScore] = useState(0)

    function resetGame(){
        setRounds(1)
        setTotalScore(0)
        setShowFinalScore(false)
        resetColours()
        resetScore()
    }

    function resetColours(){
        setRGBGuess([startingRGBValue,startingRGBValue,startingRGBValue])
        setTarget([Math.round(Math.random() * 255), Math.round(Math.random() * 255), Math.round(Math.random() * 255)])
    }
    function resetScore(){
        setShowScore(false)
        setScore(0)
    }

    function setupNextRound(){
        if (rounds >= numRounds){
            setShowScore(false)
            setShowFinalScore(true)
        } else {
            resetScore()
            resetColours()
            setRounds(rounds+1)
        }
    }
    
    function guess() {
        var deltaRed = Math.abs(targetRGB[0] - guessRGB[0])
        var deltaGreen = Math.abs(targetRGB[1] - guessRGB[1])
        var deltaBlue = Math.abs(targetRGB[2] - guessRGB[2])
        
        var score = Math.round(100-((deltaRed + deltaGreen + deltaBlue) / maxDelta * 100))

        setScore(score)
        setTotalScore(totalScore + score)
        setShowScore(true)


    }

    return (

        <div className={s.container}>
            <NoSSRTarget red={targetRGB[0]} green={targetRGB[1]} blue={targetRGB[2]} round={rounds} />
            {showScore ?
                <div className={s.scoreContainer}>
                    <div className={s.scoreBox}>
                        <h1 className={s.scoreText}>You scored {score}!</h1>
                        <button className={s.scoreButton} onClick={setupNextRound}>Next</button>

                    </div>

                </div> : null}
            
                {showFinalScore ?
                <div className={s.scoreContainer}>
                    <div className={s.scoreBox}>
                        <h1 className={s.scoreText}>Total score {totalScore}!</h1>
                        <button className={s.scoreButton} onClick={resetGame}>Play again</button>

                    </div>

                </div> : null}

            <Input guess={guess} rgbGuess={guessRGB} setRGB={setRGBGuess} />
        </div>
    );
}