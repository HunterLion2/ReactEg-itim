import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Category from "./pages/Category";
import MovieDetails from "./pages/MovieDetails";
import MainLayout from "./layouts/MainLayout";
import SearchResults from "./pages/SearchResults";
import UserWatchList from "./pages/UserWatchList";
import Login from "./pages/Login";
import Register from "./pages/Register";

const routes = createBrowserRouter([
  { 
    path: "/",
    element:  <Home /> 
  },

  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "movies", element: <Movies /> },
      { path: "category", element: <Category /> },
      { path: "movies/:id", element: <MovieDetails /> },
      { path: "search", element: <SearchResults /> },
      { path: "watchlist", element: <UserWatchList /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
