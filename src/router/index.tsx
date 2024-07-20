import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../view/Home/Home";
import ErrorPage from "../view/Error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
