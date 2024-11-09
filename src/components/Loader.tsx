import { MutatingDots } from "react-loader-spinner";
import "../styles-c/StyledLoader.css";
export default function Loader() {
  return (
    <div className="loader">
      <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="lightblue"
        secondaryColor="lightblue"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      Loading...
    </div>
  );
}
