import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./authProvider";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import RoutesRoot from "./routes";
import { MainContextProvider } from "./store/main-context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <MainContextProvider>
    <AuthProvider>
      <RoutesRoot />
    </AuthProvider>
  </MainContextProvider>
);

reportWebVitals();
