
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import CourseListing from './pages/CourseListing/CourseListing.jsx';
import CourseSingle from './pages/CourseSingle/CourseSingle.jsx';
import Contact from './pages/Contact/Contact.jsx';
// import Home from './pages/Home/Home.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/Courses",
        element: <CourseListing />,
      },
      {
        path: "/CourseSingle",
        element: <CourseSingle />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
     
    ],


  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

