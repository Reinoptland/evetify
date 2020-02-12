import React, { Component } from "react";

const SignupForm = props => {
  // console.log(props);
  return (
    <div>
      Signup
      <form onSubmit={props.handleSubmit}>
        <label>Email:</label>
        <input
          onChange={props.handleChange}
          type="email"
          name="email"
          value={props.values.email}
        />
        <label>Password:</label>
        <input
          onChange={props.handleChange}
          type="text"
          name="password"
          value={props.values.password}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default SignupForm;
