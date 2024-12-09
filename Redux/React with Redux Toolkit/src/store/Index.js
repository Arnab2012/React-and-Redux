import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "./CounterSlice";
import privacySlice from "./PrivacySlice";

// creating store
const counterStore = configureStore({
    reducer: {
        // passing reducers
        counter: counterSlice.reducer,
        privacy: privacySlice.reducer
    }
});

// exporting store
export default counterStore;