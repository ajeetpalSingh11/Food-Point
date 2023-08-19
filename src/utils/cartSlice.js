import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const i = state.items.findIndex((obj) => obj.id === action.payload.id);
      if (i !== -1) {
        state.items.splice(i, 1, {
          ...state.items[i],
          count: state.items[i].count + 1,
        });
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
    },

    removeItem: (state, action) => {
      const i = state.items.findIndex((obj) => obj.id === action.payload);
      if (i !== -1 && state.items[i].count > 1) {
        state.items.splice(i, 1, {
          ...state.items[i],
          count: state.items[i].count - 1,
        });
      } else {
        state.items = state.items.filter((item) => item.id != action.payload);
      }
    },

    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id != action.payload);
    },

    clearCart: (state, action) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
