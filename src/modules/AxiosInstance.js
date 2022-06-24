import axios from "axios";

export const BaseURL = axios.create({
  baseURL: "http://reading-book-api.herokuapp.com/",
});
