import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authenticated from "../layouts/Authenticated.jsx";
import App from "../layouts/App.jsx";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";
import Home from "../pages/Home.jsx";
import Shop from "../pages/Shop.jsx";
import Help from "../pages/Help.jsx";

function Router() {
  const routes = createBrowserRouter([
    {
      path: "auth",
      element: <Authenticated />,
      children: [
        {
          index: true,
          element: <Login />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
      ],
    },
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "help",
          element: <Help />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default Router;
