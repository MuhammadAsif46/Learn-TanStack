import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/Layouts/MainLayout";
import Home from "./pages/Home";
import FetchOld from "./pages/FetchOld";
import FetchRQ from "./pages/FetchRQ";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";
import FetchDynamic from "./pages/FetchDynamic";
import InfiniteScroll from "./pages/InfiniteScroll";

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
        {
          path: "/new/:id",
          element: <FetchDynamic />,
        },
        {
          path: "/infinite",
          element: <InfiniteScroll />,
        },
      ],
    },
  ]);

   const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  );
};

export default App;
