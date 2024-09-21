import {configureStore} from "@reduxjs/toolkit"
import counterSlice from "./advanceOption";
import advanceOptionSlice from "./counter";

const counterStore = configureStore({reducer: {counter:counterSlice.reducer,showAdvanceOption:advanceOptionSlice.reducer}});
export default counterStore;