import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import App from "./App";
import AuthSpotify from "./AuthSpotify";
const router=createBrowserRouter([
  {
    path:'/',
    element:<App />
  },
  {
    path:"/auth",
    element:<AuthSpotify />
  }
])
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>
);
