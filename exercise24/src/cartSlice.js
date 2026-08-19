// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    // Task 2: Xử lý Add to Cart
    addToCart: (state, action) => {
      const existingProduct = state.items.find(item => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    // Task 3: Xử lý Update to Cart (Ví dụ: tăng số lượng thêm 1)
    updateCart: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantityToAdd || 1; 
      }
    },
    // Task 4: Xử lý Delete to Cart (Xóa khỏi giỏ hàng)
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, updateCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;