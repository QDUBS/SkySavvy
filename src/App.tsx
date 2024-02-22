import React from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Note from "./pages/Notes";
import Error from "./pages/Error";
import CityDetails from "./pages/CityDetails";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> }, //, errorElement: <Error /> },
    { path: "/details/:city", element: <CityDetails />, errorElement: <Error /> },
    { path: "/favorites", element: <Favorites />, errorElement: <Error /> },
    { path: "/note", element: <Note />, errorElement: <Error /> },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
