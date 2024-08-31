import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import MoviesContext from "./components/Context";
import App from "./App";
import { BrowserRouter, Route, Router } from "react-router-dom";
import TicketsPage from "./pages/Tickets";
// import FavouritesProvider from './components/FavouritesProvider';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <MoviesContext>
        <App />
      </MoviesContext>
    </React.StrictMode>
  </BrowserRouter>
);
