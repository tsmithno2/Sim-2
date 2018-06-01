import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NewListingImage extends Component {
  constructor() {
    super();
    this.state = {
      imageURL: ""
    };
  }

  render() {
    return (
      <div>
        <h1>Add New Listing</h1>
        <br />
        <h3>Image URL</h3>
        <input />
        <Link to="/newlisting">
          <button>Previous Step</button>
        </Link>
        <Link to="/mortgage">
          <button>Next Step</button>
        </Link>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    );
  }
}
