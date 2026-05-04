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
  const [filtermovie, setFilterMovie] = useState("");
  const [titles, setTitles] = useState("");
  const [filteredMovie, setFilteredMovie] = useState("");
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");

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

        if (data.results && filtermovie == "") {
          setMovies(data.results);
          setTitles("");
        } else {
          setTitles(filteredMovie);

          const movie = data.results;

          const movieCategory = await Promise.all(
            movie.map(async (e) => {
              const res = await fetch(
                `${apiUrl}/movie/${e.id}?api_key=${api_key}&language=${language}&append_to_response=credits`,
              );
              if (!res.ok) return null;
              return res.json();
            }),
          );

          const filtered = movieCategory
            .filter(Boolean)
            .filter((m) => m.genres?.some((g) => g.name === filtermovie));

          setFilteredMovie(filtered);

        }

        setError("");
      } catch (error) {
        setError(error.message);
      }

      setLoading(false);
    }

    getMovies();
  }, [page, filtermovie]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <MovieList
      movies={movies}
      title="Popüler Filmler"
      pages={page}
      upperPages={() => setPage(page + 1)}
      lowerPages={() => setPage(page > 1 ? page - 1 : 1)}
      filteredmovie = {(cat) => setFilterMovie(cat)}
      filteredmovies = {filteredMovie}
      newTitle = {titles}
    />
  );
};

export default Movies;
