import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authenticated from "../layouts/Authenticated.jsx";
import App from "../layouts/App.jsx";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";
import Home from "../pages/Home.jsx";
import Shop from "../pages/Shop.jsx";
import Help from "../pages/Help.jsx";
import Products from "../pages/Products.jsx";
import UserContextProvider from "../contexts/UserContext.jsx";
import CartContextProvider from "../contexts/CartContext.jsx";

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
      element: (
        <CartContextProvider>
          <UserContextProvider>
            <App />
          </UserContextProvider>
        </CartContextProvider>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "shop",
          element: <Shop />,
          children: [
            {
              path: ":id",
              element: <Products />,
            },
          ],
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
