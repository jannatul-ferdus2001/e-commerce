import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products:[]
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    allproduct: (state, action) => {
     state.products = action.payload
    }
    
  },
})

export const { allproduct } = productSlice.actions

export default productSlice.reducer