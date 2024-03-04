import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        lang: "en"
    },
    reducers: {
        addChangeLanguage: (state, action) => {
            state.lang = action.payload;
        }
    }
});

export const { addChangeLanguage } = configSlice.actions;

export default configSlice.reducer;