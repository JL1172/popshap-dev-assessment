import { Route, Routes } from "react-router-dom";
import Leaderboard from "./pages/Leaderboard";
import "./styles-c/StyledApp.css"
import AddScoreForm from "./pages/AddScoreForm";

function App() {
  return (
    <div id = "appContainer">
      <Routes>
        <Route path="/" element={<Leaderboard />} />
        <Route path="/add-score" element={<AddScoreForm />} />
      </Routes>
    </div>
  );
}

export default App;
