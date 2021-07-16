import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import GlobalProvider from "./context/GlobalContext";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <Router>
        <App />
      </Router>
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
