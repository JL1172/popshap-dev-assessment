import React from "react";
import Header from "../layout/Header";
import "../styles-c/StyledAddScoreForm.css";
import { initialState, useForm } from "../hooks/useForm";

export default function AddScoreForm() {
  const [data, change, submit] = useForm(
    "persistAddScoreFormState",
    initialState
  );
  return (
    <div className="addScoreContainer">
      <Header />
      <div id="heading">
        <div>Add a</div>
        <div> Score.</div>
      </div>
      <form
        onSubmit={(e: React.MouseEvent<HTMLFormElement, MouseEvent>) =>
          submit(e)
        }
      >
        <label htmlFor="fName">First Name</label>
        <input
          type="text"
          name="fName"
          value={data.fName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            change(e.target.name, e.target.value)
          }
        />
        <label htmlFor="lName">Last Name</label>
        <input
          type="text"
          name="lName"
          value={data.lName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            change(e.target.name, e.target.value)
          }
        />
      </form>
    </div>
  );
}
