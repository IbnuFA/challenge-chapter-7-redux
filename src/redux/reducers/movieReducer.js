import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: {
        page: 1,
        results: [],
        total_pages: 1,
        total_results: 0,
    },
}

const moviesSlicer = createSlice({
    name : "movies",
    initialState,
    reducers: {
        getAllMoviesReducer: (state, action) => {
            state.movies = action.payload;
        },
    },
});

export const { getAllMoviesReducer } = moviesSlicer.actions;

export default moviesSlicer.reducer;