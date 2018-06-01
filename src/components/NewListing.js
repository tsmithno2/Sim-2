import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NewListing extends Component {
  constructor() {
    super();
    this.state = {
      propertyName: "",
      address: "",
      city: "",
      state: "",
      zip: ""
    };
  }

  render() {
    return (
      <div>
        <h1>Add New Listing</h1>
        <h3>Proptery Name</h3>
        <input />
        <h3>Address</h3>
        <input />
        <h3>City</h3>
        <input />
        <h3>State</h3>
        <input />
        <h3>Zip</h3>
        <input />
        <Link to="/image">
          <button>Next Step</button>
        </Link>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    );
  }
}
