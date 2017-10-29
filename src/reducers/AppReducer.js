import { 
    SWITCH_FORM_COMPONENT,
    LOG_IN,
    LOG_OUT,
    TITLE
} from '../actions/types';
const INITIAL_STATE = { 
    homeComponent: 'Login',
    loggedIn : false,
    title : 'Login'
}

export default (state = INITIAL_STATE, action) => {
    console.log('action', action);
    switch(action.type) {
        case SWITCH_FORM_COMPONENT :{
            return { ...state, homeComponent: action.payload }
            break
        }
        case LOG_IN : {
            return { ...state, loggedIn : true}
        }case LOG_OUT :{
            return { ...state, loggedIn : false}
        }
        case TITLE:{
            return {...state, title: action.payload}
        }
        default:
            return state;
    }
}