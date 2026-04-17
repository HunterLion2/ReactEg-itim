import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import MainLayout from "./layouts/MainLayout";


// Route oluşturmak için kullanılır createBrowserRouter.
const routes = createBrowserRouter([

  {
    path: "/",
    // Buradaki element'in anlamı şudur "/" route'una gidince ilk önce açılıcak olan bölüm MainLayout'dur sonrasında aşşağında sonrasında açılıcak olan children pages'leri yazdık.
    // sonrasında path ile aynı route değerini başka bir child elementine daha verirsek o zaman ikisini birden aç anlamına gelir.
    element: <MainLayout />,
    children: [
      { index: "/", element: <Home /> },
      // Movies içerisine gelen değerler film APİ'si içerisinden gelen değerler olucak.
      { path: "movies", element: <Movies /> },
      // Burada : kullanmak demek sayı değeri geliceğini belirtiriz.
      { path: "movies/:id", element: <MovieDetails /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;