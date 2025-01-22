import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/Layouts/MainLayout";
import Home from "./pages/Home";
import FetchOld from "./pages/FetchOld";
import FetchRQ from "./pages/FetchRQ";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/old",
          element: <FetchOld />,
        },
        {
          path: "/new",
          element: <FetchRQ />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>
};

export default App;
