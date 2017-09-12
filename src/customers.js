import axios from 'axios';
import apiURL from './api.js';

export const getCustomerList = () => axios.get(apiURL).then(response => response.data);
export const postCustomer = customer => axios.post(apiURL, customer).then(response => response.data);
