import React, { useContext, useState, useEffect } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeContext } from "../contexts/ThemeContext";

const MainLayout = () => {
  const { theme } = useContext(ThemeContext);
  const color = theme === "dark" ? "bg-dark text-white" : "bg-light text-dark";

  const [result, setScroll] = useState(false);
  

  useEffect(() => {
    const onScroll = () => {
      const totalHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.innerHeight + window.pageYOffset;
      setScroll(scrollPosition >= totalHeight - 5);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <main className={color}>
        {result == true && (
          <Navbar />
        )}
      </main>
        <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
