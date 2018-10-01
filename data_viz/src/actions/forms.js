import axios from 'axios';
import {SUBMIT_FORM} from './types'; 

export function submitForm(data) {
  return dispatch=>{
    dispatch({
      type: SUBMIT_FORM,
      payload: data
    })
  }
}