const reducer = (books = [], action) => {
  switch (action.type) {
    case "FETCH_BOOKS":
      return books;
    default:
      return books;
  }
};

export default reducer;
