import React from "react";
import Home from "../pages/Home";
import GamePage from "../pages/GamePage";
import Ending from "../pages/Ending";
import App from "./App";
import { createHashRouter } from "react-router-dom";

const router = createHashRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/game",
        element: <GamePage />,
      },
      {
        path: "/ending",
        element: <Ending />,
      },
    ],
  },
]);

export default router;