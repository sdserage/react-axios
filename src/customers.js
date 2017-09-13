import axios from 'axios';
import apiURL from './api.js';

export const getCustomerList = () => axios.get(apiURL).then(response => response.data);
export const postCustomer = customer => axios.post(apiURL, customer).then(response => response.data);
export const getCustomer = id => axios.get(apiURL+id).then(response => response.data);
export const updateCustomer = (id,obj) => axios.patch(apiURL+id, obj).then(response => response.data);
export const deleteCustomer = (id) => axios.delete(apiURL+id).then(response => response.data);
