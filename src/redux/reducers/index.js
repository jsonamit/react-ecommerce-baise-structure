import { combineReducers } from 'redux'

import { cartReducers }  from './cart/cartReducers';
import { userReducers }  from './user/userReducers';
import { productReducers } from './product/productReducers';


export const reducers = combineReducers({
        user : userReducers,
        cart : cartReducers,
        product : productReducers
});
