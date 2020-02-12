import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import EventFormContainer from "./components/Events/CreateEventContainer";
import { connect } from "react-redux";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <nav>
            <Link to="/">
              <li>HOME</li>
            </Link>
            <Link to="/signup">
              <li>Sign up!</li>
            </Link>
            <Link to="/login">
              <li>Login</li>
            </Link>
            <Link to="/events/new">
              <li>Create Event</li>
            </Link>
          </nav>

          <Route exact path="/" component={ActualHome} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/events/new" component={EventFormContainer} />
        </Router>
      </header>
    </div>
  );
}

export default App;
