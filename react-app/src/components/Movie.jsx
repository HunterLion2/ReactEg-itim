import { Link } from "react-router";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext, useState } from "react";

export default function Movie({ movieObj }) {
  const { theme } = useContext(ThemeContext);

  const [themes, setThemes] = useState(
    theme ? "dark" : "ligth" ? "light" : "dark",
  );

  return (
    <>
      {movieObj.poster_path != null ? (
        <div className="col">
          <div className="movie position-relative h-100">
            <Link to={`/movies/${movieObj.id}`} className="movie-poster">
              <img
                src={
                  "https://image.tmdb.org/t/p/original/" + movieObj.poster_path
                }
                alt={movieObj.title}
                className="card-img-top movie-poster-img"
              />
            </Link>

            <div className="pt-2">
              <h2 className="h6 text-start">{movieObj.title}</h2>
            </div>
          </div>
        </div>
      ) : (
        <div className="col">
          <div className="movie position-relative h-100">
            <Link to={`/movies/${movieObj.id}`} className="movie-poster border border-4">
              <i
                class={`fa-regular fa-circle-question fw-bold  text-${themes}`}
                style={{
                  fontSize: 70,
                  position: "absolute",
                  top: "45%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              ></i>
            </Link>

            <div className="pt-2">
              <h2 className="h6 text-start">{movieObj.title}</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
