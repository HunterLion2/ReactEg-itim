import React from "react";
import MovieCategoryList from "../components/MovieCategoryList"

const Category = () => {
  return (
    <>
      <div id="category">
        <div className="container">
            <div>
                <MovieCategoryList/>
            </div>
        </div>
      </div>
    </>
  );
};

export default Category;
