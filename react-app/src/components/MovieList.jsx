import Movie from "./Movie";
// MovieList.jsx dosyasında değeri ekrana yazdırırken {{pages}} yerine {pages}
// kullanmalısın (React'te ekrana değişken yazdırmak için tek süslü parantez kullanılır).

export default function MovieList({ movies, title , pages, upperPages, lowerPages}) {
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

          <div className="container mt-3 mx-5">
            <div className="row">
              <div className="col-lg-6">
                <button className="btn btn-outline-warning" onClick={() => lowerPages(pages--)}><i class="fa-solid fa-caret-left"></i></button>
              </div>
              <div className="col-lg-5">
                {pages}
              </div>
              <div className="col-lg-1">
                <button className="btn btn-outline-warning" onClick={() => upperPages(pages++)}><i class="fa-solid fa-caret-right"></i></button>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
