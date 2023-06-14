import axios from 'axios';
import { AuthHeader } from './Forms';
const baseURL = "http://145.220.74.171:5000"

export function Login(ah) {
  const headers = {
    'Content-Type': 'application/json'
  }
    const url = baseURL + "/user/login";
    const body = JSON.stringify(ah);

    axios.post(url, body, {"headers" : headers})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}