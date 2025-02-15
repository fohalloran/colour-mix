import s from "./input.module.css";

type InputProps = {
    guess: () => void;
    rgbGuess:number[];
    setRGB: (rgb:number[]) => void;
}


export default function Input({ rgbGuess,setRGB,guess }: InputProps) {

    var colour = {
        backgroundColor: `rgb(${rgbGuess[0]},${rgbGuess[1]},${rgbGuess[2]})`,
    };

    function changeValue(id: number, newValue: number) {
        const newRGB = [...rgbGuess];
        newRGB[id] = newValue
        setRGB(newRGB);
    }


    return (
        <div className={s.container} style={colour}>
            <div className={s.inputContainer}>
                <label className={s.inverted} htmlFor="red">Red:</label>
                    <input className={s.slider} id="red" min="0" max="255" step="1" type="range" value={rgbGuess[0]} onChange={(e) => (changeValue(0, +e.target.value))} />
                    <div className={s.inverted}>{rgbGuess[0]}</div>
                <label className={s.inverted} htmlFor="green">Green:</label>
                <input className={s.slider} id="green" min="0" max="255" step="1" type="range" value={rgbGuess[1]} onChange={(e) => (changeValue(1, +e.target.value))} />
                <div className={s.inverted}>{rgbGuess[1]}</div>
                <label className={s.inverted} htmlFor="blue">Blue:</label>
                    <input className={s.slider} id="blue" min="0" max="255" step="1" type="range" value={rgbGuess[2]} onChange={(e) => (changeValue(2, +e.target.value))} />
                    <div className={s.inverted}>{rgbGuess[2]}</div>

            </div>




            <button className={s.submitBtn} onClick={guess}>Submit</button>
        </div>
    );
}
