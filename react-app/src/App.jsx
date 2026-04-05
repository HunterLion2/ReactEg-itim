import Header from "./Components/Header";
import MovieList from "./components/MovieList";

// Burasi bir toplama kampıdır aslında burada çağırdığımız değerler aslında 

// Header ve MovieList gibi değerleri çağırmış oluruz. 

export default function App() {
  return (
    <>
      <Header />
      <MovieList />
    </>
  );
}
