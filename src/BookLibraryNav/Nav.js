import React, { Component } from "react";
import {
  Button,
  Card,
  Col,
  Row,
  Table,
  Navbar,
  Container,
  Nav,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class NavBar extends Component {
  state = {
    book: this.props.data,
    Issued: [],
  };

  handleIssue = (data) => {
    let localBook = [...this.state.book];
    console.log(localBook);
    console.log(data);
    let issuedBook = this.state.Issued;
    issuedBook.push(data);
    let filterBook = localBook.filter((p) => p.name !== data.name);
    console.log("filterBook", filterBook);
    console.log("issuedBook", issuedBook);
    this.setState({ issued: issuedBook, book: filterBook });
  };
  handleReturn = (data) => {
    let localBook = this.state.book;
    let returnBook = [...this.state.Issued];
    let storeBook = returnBook.filter((p) => p.name !== data.name);
    localBook.push(data);
    this.setState({ book: localBook, Issued: storeBook });
  };
  render() {
    return (
      <div>
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link>Total Book {this.state.book.length}</Nav.Link>
                <Nav.Link>Issues Book {this.state.Issued.length}</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          <br />
          <Row>
            {this.state.book.map((p) => (
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{p.name}</Card.Title>
                  <Card.Text>{p.writer}</Card.Text>
                  <Button variant="primary" onClick={() => this.handleIssue(p)}>
                    Issue
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </Row>
          <br />
          <br />
          <Row>
            {this.state.Issued.map((p) => (
              <Card style={{ width: "18rem" }}>
                <Card.Title>{p.name}</Card.Title>
                <Card.Text>{p.writer}</Card.Text>
                <Button variant="primary" onClick={() => this.handleReturn(p)}>
                  Return Book
                </Button>
              </Card>
            ))}
          </Row>
        </>
      </div>
    );
  }
}
