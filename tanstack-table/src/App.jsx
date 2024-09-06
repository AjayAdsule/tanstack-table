import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { GlobalContext } from "./context/Global";
import Home from "./component/Home";
import DashboardWrapper from "./component/DashboardWrapper";
import Ether from "./pages/Ether.js";
import PropTypes from "prop-types";
import Login from "./pages/login/Login.jsx";
import { AuthProvider } from "./lib/Auth/AuthProvider.jsx";

const PrivateRoute = ({ element }) => {
  // In future, you can add authentication logic here
  useEffect(() => {
    console.log("initial run", Math.random() * 10);
  }, []);
  return <div>{element}</div>;
};

PrivateRoute.propTypes = {
  element: PropTypes.node.isRequired,
};

const CssAnimationPage = lazy(() => import("./pages/Animations"));
const Page1 = lazy(() => import("./pages/Page1/Page1.jsx"));
const Page2 = lazy(() => import("./pages/page2/Page2.jsx"));

const App = () => {
  const [count, setCount] = useState(1);
  const handleCountChange = () => setCount((prev) => prev + 1);
  return (
    <div className="">
      <GlobalContext.Provider value={{ count, handleCountChange }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <AuthProvider>
            <Suspense fallback={<div>...loading</div>}>
              <Routes>
                <Route element={<DashboardWrapper />}>
                  <Route
                    path="/css"
                    element={<PrivateRoute element={<CssAnimationPage />} />}
                  />

                  <Route
                    path="/page1"
                    element={<PrivateRoute element={<Page1 />} />}
                  />
                  <Route
                    path="/page2"
                    element={<PrivateRoute element={<Page2 />} />}
                  />
                </Route>
              </Routes>
            </Suspense>
          </AuthProvider>
        </BrowserRouter>
      </GlobalContext.Provider>
    </div>
  );
};

export default App;
