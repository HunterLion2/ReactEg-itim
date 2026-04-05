import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// Buradaki alan da main.jsx aslında ana merkez konumundadır ve aşşağıda toplama kampız olan App.jsx'i çağırırız.

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
