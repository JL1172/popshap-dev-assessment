import { NavigateFunction, useNavigate } from "react-router-dom";
import React from "react";
export default function Button(props: { text: string }) {
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
        value={props.text}
        onClick={(e: React.MouseEvent<HTMLInputElement>) =>
          navigateToAddScoreForm(e)
        }
      />
    </div>
  );
}
