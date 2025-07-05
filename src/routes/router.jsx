import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home/Home';
import Login from '../Pages/LogIn/Login';
import MainLayout from '../layouts/MainLayout';
import Register from '../Pages/Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
     Component: MainLayout,
     children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path:"login",
            Component:Login,
        },
        {
            path:"register",
            Component:Register
        }
     ]
  },
]);

export default router;