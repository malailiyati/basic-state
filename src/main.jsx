import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./Router.jsx";
import AuthProvider from "./component/contexts/AuthProvider.jsx";
import CounterProvider from "./component/contexts/counter/CounterProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <CounterProvider>
        <Router />
      </CounterProvider>
    </AuthProvider>
  </StrictMode>
);
