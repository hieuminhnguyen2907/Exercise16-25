import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const addProductAsync = createAsyncThunk(
  'cart/addProductAsync',
  async (newProduct) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(newProduct);
      }, 500); 
    });
  }
);

const initialState = {
  products: [
    {
      id: '123456',
      name: 'Example Product',
      price: 9.99,
      description: 'This is an example product.',
      catalogs: ['catalog1', 'catalog2'],
    },
  ],
  cart: [],
  status: 'idle',
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProductAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addProductAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products.push(action.payload);
      });
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;