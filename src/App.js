import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Test() {
  return <h1>hello!</h1>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Route exact path="/" component={Test} />
        </Router>
      </header>
    </div>
  );
}

export default App;
