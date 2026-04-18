import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import MovieList from "../components/MovieList";
import { useOutletContext } from "react-router";

const apiUrl = import.meta.env.VITE_TMDB_API_URL;
const api_key = import.meta.env.VITE_TMDB_API_KEY;

let page = 1;
const language = import.meta.env.VITE_TMDB_LANGUAGE || "tr-TR";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [pages, setPage] = useState(1);
  const [scroll, setScroll] = useState(false);

  const { searchText } = useOutletContext();


  useEffect(() => {
    setPage(1);
    setMovies([]);  
  }, [searchText]);

  useEffect(() => {
    async function getMovies() {
      try {
        setLoading(true);

        if (searchText) {
          setScroll(false);

          const response = await fetch(
            `${apiUrl}/search/movie?api_key=${api_key}&query=${encodeURIComponent(searchText)}&page=${pages}&language=${language}`
          );

          if (!response.ok) {
            throw new Error("Hata oluştu");
          }

          const data = await response.json();

          if (data.results) {
            setMovies((prevMovies) =>
              pages === 1 ? data.results : [...prevMovies, ...data.results]
            );
          }
        } else {
          const response = await fetch(
            `${apiUrl}/movie/popular?api_key=${api_key}&page=${pages}&language=${language}`
          );

          if (!response.ok) {
            throw new Error("Hata oluştu");
          }

          const data = await response.json();

          if (data.results) {
            setMovies((prevMovies) =>
              pages === 1 ? data.results : [...prevMovies, ...data.results]
            );
          }
          setError("");
        }
        setLoading(false);
        setScroll(false);
      } catch (error) {
        setError(error.message);
      }
    }

    getMovies();
  }, [scroll, searchText, pages]);

  useEffect(() => {
    async function Scrools() {
      window.addEventListener("scroll", () => {
        const nearBottom =
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight;
        if (nearBottom) {
          setScroll(true);
          setPage(page++);
          console.log("Ekranın sonu ");
        }
      });
    }

    Scrools();
  }, [scroll == false, searchText==false]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return <MovieList movies={movies} title="Popüler Filmler" />;
};

export default Movies;
