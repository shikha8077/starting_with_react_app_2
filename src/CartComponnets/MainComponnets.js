import React, { Component } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

export default class MainComponnets extends Component {
  state = {
    CartDetails: [
      {
        id: 1,
        name: "realme3",
        price: 8000,
        model: "s23",
        battery: "3000mah",
        storage: "64GB",
      },
      {
        id: 2,
        name: "realme4",
        price: 9000,
        model: "s24",
        battery: "4000mah",
        storage: "32GB",
      },
      {
        id: 3,
        name: "realme5",
        price: 10000,
        model: "s25",
        battery: "6000mah",
        storage: "126GB",
      },
      {
        id: 4,
        name: "realme6",
        price: 12000,
        model: "s238",
        battery: "7000mah",
        storage: "8GB",
      },
      {
        id: 5,
        name: "realme8",
        price: 13000,
        model: "s240",
        battery: "30000mah",
        storage: "12GB",
      },
      {
        id: 6,
        name: "realme9",
        price: 18000,
        model: "s245",
        battery: "40000mah",
        storage: "150GB",
      },
    ],
    cartArray: [],
  };
  handleIssue = (data, cart) => {
    console.log(data);
    let localCartArray = [...this.state.cartArray];
    let cartIndex = this.state.cartArray.findIndex((p) => p.id === data);

    console.log(cartIndex);
    if (cartIndex === -1) {
      cart.quantity = 1;
      localCartArray.push(cart);
    } else if (cartIndex !== -1) {
      localCartArray[cartIndex].quantity =
        localCartArray[cartIndex].quantity + 1;
    }
    console.log(localCartArray);
    console.log(this.state.CartDetails);
    this.setState({ cartArray: localCartArray });
  };
  render() {
    return (
      <div>
        <Row>
          {this.state.CartDetails.map((p) => (
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>
                    {p.name}|{p.model}
                  </Card.Title>
                  <Card.Text>{p.storage}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => this.handleIssue(p.id, p)}
                  >
                    {p.price}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
