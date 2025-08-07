import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./Router.jsx";
import AuthProvider from "./component/contexts/AuthProvider.jsx";
import CounterProvider from "./component/contexts/counter/CounterProvider.jsx";
import { Provider as TodoProvider } from "react-redux";
import { store } from "./component/redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoProvider store={store}>
      <AuthProvider>
        <CounterProvider>
          <Router />
        </CounterProvider>
      </AuthProvider>
    </TodoProvider>
  </StrictMode>
);
