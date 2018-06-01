const initState = {
  i: 0,
  listings: [],
  listingsList: {}
};

const ADD_LISTING = "ADD_LISTING";
const HIT_COMPLETE = "HIT_COMPLETE";

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_LISTING:
      return Object.assign({}, state, { listings: action.payload });
    default:
      return state;
  }
};

export function addListing(listings) {
  return {
    type: ADD_LISTING,
    payload: listings
  };
}

export function hitComplete(listings) {}
