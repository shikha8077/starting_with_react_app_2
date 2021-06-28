import React, { Component } from "react";
import Book from "./Book";

export default class Library extends Component {
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
        <Book data={this.state.Book} />
      </div>
    );
  }
}
