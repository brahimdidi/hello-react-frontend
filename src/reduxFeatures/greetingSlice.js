import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
const apiUrl = "http://localhost:3000/messages";


export const fetchGreeting = createAsyncThunk('greeting/fetchGreeting',
  async () => {
    const res = await fetch(apiUrl);
    const data = res.json();
    return data;
  });




const options = {
    name: 'greeting',
    initialState: [],
    reducers: {},
    extraReducers: {
      [fetchGreeting.fulfilled]: (state, action) => action.payload,
    },
  };

  const GreetingSlice = createSlice(options);
  export default GreetingSlice.reducer;
  export const selectGreeting = (state) => state.greeting;
