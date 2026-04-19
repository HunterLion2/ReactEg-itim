import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import MovieList from "../components/MovieList";

const apiUrl = "https://api.themoviedb.org/3";
const api_key = "9394fb08eb73fd225d415dd17bb8eb01";
const language = "tr-TR";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        const response = await fetch(
          `${apiUrl}/movie/popular?api_key=${api_key}&page=${page}&language=${language}`,
        );

        if (!response.ok) {
          throw new Error("Hata oluştu");
        }

        const data = await response.json();

        if (data.results) {
          setMovies(data.results);
        }
        setError("");
      } catch (error) {
        setError(error.message);
      }

      setLoading(false);
    }
    getMovies();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const totalHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.innerHeight + window.pageYOffset;
      setScroll(scrollPosition >= totalHeight - 5);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (scroll && !loading) {
      setPage((prev) => prev + 1);
      setScroll(false);
    }
  }, [scroll, loading]);

  useEffect(() => {
    async function movieList() {
      try {
        setLoading(true);
        setPage((prev) => prev + 1);
        console.log(page);

        const response = await fetch(
          `${apiUrl}/movie/popular?api_key=${api_key}&page=${page}&language=${language}`,
        );

        if (!response.ok) {
          throw new Error("Hata oluştu");
        }

        const data = await response.json();

        if (data.results) {
          setMovies((prevMovies) =>
            page === 1 ? data.results : [...prevMovies, ...data.results],
          );
        }
        setError("");
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    movieList();
  }, [scroll]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return <MovieList movies={movies} title="Popüler Filmler" />;
};

export default Movies;
