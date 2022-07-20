import { userActionTypes } from '../../../constants/actions.type';


export const setUser = (user) => {
    return {
        type : userActionTypes.SET_USER,
        payload : user
    }
}

export const getuser = () =>{
    return {
        type : userActionTypes.GET_USER,
        payload : ''
    }
}