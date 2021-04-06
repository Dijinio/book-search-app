import * as api from "../api";

export const getBooks = (title) => async (dispatch) => {
  try {
    const {
      data: { items },
    } = await api.fetchBooks(title);
    dispatch({ type: "FETCH_BOOKS", payload: items });
  } catch (error) {
    console.log(error.message);
  }
};

export const liveSearchBooks = (title) => async (dispatch) => {
  try {
    const {
      data: { items },
    } = await api.liveSearch(title);
    const bookTitles = items?.map((item) => item.volumeInfo.title);
    dispatch({ type: "LIVE_SEARCH", payload: bookTitles });
  } catch (error) {
    console.log(error.message);
  }
};
