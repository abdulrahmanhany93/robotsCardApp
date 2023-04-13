import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./containers/App";
import "tachyons";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
