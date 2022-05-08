import axios from "axios";

export const BaseURL = axios.create({
    baseURL: "https://reading-book-api.herokuapp.com"
})