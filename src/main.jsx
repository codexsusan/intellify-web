import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Stroke from './components/Stroke';
import Diabetes from './components/Diabetes';
import Heartattack from './components/Heartattack';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/stroke",
    element: <Stroke />,
  },
  {
    path: "/diabetes",
    element: <Diabetes />,
  },
  {
    path: "/heart-attack",
    element: <Heartattack />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)