import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "360dc4edf89044f4a6bf8c48940da2aa",
  },
});

export { CanceledError };
