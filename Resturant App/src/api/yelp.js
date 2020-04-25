import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer GaNNz7yIQww2xWsWDkAzplzVWt5OLYXNqVzY9oRiWgk-ROva2F0wR25npzEjPT4X3UFUGkjEtRZFG9oRTldY7UJc4meLq62giHliX6X7oa7atWZjmEAjRB-Tt9eCXnYx"
  }
});
