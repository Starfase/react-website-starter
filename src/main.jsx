import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AOS from "aos";
import "aos/dist/aos.css";

import "./index.css";
import App from "./App.jsx";

AOS.init({
  duration: 900,
  easing: "ease-out",
  once: true,
  offset: 80,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);