import {userActionTypes} from '../../../constants/actions.type';

const initialState = {
    user : { }
}

export const userReducers = (state = initialState,{ type,payload }) => {
    switch(type) {
        case userActionTypes.SET_USER : 
            return { ...state, user: payload }

        case userActionTypes.GET_USER : 
            return { ...state,user: payload }

        default : 
            return state
    }
}
