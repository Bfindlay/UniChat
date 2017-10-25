import { 
    SWITCH_FORM_COMPONENT
} from './types';
import { Actions } from 'react-native-router-flux'

export const switchForm = form => {
    return {
        type : SWITCH_FORM_COMPONENT,
        payload : form
    }
}