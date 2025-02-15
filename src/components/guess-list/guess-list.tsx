import s from "./guess-list.module.css"
import Guess from "../guess/guess";


type guess = {
    id: number,
    word: string,
}

type GuessListProps = {
    guesses: {
      id: number;
      word: string;
    }[];
  };



export default function GuessList({guesses}:GuessListProps) {


    const listItems = guesses.map(guess => <Guess word={guess.word} id={guess.id}></Guess>);
    return <ul className={s.text}>{listItems}</ul>;


}