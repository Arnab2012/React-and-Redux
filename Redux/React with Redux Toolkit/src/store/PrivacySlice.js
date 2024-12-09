import { createSlice } from "@reduxjs/toolkit";

const privacySlice = createSlice({
    name: 'privacy',
    initialState: false,
    reducers: {
        toggle: (state) => {
            return state = !state;
        }
    }
})

// exporting action
export const privacyAction = privacySlice.actions;

// exporting slice
export default privacySlice;