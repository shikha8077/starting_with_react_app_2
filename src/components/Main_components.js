import React, { Component } from "react";
import Showname from "./Showname";

export default class Main_components extends Component {
  state = {
    names: ["Jack", "Steve", "Martha", "Bob", "Katherine"],
  };
  render() {
    return (
      <div>
        <Showname data={this.state.names} />
      </div>
    );
  }
}
