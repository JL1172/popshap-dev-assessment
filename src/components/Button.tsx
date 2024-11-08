import { NavigateFunction, useNavigate } from "react-router-dom";
import "../styles-c/StyledButton.css";
import React from "react";

export default function Button() {
  const nav: NavigateFunction = useNavigate();
  const navigateToAddScoreForm = (
    e: React.MouseEvent<HTMLInputElement>
  ): void => {
    e.preventDefault();
    nav("/add-score");
  };
  return (
    <div className="button-wrapper">
      <input
        type="submit"
        value="Add a Score"
        onClick={(e: React.MouseEvent<HTMLInputElement>) =>
          navigateToAddScoreForm(e)
        }
      />
    </div>
  );
}
