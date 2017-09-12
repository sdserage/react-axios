import axios from 'axios';
import apiURL from './api.js';

export function getCustomerList() {
  return axios.get(apiURL).then( response => response.data);
}
