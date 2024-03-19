import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FilterState = {
  productName: string;
};

const initialState: FilterState = {
  productName: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.productName = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
