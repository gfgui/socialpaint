import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Routes
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Register from './routes/home/resgister';
import Login from './routes/home/login';
import Home from './routes/home/home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Login />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      }
    ]
  }
])

/*
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "register",
    element: <Register />
  }
])*/

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
