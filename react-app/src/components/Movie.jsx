import { Link } from "react-router" 

export default function Movie({ movieObj, onAddToList, onSelectedMovie }) {

  // useParams değeri ile link ile beraber gelen değeri tutmamızı sağlar.

  return (
    <div className="col">
      <div
        className="card movie position-relative"
        onClick={() => onSelectedMovie(movieObj)}
      >
        <Link to={`/movies/${movieObj.id}`} className="strecthed-link">
          <img
            src={"https://image.tmdb.org/t/p/original/" + movieObj.poster_path}
            alt=""
            className="card-img-top"
          />
        </Link>

        <div className="card-body">
          <h2 className="h6 card-title">{movieObj.title}</h2>
          <button
            className="btn btn-link fs-5 text-danger position-absolute top-0 start-0"
            onClick={() => onAddToList(movieObj)}
          >
            <i className="bi bi-plus-circle"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
