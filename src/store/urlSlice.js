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
  currentOption: { value: 'EQUALS', label: 'URL is' },
};

export const urlSlice = createSlice({
  name: 'url',
  initialState,
  reducers: {
    add: (state, action) => {
      const { url } = action.payload;
      const { value } = state.currentOption;
      if (!state.data[value]) state.data[value] = [];
      if (state.data[value].includes(url)) return;
      state.data[value].push(url);
    },
    remove: (state, action) => {
      const { idx, type } = action.payload;
      if (!state.data[type] || !Array.isArray(state.data[type])) return;
      if (idx < 0 || idx > state.data[type].length) return;
      state.data[type].splice(idx, 1);
      if (!state.data[type].length) delete state.data[type];
    },
    selectOption: (state, action) => {
      const { option } = action.payload;
      state.currentOption = option;
    },
  },
});

export const { add, remove, selectOption } = urlSlice.actions;

export default urlSlice.reducer;
