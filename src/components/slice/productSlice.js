import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItem:[],
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart: (state, action) => {
     let findindex = state.cartItem.findIndex((item) => item.id == action.payload.id)
     if(findindex !== -1){
      state.cartItem[findindex].qun++
     }else{
      state.cartItem = [...state.cartItem, action.payload]
     }
    },
    removeCart:(state,action)=>{
      let filtercart = state.cartItem.filter((item)=>
       item.id != action.payload.id
      )
      state.cartItem = filtercart;
    },
    incrementQuantity:(state,action)=>{
      let increment = state.cartItem.find((item)=> item.id == action.payload.id);
      if(increment){
        increment.qun +=1;
      }
    },
    decrementQuantity:(state,action)=>{
      let decrement = state.cartItem.find((item)=> item.id == action.payload.id );
      if(decrement && decrement.qun > 0){
         decrement.qun -=1;
      }
    }
    
  },
})

export const { addToCart, removeCart , incrementQuantity, decrementQuantity} = productSlice.actions

export default productSlice.reducer