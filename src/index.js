import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Schedule from "./app/pages/Schedule/Schedule";
import Location from "./app/pages/Location/Location";
import Info from "./app/pages/Info/Info";
import Home from "./app/pages/Home/Home";
import Shuttles from "./app/pages/Shuttles/Shuttles";
import Navbar from "./app/components/Navbar/Navbar";
import { LanguageProvider } from "./app/context/LanguageContext";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/schedule",
    element: (
      <>
        <Navbar />
        <Schedule />
      </>
    ),
  },
  {
    path: "/location",
    element: (
      <>
        <Navbar />
        <Location />
      </>
    ),
  },
  {
    path: "/info",
    element: (
      <>
        <Navbar />
        <Info />
      </>
    ),
  },
  {
    path: "/shuttles",
    element: (
      <>
        <Navbar />
        <Shuttles />
      </>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </React.StrictMode>
);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
