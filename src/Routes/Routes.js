import { createBrowserRouter } from "react-router-dom";
import Home from "../components/HomeComponents/Home/Home";
import Mian from "../components/Layout/Mian";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mian></Mian>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
