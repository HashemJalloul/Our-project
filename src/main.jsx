
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import FAQS from './pages/FAQS/FAQS.jsx';
import Home from './pages/Home/Home.jsx';
import CourseListing from './pages/CourseListing/CourseListing.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
     path: "/FAQS",
     element: <FAQS />,
    },
   
    {
     path: "/Home",
     element: <Home />,
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/CourseListing",
      element: <CourseListing />,
    }

    ]


  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

