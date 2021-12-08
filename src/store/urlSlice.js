import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  options: [
    { value: 'EQUALS', label: 'URL is' },
    { value: 'NOT_EQUALS', label: 'URL is not' },
    { value: 'CONTAINS', label: 'URL contains' },
    { value: 'NOT_CONTAINS', label: 'URL not contains' },
    { value: 'PREFIX', label: 'URL starts with' },
    { value: 'SUFFIX', label: 'URL ends with' },
  ],
  data: {},
};

export const urlSlice = createSlice({
  name: 'url',
  initialState,
  reducers: {
    add: (state, action) => {
      const { url, type } = action.payload;
      if (!state.data[type]) state.data[type] = [];
      if (state.data[type].includes(url)) return;
      state.data[type].push(url);
    },
    remove: (state, action) => {
      const { url, type } = action.payload;
      if (!state.data[type] || !Array.isArray(state.data[type])) return;
      state.data[type] = state.data[type].filter(currUrl => currUrl !== url);
      if (!state.data[type].length) delete state.data[type];
    },
  },
});

export const { add, remove } = urlSlice.actions;

export default urlSlice.reducer;
