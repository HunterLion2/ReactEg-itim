import { Link } from "react-router";

export default function Movie({ movieObj }) {
  return (
    <div className="col">
      <div className="movie position-relative h-100">
        <Link to={`/movies/${movieObj.id}`} className="movie-poster">
          <img
            src={"https://image.tmdb.org/t/p/original/" + movieObj.poster_path}
            alt={movieObj.title}
            className="card-img-top movie-poster-img"
          />
        </Link>

        <div className="pt-2">
          <h2 className="h6 text-start">{movieObj.title}</h2>
        </div>
      </div>
    </div>
  );
}
