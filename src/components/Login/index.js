import React, { Component } from "react";
import UserForm from "../UserForm";
import { login } from "../../actions/users";
import { connect } from "react-redux";

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
    console.log("WHAT IS THIS PROPS DISPATCH", this.props.dispatch);
    this.props.dispatch(login(this.state.email, this.state.password));
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div>
        {this.props.userLoggedIn ? (
          <h1>You are logged in</h1>
        ) : (
          <UserForm
            text="Login"
            values={this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userLoggedIn: state.user.token !== null
  };
};

export default connect(mapStateToProps)(LoginContainer);
