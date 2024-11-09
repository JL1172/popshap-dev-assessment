import { useContext } from "react";
import { AddScoreCtx } from "../contexts/AddScoreCtx";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const ctx = useContext(AddScoreCtx);
  const nav = useNavigate();
  return (
    <form
      onSubmit={(e: React.MouseEvent<HTMLFormElement, MouseEvent>) =>
        e.preventDefault()
      }
    >
      <div className="form-field">
        <label htmlFor="fName">First name</label>
        <input
          type="text"
          placeholder="Type here..."
          name="fName"
          value={ctx?.data.fName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            ctx?.changeHandler(e.target.name, e.target.value)
          }
        />
      </div>
      <div className="form-field">
        <label htmlFor="lName">Last name</label>
        <input
          type="text"
          name="lName"
          placeholder="Type here..."
          value={ctx?.data.lName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            ctx?.changeHandler(e.target.name, e.target.value)
          }
        />
      </div>
      <div className="score-field">
        <label htmlFor="score">Score</label>
        <input
          type="text"
          name="score"
          placeholder="0"
          value={ctx?.data.score}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            ctx?.changeHandler(e.target.name, e.target.value)
          }
        />
      </div>
      <div className="button-wrapper">
        <input
          type="submit"
          value={"Submit"}
          onClick={(e: React.MouseEvent<HTMLInputElement>) =>
            ctx?.submit(e, nav)
          }
        />
      </div>
    </form>
  );
}
