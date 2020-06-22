import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { AuthProvider } from "./auth";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  rootElement
);
