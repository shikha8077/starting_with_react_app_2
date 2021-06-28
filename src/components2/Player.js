import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Player extends Component {
  state = {
    data: this.props.data,
    score: this.props.player,
  };
  handleButton = (playerData) => {
    console.log(playerData);

    let localData = [...this.state.data];
    console.log(localData);
    let FindIndex = localData.findIndex((find) => find.name === playerData);
    console.log(FindIndex);
    localData[FindIndex].score++;
    this.setState({ data: localData });
  };
  render() {
    return (
      <div>
        {this.state.data.map((playerData) => (
          <div>
            <li>{playerData.name}</li>
            <li>{playerData.score}</li>
            <Button
              variant="success"
              onClick={() => this.handleButton(playerData.name)}
            >
              Success
            </Button>
          </div>
        ))}
      </div>
    );
  }
}
