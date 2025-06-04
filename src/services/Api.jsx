import axios from 'axios'; 

/*
let baseURL;

switch (location.hostname) {
  case 'localhost':
    baseURL = 'http://localhost:5000';
    break; 
  default:
    baseURL = 'https://back-sispar.onrender.com';
}
*/

const api = axios.create({
  baseURL: 'https://back-sispar.onrender.com',
});

export default api;