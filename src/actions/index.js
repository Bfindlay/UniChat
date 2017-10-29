import { 
    SWITCH_FORM_COMPONENT,
    LOG_IN,
    LOG_OUT,
    TITLE
} from './types';
import { Actions } from 'react-native-router-flux'

export const switchForm = form => {
    return {
        type : SWITCH_FORM_COMPONENT,
        payload : form
    }
}

export const logIn = () =>{
    return {
        type : LOG_IN,
        payload : true
    }
}


export const logOut = () =>{
    return {
        type : LOG_OUT,
        payload : true
    }
}

export const setTitle = title => {
    return {
        type : TITLE,
        payload : title
    }
}