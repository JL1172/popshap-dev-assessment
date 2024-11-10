import { useEffect, useState } from "react";
import Header from "../layout/Header";
import "../styles-c/StyledLeaderboard.css";
import { mock_scores } from "../mock-resources/scores";
import CurrentScore from "../components/CurrentScore";
import Button from "../components/Button";

export type ScorePayload = {
  name: string;
  score: number;
  place?: number;
};

export default function Leaderboard() {
  const [scores, setScores] = useState<ScorePayload[] | null>(null);
  useEffect(() => {
    window.localStorage.clear();
    const copy_of_mock_scores: ScorePayload[] = [...mock_scores]
      .slice(0, 5)
      .sort((a, b) => b.score - a.score);
    setScores(copy_of_mock_scores);
  }, []);
  return (
    <div className="container">
      <Header />
      <div id="heading">
        <div>Current</div>
        <div> Scores.</div>
      </div>
      {scores !== null && (
        <div id="scoreContainer">
          {scores.map((n: ScorePayload, i: number) => {
            return <CurrentScore {...{ ...n, place: i + 1 }} key={i} />;
          })}
        </div>
      )}
      <Button text="Add a Score" />
    </div>
  );
}
