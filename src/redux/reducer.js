const reducer = (state = { books: [], liveResults: [] }, action) => {
  switch (action.type) {
    case "FETCH_BOOKS":
      return { ...state, books: action.payload };
    case "LIVE_SEARCH":
      return { ...state, liveResults: action.payload };
    default:
      return state;
  }
};

export default reducer;
