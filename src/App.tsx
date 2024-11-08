import { Route, Routes } from "react-router-dom";
import Leaderboard from "./pages/Leaderboard";
import "./styles-c/StyledApp.css"

function App() {
  return (
    <div id = "appContainer">
      <Routes>
        <Route path="/" element={<Leaderboard />} />
      </Routes>
    </div>
  );
}

export default App;
