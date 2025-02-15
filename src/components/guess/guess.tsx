import s from "./guess.module.css"

type guess = {
    id:number,
    word:string,
}

export default function Guess(props:guess) {
    return <li className={s.text}>{props.word}</li>;
}

