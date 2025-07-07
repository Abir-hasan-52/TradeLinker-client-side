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

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-products",
        element: <AllProducts></AllProducts>,
        loader: () => fetch("http://localhost:3000/all-products"),
      },
      {
        path: "/add-products",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/all-products/:id",
        element: <UpdateProducts></UpdateProducts>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/all-products/${params.id}`),
      },
      {
        path: "/my-products",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "*",
        Component: Error,
      },
    ],
  },
]);

export default router;
