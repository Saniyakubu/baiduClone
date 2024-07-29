import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import StateProvider from "./context/store.tsx";

import "./index.css";
import ThemeProvider from "./themeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <StateProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </StateProvider>
    </Router>
  </React.StrictMode>
);
