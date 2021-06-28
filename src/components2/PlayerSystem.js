import React, { Component } from "react";
import Player from "./Player";

export default class PlayerSystem extends Component {
  state = {
    players: [
      { name: "Jack", score: 21 },
      { name: "Steve", score: 30 },
      { name: "Martha", score: 44 },
      { name: "Bob", score: 15 },
      { name: "Katherine", score: 28 },
    ],
  };
  render() {
    return (
      <div>
        <Player data={this.state.players} />
      </div>
    );
  }
}
