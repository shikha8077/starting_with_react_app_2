import React, { Component } from "react";
import { Button, Card, Col, Row, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Tables extends Component {
  state = {
    TableData: this.props.tableData,
    click: 0,
    setData: 0,
  };
  handleIncrease = (index) => {
    let localArray = [...this.state.TableData];

    localArray[index].quantity++;
    localArray[index].newPrice =
      localArray[index].oldPrice * localArray[index].quantity;
    this.setState({ tableData: localArray });
  };
  handleDecrease = (index) => {
    let localArray = [...this.state.TableData];

    localArray[index].quantity--;
    localArray[index].newPrice =
      localArray[index].oldPrice * localArray[index].quantity;
    this.setState({ TableData: localArray });
  };
  handleSort = (data) => {
    this.setState({ setData: data });
  };
  handleDataSort() {
    let localArray = [...this.state.TableData];
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
    this.props.handleTableChange(1);
  };
  render() {
    let localdata = this.handleDataSort();

    console.log(this.state.TableData);
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
        <Table striped bordered hover>
          <thead>
            <tr>
              <th> Name</th>
              <th>quantity</th>
              <th>price</th>
              <th>category</th>
            </tr>
          </thead>
          {localdata.map((p, index) => (
            <tbody>
              <tr>
                <td>{p.name}</td>
                <td>{p.quantity} </td>
                <td>{p.newPrice}</td>
                <td>{p.category}</td>
                <td onClick={() => this.handleIncrease(index)}>+</td>
                <td onClick={() => this.handleDecrease(index)}>-</td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    );
  }
}
