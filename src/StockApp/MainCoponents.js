import React, { Component } from "react";
import Childcomponents from "./Childcomponents";
import Tables from "./Table";

export default class MainCoponents extends Component {
  state = {
    priceData: [
      {
        name: "Perk",
        category: "Food",
        oldPrice: 10,
        newPrice: 10,
        quantity: 10,
      },
      {
        name: "5Star",
        category: "Food",
        oldPrice: 15,
        newPrice: 12,
        quantity: 5,
      },
      {
        name: "Pepsi",
        category: "Drink",
        oldPrice: 20,
        newPrice: 22,
        quantity: 3,
      },
      {
        name: "Maggi",
        category: "Food",
        oldPrice: 12,
        newPrice: 15,
        quantity: 22,
      },
      {
        name: "Coke",
        category: "Drink",
        oldPrice: 20,
        newPrice: 20,
        quantity: 15,
      },
      {
        name: "Gems",
        category: "Food",
        oldPrice: 10,
        newPrice: 10,
        quantity: 12,
      },
      {
        name: "7Up",
        category: "Drink",
        oldPrice: 15,
        newPrice: 17,
        quantity: 17,
      },
      {
        name: "Lindt",
        category: "Food",
        oldPrice: 80,
        newPrice: 90,
        quantity: 50,
      },
      {
        name: "Nutties",
        category: "Food",
        oldPrice: 20,
        newPrice: 18,
        quantity: 40,
      },
    ],
    viewChange: 1,
  };
  handleViewChange = (data) => {
    console.log(data);
    this.setState({ viewChange: data });
  };
  handleTableChange = (data) => {
    console.log(data);
    this.setState({ viewChange: data });
  };
  render() {
    return (
      <div>
        {this.state.viewChange === 1 ? (
          <Childcomponents
            productData={this.state.priceData}
            handleViewChange={this.handleViewChange}
          />
        ) : (
          <Tables
            tableData={this.state.priceData}
            handleTableChange={this.handleTableChange}
          />
        )}
      </div>
    );
  }
}
