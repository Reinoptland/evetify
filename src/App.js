import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";

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
            <Link to="/login">
              <li>Login</li>
            </Link>
          </nav>

          <Route exact path="/" component={Test} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
        </Router>
      </header>
    </div>
  );
}

export default App;
