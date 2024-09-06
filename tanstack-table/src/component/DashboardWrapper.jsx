import PropTypes from "prop-types";
import "./../styles/dashboard.css";
import SideBar from "./SideBar";
import { useState } from "react";

const DashboardWrapper = ({ children }) => {
  console.log("dashboard wrapper");
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <div className="dashboard_wrapper">
      <div className="dashboard_sidebar">
        <SideBar
          setIsSideBarOpen={setIsSideBarOpen}
          isSideBarOpen={isSideBarOpen}
        />
      </div>
      <div className="dashboard_main">{children}</div>
    </div>
  );
};

DashboardWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardWrapper;
