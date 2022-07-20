import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    numberCart:0,
    total: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState : initialState,
  reducers: {
    addToCart(state,{ payload }) {
        console.log('state',state);
       if(state.numberCart===0) {
          let cart = {
            id: payload.id,
            quantity:1,
            title: payload.title,
            subtitle: payload.subtitle,
            accessories : payload.accessories,
            price : payload.price,
            img : payload.img,
          } 
          state.items.push(cart); 
       } else {
         let check = false;

         state.items.map((item,key)=>{
            if(item.id===payload.id) {
              state.items[key].quantity++;
              check = true;
            }
            return true;
         });

         if(!check){
            let cart = {
              id: payload.id,
              quantity:1,
              title: payload.title,
              subtitle: payload.subtitle,
              accessories : payload.accessories,
              price : payload.price,
              img : payload.img,
            } 
            state.items.push(cart); 
         }
       }

       return{
        ...state,
        numberCart:state.numberCart+1
      }
    },
    deleteProduct(state,payload) {
        let found = state.items.findIndex((item)=>item.id===payload.id);
        if(found !== -1) {
            state.items.slice(found);
        }

        return {
            ...state
        }
    },
    getAllProduct(state) {
        return {
            ...state.items
        }
    },
    getTotal(state) {
        return {
            ...state.items.length
        }
    },
    decreaseQuantity(state,payload) {
        let found = state.items.findIndex((item)=>item.id===payload.id);
        if(found !== -1) {
            state.items[found].quantity--;
        }

        return {
            ...state
        }
    }
  },
})

export const { addToCart,deleteProduct,getAllProduct,getTotal,decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;

export const getCart = (state) => state.cart;