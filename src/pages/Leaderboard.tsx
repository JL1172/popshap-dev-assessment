import { useEffect } from "react";
import Header from "../layout/Header";
import "../styles-c/StyledLeaderboard.css";
import CurrentScore from "../components/CurrentScore";
import Button from "../components/Button";
import { useLeaderboard } from "../hooks/useLeaderboard";
import Alert, { ALERT_TYPE } from "../components/Alert";

export type ScorePayload = {
  fName: string;
  lName: string;
  score: number;
  place?: number;
};

export default function Leaderboard() {
  const [players, getTopPlayers, error] = useLeaderboard();
  useEffect(() => {
    getTopPlayers();
  }, []);//eslint-disable-line
  return (
    <div className="container">
      <Alert type={ALERT_TYPE.FAILURE} message={error} />
      <Header />
      <div id="heading">
        <div>Current</div>
        <div> Scores.</div>
      </div>
      <div id="scoreContainer">
        {players.length > 0 &&
          players.map((n: ScorePayload, i: number) => {
            return <CurrentScore {...{ ...n, place: i + 1 }} key={i} />;
          })}
      </div>
      <Button text="Add a Score" />
    </div>
  );
}
