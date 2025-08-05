import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Practice from "./component/Contoh.jsx";
import ShoppingApp from "./component/ShoppingApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Practice /> */}
    <ShoppingApp />
    {/* <h1>testing</h1> */}
  </StrictMode>
);
