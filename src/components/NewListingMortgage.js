import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NewListingMortgage extends Component {
  constructor() {
    super();
    this.state = {
      monthlyMortgage: "",
      desiredRent: ""
    };
  }

  render() {
    return (
      <div>
        <h1>Add New Listing</h1>
        <h3>Recomended Rent $800</h3>
        <h3>Monthly Mortgage Amount</h3>
        <input />
        <h3>Desired Monthly Rent</h3>
        <input />
        <Link to="/image">
          <button>Previous Step</button>
        </Link>
        <Link to="/">
          <button>Complete</button>
        </Link>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    );
  }
}
