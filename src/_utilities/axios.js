import axios from "axios";

const API = axios.create({
  baseURL: "https://parseapi.back4app.com/classes/hotel/bVonXoSUHK",
  headers: {
    "X-Parse-Application-Id": "Rr9ZKgR2t2f49g5ueLWriacIrvKy8Hwv7P87FSw3",
    "X-Parse-REST-API-Key": "4C6gLjrbNGoym5m9j9mFQiDzXO5eETLxjUjY9Fzy"
  },
})

export default API