import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

//                   ---------- FİLTER TİTLE -------------

// Aksiyon , Macera, Korku, Gerilim,  Komedi , Dram ,Müzik , Bilim-Kurgu ,Fantastik

export default function Filter({ isitsee, setIsitsee , onSelectCategory}) {
  const { theme } = useContext(ThemeContext);

  let filtercolor = theme ? "dark" : "light" ? "light" : "dark";

  const categorylist = [
    "Aksiyon",
    "Macera",
    "Korku",
    "Gerilim",
    "Komedi",
    "Dram",
    "Müzik",
    "Bilim-Kurgu",
    "Fantastik",
  ];

  return (
    <>
      <div
        className="filter"
        style={{
          display: "flex",
        }}
      >
        {isitsee && (
          <div className="filter-section animate__animated animate__flash">
            {categorylist.map((cat) => (
              <button 
                key={cat} 
                onClick={() => onSelectCategory(cat)}
                className="btn btn-dark mx-2" 
                type="button">

                {cat}
              </button>
            ))}
          </div>
        )}
        <div className="filter-button">
          <button
            className={`btn btn-outline-${filtercolor}`}
            onClick={() => setIsitsee((prev) => !prev)}
          >
            <i class="fa-solid fa-filter"></i>
          </button>
        </div>
      </div>
    </>
  );
}
