import db from "../db/connection.js";

import { getAllMediaDetails } from "../helpers/tmdb.js";

export function getAllMcuMedia() {
    db.query('SELECT * FROM media WHERE category = $1;', ['MCU'], (err, res) => {
        
        getAllMediaDetails(res.rows).then(result => {
            return result;
        })
    });
    
}