import { useState } from "react";
import { FirebaseService } from "../services/firebase";
import { ScorePayload } from "../pages/Leaderboard";

export const initialLeaderboardState: ScorePayload[] = [];

export const useLeaderboard = (
  initialState: ScorePayload[] = initialLeaderboardState
): [ScorePayload[], typeof getTopPlayers, string] => {
  const [data, setData] = useState(initialState);
  const [error, setError] = useState("");

  const dbInstance = new FirebaseService();

  const getTopPlayers = async (): Promise<void> => {
    try {
      setError("");
      const topFiveUsers: ScorePayload[] = (await dbInstance.getPlayers()).map(
        (n: Record<string, string>, i: number) => ({
          fName: n.fName.charAt(0).toUpperCase().concat(n.fName.substring(1)),
          lName: n.lName[0].toUpperCase(),
          score: Number(n.score),
          place: i + 1,
        })
      );
      setData(topFiveUsers);
    } catch {
      setError(
        "An unexpected problem occurred, if problem persists, contact admin"
      );
      setTimeout(() => {
        setError("");
      }, 2500);
    }
  };
  return [data, getTopPlayers, error];
};
