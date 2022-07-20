import { configureStore } from '@reduxjs/toolkit'

import  cartReducers  from './cart/cartSlice';
import  userReducers  from './user/userSlice';


export const store = configureStore({
    reducer : {
        user : userReducers,
        cart : cartReducers
    }
})

