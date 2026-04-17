import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import Header from "./components/Header";
import { ThemeContext } from "./contexts/ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider value={{theme: "light"}}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
