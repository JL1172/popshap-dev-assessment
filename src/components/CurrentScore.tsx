import { ScorePayload } from "../pages/Leaderboard";
import "../styles-c/StyledScore.css";

export default function CurrentScore(props: ScorePayload) {
  return (
    <div
      className={
        props.place && props?.place % 2 === 0
          ? `score-row`
          : "score-row highlighted"
      }
    >
      <div>
        {props?.place}. {props.fName} {props.lName[0]}.
      </div>
      <div>{props.score}</div>
    </div>
  );
}
