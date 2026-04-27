import React from "react";
import SearchForm from "../components/SearchForm";
import Movies from "./Movies";

const Home = () => {
  return (
    <>
      <div id="home">
        <div className="img-overlay">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 mx-auto text-center text-white" id="general">
                <h1 className="display-4 fw-bold">Hoş Geldiniz!</h1>
                <p className="lead fst-italic">
                  Keşfedilecek milyonlarca film, TV şovu ve kişi. Şimdi
                  keşfedin.
                </p>
                <SearchForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Movies />
    </>
  );
};

export default Home;
