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

// use getAllMediaDetails to get all media details for each MCU movie as a promise
const getAllMcuMediaDetails = async () => {
    try {
        const res = await getAllMediaDetails(await getAllMcuMediaFromDb());
        
        return res;
    } catch (err) {
        console.log(err);
    }
}


export function getAllMcuMedia() {
    console.log(getAllMcuMediaDetails());
    return getAllMcuMediaDetails();
    
}