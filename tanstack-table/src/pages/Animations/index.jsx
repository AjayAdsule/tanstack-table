// import Animation from "./Components/Animation";
import { useAuth } from "../../lib/Auth/AuthProvider";
import LoaderBtn from "./Components/LoaderBtn";
// import Button from "./Components/Button";
import "./styles/index.css";

const CssAnimations = () => {
  const { isAuthenticated } = useAuth();
  console.log({ isAuthenticated });
  return (
    <div className="css_animation_container">
      <LoaderBtn />
    </div>
  );
};

export default CssAnimations;
