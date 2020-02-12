import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Signup from "./components/Signup";

function Test() {
  return <h1>hello!</h1>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <nav>
            <Link to="/signup">
              <li>Sign up!</li>
            </Link>
          </nav>

          <Route exact path="/" component={Test} />
          <Route exact path="/signup" component={Signup} />
        </Router>
      </header>
    </div>
  );
}

export default App;
