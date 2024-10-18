import "bootstrap/dist/css/bootstrap.min.css";
import "../src/css/index.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import App from "./components/App";
import "bootstrap/dist/js/bootstrap.bundle.min";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
