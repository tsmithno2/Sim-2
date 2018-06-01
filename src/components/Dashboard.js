import React, { Component } from "react";
import { Link } from "react-router-dom";
import Listings from "./Listings";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <Link to="/newlisting">
          <button>Add New Proptery</button>
        </Link>
        <hr />
        <div>
          <h2>Home Listings</h2>
        </div>
        <br />
        <hr />
        <Listings />
      </div>
    );
  }
}
