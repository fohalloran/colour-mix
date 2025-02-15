import s from "./target.module.css"

type TargetProps = {
  red: number;
  green: number;
  blue: number;
  round: number;
};



export default function Target({ red, green, blue, round }: TargetProps) {
  const colour = {
    backgroundColor: `rgb(${red},${green},${blue})`,
  };

  return (<div className={s.container} style={colour}><div className={s.timer}>{round}</div></div>)
};
