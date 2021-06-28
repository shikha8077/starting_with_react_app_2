import React, { Component } from "react";
import NavBar from "./Nav";

export default class MainComponnets extends Component {
  state = {
    Book: [
      { name: "Shikha Pandey", writer: "ShikhaP" },
      { name: "diksha Pandey", writer: "dikshaP" },
      { name: "Aman Pandey", writer: "AmanP" },
      { name: "Abhijeet ", writer: "AbhijeetP" },
    ],
  };
  render() {
    return (
      <div>
        <NavBar data={this.state.Book} />
      </div>
    );
  }
}
