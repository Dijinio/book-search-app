import axios from "axios";
import { GOOGLE_API_KEY } from "../config/index";

const KEY = GOOGLE_API_KEY;

axios.defaults.baseURL = "https://www.googleapis.com/books/v1";

export const liveSearch = (title) =>
  axios.get(`/volumes?q=intitle:${title}&key=${KEY}&maxResults=10`);

export const fetchBooks = (title) =>
  axios.get(`/volumes?q=intitle:${title}&key=${KEY}`);

export const fetchSingleBook = (id) => axios.get(`/volumes/${id}?key=${KEY}`);
