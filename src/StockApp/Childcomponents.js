import React, { Component } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Childcomponents extends Component {
  state = {
    Data: this.props.productData,
    click: 0,
    setData: 0,
  };
  handleIncrease = (index) => {
    let localArray = [...this.state.Data];

    localArray[index].quantity++;
    localArray[index].newPrice =
      localArray[index].oldPrice * localArray[index].quantity;
    this.setState({ Data: localArray });
  };
  handleDecrease = (index) => {
    let localArray = [...this.state.Data];

    localArray[index].quantity--;
    localArray[index].newPrice =
      localArray[index].oldPrice * localArray[index].quantity;
    this.setState({ Data: localArray });
  };
  handleSort = (data) => {
    this.setState({ setData: data });
  };
  handleDataSort() {
    let localArray = [...this.state.Data];
    if (this.state.setData === 1) {
      return localArray.sort(this.sortOrder);
    } else if (this.state.setData === 0) {
      return localArray;
    }
    if (this.state.setData === 2) {
      return localArray.sort(this.setPrice);
    }
  }
  setPrice(a, b) {
    return a.oldPrice - b.oldPrice;
  }
  sortOrder(a, b) {
    return a.quantity - b.quantity;
  }
  handleTable = () => {
    this.props.handleViewChange(0);
  };
  render() {
    let localdata = this.handleDataSort();
    return (
      <div>
        <Button variant="primary" onClick={() => this.handleSort(1)}>
          Order By Quantity
        </Button>
        <Button variant="primary" onClick={() => this.handleSort(2)}>
          Order By Price
        </Button>
        <Button variant="primary" onClick={() => this.handleTable()}>
          View Tabel
        </Button>

        <Row>
          {localdata.map((p, index) => (
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{p.name}</Card.Title>
                <Card.Text>
                  {p.category}
                  <br />
                  Oldprice:{p.oldPrice}
                  <br />
                  Price:
                  {p.newPrice}
                  <br />
                  Quantity:{p.quantity}
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => this.handleIncrease(index)}
                >
                  Increase
                </Button>
                <Button
                  variant="primary"
                  disabled={p.quantity === 0}
                  onClick={() => this.handleDecrease(index)}
                >
                  Decrease
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </div>
    );
  }
}
