import Movie from "./Movie";

export default function MovieCategoryList({ movies, title }) {

  function movieCategoryList(){
    console.log(movies[0].title)
  }

  return (
    <div className="container py-3">
        <button onClick={() => (movieCategoryList())}></button>
    </div>
  );
}
