import axios from 'axios'; 

let baseURL;

switch (location.hostname) {
  case 'localhost':
    baseURL = 'http://localhost:5000';
    break;
 // case '192.168.0.102':
  //  baseURL = 'http://192.168.0.102:8080/api';
  //  break;
  default:
    baseURL = 'http://localhost:5000';
}

const api = axios.create({
  baseURL,
});

export default api;