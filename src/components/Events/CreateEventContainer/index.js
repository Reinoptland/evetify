import React, { Component } from "react";
import EventForm from "../EventForm";
import { connect } from "react-redux";
import { createEvent } from "../../../actions/events";

class CreateEventContainer extends Component {
  state = {
    title: "",
    image: "",
    date: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.dispatch(
      createEvent(this.state.title, this.state.date, this.state.image)
    );
    // this.setState({ title: "", image: "", date: "" });
  };

  render() {
    return (
      <div>
        <EventForm
          values={this.state}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default connect()(CreateEventContainer);
