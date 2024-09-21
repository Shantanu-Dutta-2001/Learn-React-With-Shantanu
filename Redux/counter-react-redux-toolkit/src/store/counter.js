import { createSlice } from "@reduxjs/toolkit";

const advanceOptionSlice = createSlice ({
  name: 'showAdvanceOption',
  initialState:false,
  reducers:{
    showAdvance:(state)=>{
      return state =!state
    },
  }
})


export const showAdvanceActions = advanceOptionSlice.actions;
export default advanceOptionSlice;