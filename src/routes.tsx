import { createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/Layout";
import HomePage from "./Pages/HomePage";
import GameDetail from "./Pages/GameDetail";
import ErrorPage from "./Pages/ErrorPage";

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
        path: "games/:id",
        element: <GameDetail />,
      },
    ],
  },
]);

export default router;
