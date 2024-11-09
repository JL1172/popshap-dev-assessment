import Header from "../layout/Header";
import "../styles-c/StyledAddScoreForm.css";
import { initialState, useForm } from "../hooks/useForm";
import { AddScoreCtx } from "../contexts/AddScoreCtx";
import Form from "../components/Form";
import Loader from "../components/Loader";

export default function AddScoreForm() {
  const [data, changeHandler, submit] = useForm(
    "persistAddScoreFormState",
    initialState
  );
  return (
    <AddScoreCtx.Provider value={{ data, changeHandler, submit }}>
      {data?.isLoading ? (
        <Loader />
      ) : (
        <div className="addScoreContainer">
          <Header />
          <div id="heading">
            <div>Add a</div>
            <div> Score.</div>
          </div>
          <Form />
        </div>
      )}
    </AddScoreCtx.Provider>
  );
}
