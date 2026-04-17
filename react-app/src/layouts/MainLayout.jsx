import React, {useContext, useState} from "react";
import { NavLink, Outlet } from "react-router";
import Movies from "../pages/Movies";
import { ThemeContext } from "../contexts/ThemeContext";

const MainLayout = () => {

  const [searchText, setSearchText] = useState("");

  const {theme} = useContext(ThemeContext);
 
  return (
    // Burada heryerde kullanılabilmesi için bir Layout yapısı oluştururuz ve bunu heryerden çağırarak ister footer ister header olarak kullanılır.
    <>
      <nav className={`navbar navbar-expand-lg bg-warning border-bottom border-body" data-bs-theme="${theme}"`}>
        <div className="container">
          <NavLink className="btn" to="/">Home</NavLink>
          <NavLink className="btn" to="/movies">
            Movies
          </NavLink>
          <input 
            type="text"
            id="searchButton" 
            placeholder="Film Araması" 
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </nav>
      <main>
        {/* Buranın içerisine Route da tabnımlamış olduğumuz Children değerlerden hangisi seçili ise onun bilgisi gelir. */}
        <Outlet context={{ searchText }}/>
        
      </main>
    </>
  );
};

export default MainLayout;
