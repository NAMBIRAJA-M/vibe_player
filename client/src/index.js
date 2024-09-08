import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import App from "./App";
import LoginPage from "./components/pages/LoginPage";
import SignUp from "./components/pages/SignUp";
const router=createBrowserRouter([
  {
    path:'/',
    element:<App />
  },
  {
    path:"/login",
    element:<LoginPage />
  },
  {
    path:"/signup",
    element:<SignUp />
  }
])
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>
);
