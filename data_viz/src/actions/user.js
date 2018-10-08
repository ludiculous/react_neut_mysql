import axios from 'axios';
import {SUBMIT_FORM, GET_USER} from './types'; 

const api_url = 'http://localhost:3000';

export const submitForm = (submitData) => { 
  console.log(submitData)
  submitData = JSON.stringify(submitData);
  return async dispatch => {
    try {
      const response = await axios.post(`${api_url}/users/create`, submitData)
      dispatch({
        type: SUBMIT_FORM,
        payload: data
      })
      return response;
    } catch(error) {
      console.log(error)
    }
  }
}

export const getUser = (id) => {
  console.log(id)
  return async dispatch => {
    try {
      const response = await axios.get(`${api_url}/users/${id}`);
      
      console.log(response)
      dispatch({
        type: GET_USER,
        payload: response.data
      })
      return response;
    } catch(error) {
      console.log(error);
    }
  }
}
