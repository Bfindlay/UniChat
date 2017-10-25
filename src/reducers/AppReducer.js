import { 
    SWITCH_FORM_COMPONENT
} from '../actions/types';
const INITIAL_STATE = { 
    homeComponent: 'Login'
}

export default (state = INITIAL_STATE, action) => {
    console.log('action', action);
    switch(action.type) {
        case SWITCH_FORM_COMPONENT :{
            return { ...state, homeComponent: action.payload }
            break
        }
        default:
            return state;
    }
}