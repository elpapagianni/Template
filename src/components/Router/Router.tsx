import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";
import Login from "../../pages/Login/Login";
import Mainlayout from "../MainLayout/MainLayout";
import PrivateRoute from "./PrivateRoute";
import GlobalRoute from "./GlobalRouter";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <GlobalRoute />,
    children: [{ path: "", element: <Login /> }],
  },
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <Mainlayout />,
        children: [{ path: "", element: <Home /> }],
      },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);
