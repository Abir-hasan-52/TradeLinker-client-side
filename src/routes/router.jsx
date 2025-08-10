import React, { Suspense } from "react";
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
import About from "../Components/Shared/About/About";
import ContactUs from "../Components/Shared/ContactUs/ContactUs";
import DashboardLayOut from "../layouts/DashBoardLayout";
import AllPublicProducts from "../Pages/AllPublicProducts.jsx/AllPublicProducts";
import DiscountedProducts from "../Pages/Home/DiscountedProducts";
import NewArrivals from "../Pages/Home/NewArrivals";
import DashboardHome from "../Components/DashboardHome/DashboardHome";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/products",
        element: <AllPublicProducts />,
      },
      {
        path: "/products/:id",
        element: <ProductsDetails />,
      },
      {
        path: "/category-products",
        element: <TopProducts />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <ContactUs />,
      },
      {
        path: "/discounted",
        element: <DiscountedProducts />,
      },
      {
        path: "/new-arrivals",
        element: <NewArrivals />,
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
          fetch(
            `https://trade-linker-server-side.vercel.app/all-products/${params.id}`
          ),
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
          fetch(
            `https://trade-linker-server-side.vercel.app/all-products/${params.id}`
          ),
      },
      {
        path: "/my-products",
        element: (
          <PrivateRoute>
            <MyProducts />
          </PrivateRoute>
        ),
      },
      // {
      //   path: "/cart",
      //   element: (
      //     <PrivateRoute>
      //       <CartPage />
      //     </PrivateRoute>
      //   ),
      // },
      { path: "login", Component: Login },
      { path: "register", Component: Register },
      { path: "*", Component: Error },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayOut />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },

      {
        path: "cart",
        element: (
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        ),
      },
      {
        path: "my-products",
        element: (
          <PrivateRoute>
            <MyProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "add-products",
        element: (
          <PrivateRoute>
            {" "}
            <AddProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "all-products",
        element: <AllProducts />,
        // loader: () => fetch("https://trade-linker-server-side.vercel.app/all-products"),
      },
    ],
  },
]);

export default router;
