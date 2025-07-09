import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LogIn/Login";
import MainLayout from "../layouts/MainLayout";
import Register from "../Pages/Register/Register";
import AllProducts from "../Pages/AllProducts/AllProducts";
import AddProducts from "../Pages/AddProducts/AddProducts";
import MyProducts from "../Pages/MyProducts/MyProducts";
import Error from "../Components/ErrorPage/Error";
import UpdateProducts from "../Pages/AddProducts/UpdateProducts";
import TopProducts from "../Pages/TopProducts/TopProducts";
import ProductsDetails from "../Pages/TopProducts/ProductsDetails";
import CartPage from "../Pages/Cart/CartPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/all-products",
        element: <AllProducts />,
        loader: () => fetch("http://localhost:3000/all-products"),
        
      },
      {
        path: "/category-products",
        element: <TopProducts />,
      },
      {
        path: "/category-products/:categoryName",
        element: <TopProducts />,
      },
      {
        path: "/category-products/:categoryName/:id",
        element: (
          <PrivateRoute>
            <ProductsDetails />
          </PrivateRoute>
        ),

        loader: ({ params }) =>
          fetch(`http://localhost:3000/all-products/${params.id}`),

      },
      {
        path: "/add-products",
        element: (
          <PrivateRoute>
            {" "}
            <AddProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "/all-products/:id",
        element: (
          <PrivateRoute>
            <UpdateProducts />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/all-products/${params.id}`),
      },
      {
        path: "/my-products",
        element: (
          <PrivateRoute>
            <MyProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "/cart",
        element: <PrivateRoute><CartPage /></PrivateRoute>,
      },
      { path: "login", Component: Login },
      { path: "register", Component: Register },
      { path: "*", Component: Error },
    ],
  },
]);

export default router;
