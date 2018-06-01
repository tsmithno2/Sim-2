import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addListing } from "../dux/reducer";

class NewListingMortgage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monthlyMortgage: "",
      desiredRent: ""
    };
    this.handleinput = this.handleinput.bind(this);
  }

  handleinput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleClickPrevious() {
    this.setState({
      imageURL: ""
    });
  }

  handleClickNext() {
    this.props.listings.push(
      this.state.monthlyMortgage,
      this.state.desiredRent
    );
  }

  handleClickCancel() {
    this.setState({
      monthlyMortgage: "",
      desiredRent: ""
    });
  }

  render() {
    return (
      <div>
        <h1>Add New Listing</h1>
        <h3>Recomended Rent $800</h3>
        <h3>Monthly Mortgage Amount</h3>
        <input
          name="monthlyMortgage"
          value={this.state.monthlyMortgage}
          onChange={this.handleinput}
        />
        <h3>Desired Monthly Rent</h3>
        <input
          name="desiredRent"
          value={this.state.desiredRent}
          onChange={this.handleinput}
        />
        <Link to="/image">
          <button onClick={() => this.handleClickPrevious()}>
            Previous Step
          </button>
        </Link>
        <Link to="/">
          <button onClick={() => this.handleClickNext()}>Complete</button>
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

export default connect(mapStateToProps, { addListing })(NewListingMortgage);
