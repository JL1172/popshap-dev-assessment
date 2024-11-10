import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
  const nav = useNavigate();
  return (
    <div style = {{cursor: "pointer"}} onClick={() => nav("/")} className="image-wrapper">
      <img src={logo} alt="popshap-logo" />
    </div>
  );
}
