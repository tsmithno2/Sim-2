import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addListing } from "../dux/reducer";

class NewListingImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURL: ""
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
    this.props.listings.push(this.state.imageURL);
  }

  handleClickCancel() {
    this.setState({
      imageURL: ""
    });
  }

  render() {
    return (
      <div>
        <h1>Add New Listing</h1>
        <br />
        <h3>Image URL</h3>
        <input
          name="imageURL"
          value={this.state.imageURL}
          onChange={this.handleinput}
        />
        <Link to="/newlisting">
          <button onClick={() => this.handleClickPrevious()}>
            Previous Step
          </button>
        </Link>
        <Link to="/mortgage">
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

export default connect(mapStateToProps, { addListing })(NewListingImage);
