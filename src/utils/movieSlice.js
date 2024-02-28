import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        trailervideos: null
    },
    reducers: {
        addnowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideos: (state, action) => {
            state.trailervideos = action.payload;
        }
    }
});

export const {addnowPlayingMovies, addTrailerVideos} = movieSlice.actions;

export default movieSlice.reducer;