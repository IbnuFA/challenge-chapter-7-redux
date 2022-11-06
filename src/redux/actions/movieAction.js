import axios from "axios";

import { getAllMoviesReducer } from "../reducers/movieReducer";
import ENDPOINT from "../../enum/endpoint";

export const getAllMovies = (type = "week") => async (dispatch) => {
    try {
        const { data } = await axios.get(`${ENDPOINT.MOVIE.POPULAR}/${type}`, {
            params: {
                api_key: process.env.REACT_APP_TMDB_KEY,
            }}
        );
        dispatch(getAllMoviesReducer(data));
        console.log(data)
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getMovieDetail = (id) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${ENDPOINT.MOVIE.DETAIL}/${id}`, {
            params: {
                api_key: process.env.REACT_APP_TMDB_KEY,
            }}
        );
        dispatch(getAllMoviesReducer(data));
        console.log(data)
    } catch (error) {
        console.log(error);
        throw error;
    }
};