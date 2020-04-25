import axios from "axios";

export default axios.create({
  baseURL: "http://41224188.ngrok.io", //update baseURL in every 8 hours
});
