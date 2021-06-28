import React, { Component } from "react";
import { Button, Card, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Book extends Component {
  state = {
    data: this.props.data,
    storedBook: [],
    copiedArry: [],
  };
  handleIssue = (data) => {
    console.log(this.state.data);
    let findindex = this.state.data.findIndex((p) => p.name == data);
    console.log(findindex);
    this.state.data.splice(findindex, 1);
    // console.log(deletedData);
    // let localArray = [...this.state.storedBook, data];
    // let localData = this.state.data;
    // console.log(localData)
    // let emptyArray = { name: "", writer: "" };
    // deletedData[0].name = emptyArray.name;
    // deletedData[0].writer = emptyArray.writer;
    // let returnedArray = [...this.state.copiedArry, emptyArray];
    // console.log(localData);
    // this.setState({ storedBook: localArray, data: localData });
  };
  handleReturn = () => {};
  render() {
    return (
      <div className="container">
        <Col>
          {this.state.data.map((data) => (
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>{data.writer}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => this.handleIssue(data.name)}
                >
                  issue
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Col>
        <div>
          issued book:-
          {this.state.storedBook.map((issuedBook) => (
            <div>
              {issuedBook}

              <Button
                variant="success"
                mr-auto
                my-2
                my-lg-0
                style={{ margin: "20px" }}
                onClick={() => this.handleReturn()}
              >
                Return
              </Button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
