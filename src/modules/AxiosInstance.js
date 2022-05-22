import axios from "axios";

export const BaseURL = axios.create({
    baseURL: "http://localhost:3000"
})
export const BaseURLS3 = axios.create({
    baseURLS3: "https://193383519698.signin.aws.amazon.com/console"
})
