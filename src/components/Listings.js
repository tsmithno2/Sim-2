import React from "react";
import { connect } from "react-redux";

function listings(props) {
  let listings = props.listings.map((e, i) => {
    return <div key={i}>{e}</div>;
  });

  return (
    <div>
      <h1>Houses</h1>
      <hr />
      {listings}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    listings: state.listings
  };
}
export default connect(mapStateToProps)(listings);
