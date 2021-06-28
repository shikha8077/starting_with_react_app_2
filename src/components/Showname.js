import React, { Component } from "react";
import Main_components from "./Main_components";

export default class Showname extends Component {
  state = {
    data: this.props.data,
  };
  render() {
    console.log("data", this.state.data);

    return (
      <div>
        {this.state.data.map((p) => (
          <p>{p}</p>
        ))}
      </div>
    );
  }
}
