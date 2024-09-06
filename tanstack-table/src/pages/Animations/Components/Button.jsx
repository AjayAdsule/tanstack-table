import { MoveRight } from "lucide-react";
import "./../styles/btn.css";

const Button = () => {
  return (
    <button className="animated_btn">
      <span>Submit</span>
      <MoveRight size={14} />
    </button>
  );
};

export default Button;
