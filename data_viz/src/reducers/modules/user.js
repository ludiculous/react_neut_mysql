import {SUBMIT_FORM} from '../../actions/types';


const Inital_State = {
  username: '',
  password: ''
}

export default (state = Inital_State, action) => {
    switch (action.type) {

        case SUBMIT_FORM:
            console.log(action.payload)

            return {...state,
                username: action.payload.username,
                password: action.payload.password
            };

        default:
            return state;
    }
}

