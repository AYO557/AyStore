import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authenticated from "../layouts/Authenticated.jsx";
import App from "../layouts/App.jsx";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";

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
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default Router;
