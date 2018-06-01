import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addListing } from "../dux/reducer";

class NewListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      propertyName: "",
      address: "",
      city: "",
      state: "",
      zip: ""
    };
    this.handleinput = this.handleinput.bind(this);
  }

  handleinput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleClickNext() {
    this.props.addListing([
      this.state.propertyName,
      this.state.address,
      this.state.city,
      this.state.state,
      this.state.zip
    ]);
    console.log("we got here");
    console.log(this.props);
  }

  handleClickCancel() {
    this.setState({
      propertyName: "",
      address: "",
      city: "",
      state: "",
      zip: ""
    });
  }

  render() {
    return (
      <div>
        <h1>Add New Listing</h1>
        <h3>Proptery Name</h3>
        <input
          name="propertyName"
          value={this.state.propertyName}
          onChange={this.handleinput}
        />
        <h3>Address</h3>
        <input
          name="address"
          value={this.state.address}
          onChange={this.handleinput}
        />
        <h3>City</h3>
        <input
          name="city"
          value={this.state.city}
          onChange={this.handleinput}
        />
        <h3>State</h3>
        <input
          name="state"
          value={this.state.state}
          onChange={this.handleinput}
        />
        <h3>Zip</h3>
        <input name="zip" value={this.state.zip} onChange={this.handleinput} />
        <Link to="/image">
          <button onClick={() => this.handleClickNext()}>Next Step</button>
        </Link>
        <Link to="/">
          <button onClick={() => this.handleClickCancel()}>Cancel</button>
        </Link>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    listings: state.listings
  };
}

export default connect(mapStateToProps, { addListing })(NewListing);
