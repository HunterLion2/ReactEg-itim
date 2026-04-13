import React from "react";
import { NavLink, Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-warning border-bottom border-body"
        data-bs-theme="light"
      >
        <div className="container">
          <NavLink className="btn" to="/">Home</NavLink>
          <NavLink className="btn" to="/movies" end>
            Movies
          </NavLink>
          <NavLink className="btn" to="/movies/1" end>
            Movie Details
          </NavLink>
        </div>
      </nav>
      <main>
        {/* Buranın içerisine Route da tabnımlamış olduğumuz Children değerlerden hangisi seçili ise onun bilgisi gelir. */}
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
