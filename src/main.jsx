import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";

import LogIn from "./pages/LogIn/LogIn.jsx";
import Register from "./pages/Register/Register.jsx";
import Error from "./pages/Error/Error.jsx";
import FAQS from "./pages/FAQS/FAQS.jsx";
import CourseListing from "./pages/CourseListing/CourseListing.jsx";
import CourseSingle from "./pages/CourseSingle/CourseSingle.jsx";
import Contact from "./pages/Contact/Contact.jsx";

import BlogListing from "./pages/BlogListing/BlogListing.jsx";
import BlogSingle from "./pages/BlogSingle/BlogSingle.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/LogIn",
        element: <LogIn />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/Courses",
        element: <CourseListing />,
      },

      {
        path: "/Blog",
        element: <BlogListing />,
      },
      {
        path: "/BlogSingle",
        element: <BlogSingle />,
      },

      {
        path: "/FAQS",
        element: <FAQS />,
      },
      {
        path: "*",
        element: <Error />,
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
