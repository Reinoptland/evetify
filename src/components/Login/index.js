import React, { Component } from "react";
import UserForm from "../UserForm";

class LoginContainer extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div>
        <UserForm
          text="Login"
          values={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default LoginContainer;
