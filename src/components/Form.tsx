import { useContext } from "react";
import { AddScoreCtx } from "../contexts/AddScoreCtx";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const ctx = useContext(AddScoreCtx);
  const nav = useNavigate();
  return (
    <form
      onSubmit={(e: React.MouseEvent<HTMLFormElement, MouseEvent>) =>
        ctx?.submit(e, nav)
      }
    >
      <div className="form-field">
        <label htmlFor="fName">First name</label>
        <input
          className={ctx?.data.fNameErr ? "error" : ""}
          type="text"
          placeholder="Type here..."
          name="fName"
          value={ctx?.data.fName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            ctx?.changeHandler(e.target.name, e.target.value)
          }
        />
        {ctx?.data.fNameErr && (
          <div className="error-message">{ctx?.data.fNameErr}</div>
        )}
      </div>
      <div className="form-field">
        <label htmlFor="lName">Last name</label>
        <input
          type="text"
          className={ctx?.data.lNameErr ? "error" : ""}
          name="lName"
          placeholder="Type here..."
          value={ctx?.data.lName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            ctx?.changeHandler(e.target.name, e.target.value)
          }
        />
        {ctx?.data.lNameErr && (
          <div className="error-message">{ctx?.data.lNameErr}</div>
        )}
      </div>
      <div className="score-field">
        <label htmlFor="score">Score</label>
        <input
          type="text"
          className={ctx?.data.scoreErr ? "error" : ""}
          name="score"
          placeholder="0"
          value={ctx?.data.score}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            ctx?.changeHandler(e.target.name, e.target.value)
          }
        />
        {ctx?.data.scoreErr && (
          <div className="error-message">{ctx?.data.scoreErr}</div>
        )}
      </div>
      <div className="button-wrapper">
        <input type="submit" value={"Submit"} />
      </div>
    </form>
  );
}
