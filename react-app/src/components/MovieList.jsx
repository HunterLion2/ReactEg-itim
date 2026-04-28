import Movie from "./Movie";

export default function MovieList({ movies, title }) {
  return (
    <section className="container py-4">
      <header className="d-flex align-items-center justify-content-between mb-3">
        <h2
          className="h4 fw-semibold m-0 text-uppercase"
          style={{ letterSpacing: ".4px" }}
        >
          {title}
        </h2>
        <span
          className="rounded-pill"
          style={{
            width: 1000,
            height: 6,
            background: "linear-gradient(90deg,#f59e0b,#ef4444)",
          }}
        />
      </header>

      {movies.length == 0 ? (
        <h2 className="text-center">Filmlere Ulaşılamıyor</h2>
      ) : (
        <>
          <div
            id="movie-list" 
            className="row row-cols-3 row-cols-md-4 row-cols-lg-6 g-2"
          >
            {movies.map((m, index) => (
              <Movie key={index} movieObj={m} />
            ))}
          </div>

          <div className="container mx-5 text-center align-center">
              <button>
              </button>
          </div>
        </>
      )}
    </section>
  );
}
