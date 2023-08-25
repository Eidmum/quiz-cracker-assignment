import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Layout/Main.jsx";
import Blog from "./components/Blog/Blog.jsx";
import Home from "./components/Home/Home.jsx";
import Statictics from "./components/Statictics/Statictics.jsx";
import topicsLoader from "./components/Loader/topicsLoader.js";
import Quiz from "./components/Quiz/Quiz.jsx";
import quizLoader from "./components/Loader/quizLoader.js";
import Error from "./components/ErrorPage/Error.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: topicsLoader,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/statictics",
        element: <Statictics></Statictics>,
      },
      {
        path: "/quiz/:quizId",
        element: <Quiz></Quiz>,
        loader: ({ params }) => quizLoader(params.quizId),
      },
    ],
    errorElement: <Error></Error>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
