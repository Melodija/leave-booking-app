import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Entitlement from "./pages/home/Entitlement";
import Navigation from "./pages/home/Navigation";
import BookLeave from "./pages/book-leave/BookLeave";

ReactDOM.render(
  <Router>
    <Navigation />
    <Route path="/" exact component={Entitlement} />
    <Route path="/book-leave" exact component={BookLeave} />
  </Router>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
