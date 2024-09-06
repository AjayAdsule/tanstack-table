import { useNavigate } from "react-router-dom";
import "./../styles/dashboard.css";
import { PanelLeft } from "lucide-react";

const SideBar = ({ setIsSideBarOpen, isSideBarOpen }) => {
  const navigate = useNavigate();

  return (
    <aside className={` ${isSideBarOpen ? "side_bar" : "side_bar_close"}`}>
      <div className="side_bar_header">
        <span>Side Bar</span>
        <PanelLeft onClick={() => setIsSideBarOpen((prev) => !prev)} />
      </div>
      <ul className="list">
        <li onClick={() => navigate("/ether")}>Ether</li>
        <li onClick={() => navigate("/css")}>CSS Animations</li>
        <li onClick={() => navigate("/page1")}>Page1</li>
      </ul>
    </aside>
  );
};

export default SideBar;
