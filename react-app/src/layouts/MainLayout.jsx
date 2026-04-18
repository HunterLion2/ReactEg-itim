import React, {useContext, useState} from "react";
import { NavLink, Outlet , useLocation} from "react-router";
import Movies from "../pages/Movies";
import { ThemeContext } from "../contexts/ThemeContext";

const MainLayout = () => {

  const [searchText, setSearchText] = useState("");

  const {bg, item, toggleTheme} = useContext(ThemeContext);
  const location = useLocation(); // Bu fonksüyon bulunduğumuz konumu alır.

  if(location.pathname != "/") {
  return (
    // Burada heryerde kullanılabilmesi için bir Layout yapısı oluştururuz ve bunu heryerden çağırarak ister footer ister header olarak kullanılır.
    <>
      <nav className={`navbar navbar-expand-lg bg-${bg} border-bottom border-body" data-bs-ad=${bg}`}>
        <div className="container">
          <NavLink className="btn" style={{color:`${item}`}} to="/">Home</NavLink>
          <NavLink className="btn" style={{color:`${item}`}} to="/movies">Movies</NavLink>
          <input 
            style={{color:`${item}`}}
            type="text"
            id="searchButton" 
            placeholder="Film Araması" 
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          /> 
          <button 
            style={{color:`${item}`}}
            className="btn darklight-button"
            onClick={toggleTheme}
          >
          <i className="fa-regular fa-moon"></i>
          </button>
        </div>
      </nav>
      <main>
        {/* Buranın içerisine Route da tabnımlamış olduğumuz Children değerlerden hangisi seçili ise onun bilgisi gelir. */}
        <Outlet context={{ searchText }}/>
      </main>
    </>
  )
  } else {
  return (
    // Burada heryerde kullanılabilmesi için bir Layout yapısı oluştururuz ve bunu heryerden çağırarak ister footer ister header olarak kullanılır.
    <>
      <nav className={`navbar navbar-expand-lg bg-${bg} border-bottom border-body" data-bs-theme=${bg}`}>
        <div className="container">
          <NavLink className="btn" style={{color:`${item}`}} to="/">Home</NavLink>
          <NavLink className="btn" style={{color:`${item}`}} to="/movies">Movies</NavLink>
          <button 
            style={{color:`${item}`}}
            className="btn darklight-button"
            onClick={toggleTheme}
          ><i className="fa-regular fa-moon"></i></button>
        </div>
      </nav>
      <main>
        {/* Buranın içerisine Route da tabnımlamış olduğumuz Children değerlerden hangisi seçili ise onun bilgisi gelir. */}
        <Outlet context={{ searchText }}/>
      </main>
    </>
  )
  }
  
};

export default MainLayout;
