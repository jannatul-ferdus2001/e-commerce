import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItem: [],
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart: (state,action) => {
    let findProduct =  state.cartItem.findIndex((item)=> item.id == action.payload.id)
    console.log(findProduct);
     
    if(findProduct !== -1){
     state.cartItem[findProduct].qun += 1;  

    }else{
      console.log("ami same");
      state.cartItem = [{...action.payload,qun: 1 }]
      
    }
   
    
    
    },
  },
})

export const { addToCart } = productSlice.actions

export default productSlice.reducer