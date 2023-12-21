import { createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/Layout";
import HomePage from "./Pages/HomePage";
import GameDetail from "./Pages/GameDetail";
import ErrorPage from "./Pages/ErrorPage";
import GameBuy from "./Pages/GameBuy";
import { element } from "prop-types";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "games/:slug",
        element: <GameDetail />,
      },
      {
        path: "games/:slug/buy",
        element: <GameBuy />,
      },
    ],
  },
]);

export default router;
