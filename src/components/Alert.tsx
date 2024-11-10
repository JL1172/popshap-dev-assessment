export enum ALERT_TYPE { //eslint-disable-line
  FAILURE = "FAILURE",
}
import "../styles-c/StyledAlert.css";

export default function Alert(props: { type: ALERT_TYPE; message: string }) {
  return (
    <div
      className={
        props.message && props.type === ALERT_TYPE.FAILURE
          ? "failure"
          : "closed"
      }
    >
      {props.message && props.message}
    </div>
  );
}
