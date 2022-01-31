import db from "../db/connection.js";

import { getAllMediaDetails } from "../helpers/tmdb.js";

// query db for all media where category is MCu returning it as a promise
const getAllMcuMediaFromDb = async () => {
    try {
        const res = await db
            .query(
                `SELECT * FROM media WHERE category = 'MCU'`
            );
        
        return res.rows;
    } catch (err) {
        console.log(err);
    }
}

// query db for all MCU media that is a movie
const gelAllMcuMoviesFromDb = async () => {
    try{
        const res = await db
            .query(
                `SELECT * FROM media WHERE category = 'MCU' AND media_type = 'movie'`
            );
        return res.rows;
    } catch (err) {
        console.log(err);
    }
}

// query db for all MCU media that is a tv show
const getAllMcuTvShowsFromDb = async () => {
    try{
        const res = await db
            .query(
                `SELECT * FROM media WHERE category = 'MCU' AND media_type = 'tv_show'`
            );
        return res.rows;
    } catch (err) {
        console.log(err);
    }
}

// use getAllMediaDetails to get all media details for each MCU media from TMDB api
const getAllMcuMediaDetails = async () => {
    try {
        const res = await getAllMediaDetails(await getAllMcuMediaFromDb());
        
        return res;
    } catch (err) {
        console.log(err);
    }
}

// use getAllMediaDetails to get all media details for each MCU media from TMDB api that is a movie
const getAllMcuMoviesDetails = async () => {
    try {
        const res = await getAllMediaDetails(await gelAllMcuMoviesFromDb());
        
        return res;
    } catch (err) {
        console.log(err);
    }
}

// use getAllMediaDetails to get all media details for each MCU media from TMDB api that is a tv show
const getAllMcuTvShowsDetails = async () => {
    try {
        const res = await getAllMediaDetails(await getAllMcuTvShowsFromDb());

        return res;
    } catch (err) {
        console.log(err);
    }
}

// export function to get all MCU media
export function getAllMcuMedia() {
    return getAllMcuMediaDetails();
    
}

// export function to get all MCU movies
export function getAllMcuMovies() {
    return getAllMcuMoviesDetails();
}

// export function to get all MCU tv shows
export function getAllMcuTvShows() {
    return getAllMcuTvShowsDetails();
}