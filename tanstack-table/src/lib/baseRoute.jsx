import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Ether from "../pages/Ether.js";
import CssAnimations from "../pages/Animations/index.jsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/ether",
        element: <Ether />,
      },
      {
        path: "/css-animation",
        element: <CssAnimations />,
      },
    ],
  },
]);
