import { useEffect, useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { GlobalContext } from "./context/Global";
import Home from "./component/Home";
import DashboardWrapper from "./component/DashboardWrapper";
import CssAnimations from "./pages/Animations";
import Ether from "./pages/Ether.js";
import Page1 from "./pages/Page1/index.jsx";
import PropTypes from "prop-types";
import Login from "./pages/login/Login.jsx";
import { AuthProvider } from "./lib/Auth/AuthProvider.jsx";

const PrivateRoute = ({ element }) => {
  // In future, you can add authentication logic here
  useEffect(() => {
    console.log("initial run", Math.random() * 10);
  }, []);
  return <DashboardWrapper>{element}</DashboardWrapper>;
};

PrivateRoute.propTypes = {
  element: PropTypes.node.isRequired,
};

const App = () => {
  const [count, setCount] = useState(1);
  const handleCountChange = () => setCount((prev) => prev + 1);
  return (
    <div className="">
      <GlobalContext.Provider value={{ count, handleCountChange }}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/css"
                element={<PrivateRoute element={<CssAnimations />} />}
              />

              <Route
                path="/page1"
                element={<PrivateRoute element={<Page1 />} />}
              />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </GlobalContext.Provider>
    </div>
  );
};

export default App;
