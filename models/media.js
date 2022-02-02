import { getSingleMediaDetails, getAllMediaDetails } from '../helpers/tmdb.js';


import db from '../db/connection.js';

// returns media details for a single media id using id and media type
// needs testing
export let getSingleMedia = async (id, media_type) => {
    try {
        const res = await getSingleMediaDetails(id, media_type);

        return res;
    } catch (err) {
        console.log(err);
    }
}

export let getMediaType = async (id) => {
    try{
        const res = await db.query(
            `SELECT media_type FROM media WHERE id = $1`,
            [id]
        );
        return res.rows[0].media_type;
    } catch (err) {
        console.log(err);
    }
}

// function that takes in a media id and returns the media details, without the media's type
export let getMediaDetails = async (id) => {
    try{
        let media_type = await getMediaType(id);
        let media = await getSingleMedia(id, media_type);
        return media;
        
    }
    catch(err){
        console.log(err);
    }
}

// query db for media required for the passed id 
let getMediaRequirmentsFromDb = async (id) => {
    try{
        // get requrements for a single media id
        const res = await db.query(
            `SELECT * FROM required WHERE assigned_id = $1`,
            [id]
        );

        // for earch requrement, get the media details
        let mediaPromises = [];
        res.rows.forEach(element => {
            mediaPromises.push(getMediaDetails(element.media_id));
        });
        // wait for all media details to be returned
        return Promise.all(mediaPromises);
    } catch (err) {
        console.log(err);
    }
}


// get the media details fot the required media for a single media id
export let getMediaRequirments = async (id) => {
    try{
        let res = await getMediaRequirmentsFromDb(id);

        return res;
        
    } catch (err) {
        console.log(err);
    }
    
}

// get optional media from db
let getOptionalMediaFromDb = async (id) => {
    try{
        // get optional media for a single media id
        const res = await db.query(
            `SELECT * FROM optional WHERE assigned_id = $1`,
            [id]
        );

        // for earch optional media, get the media details
        let mediaPromises = [];
        res.rows.forEach(element => {
            mediaPromises.push(getMediaDetails(element.media_id));
        });
        // wait for all media details to be returned
        return Promise.all(mediaPromises);
    } catch (err) {
        console.log(err);
    }
}

// todo - test this function
export let getMediaOptional = async (id) => {
    try{
        let res = await getOptionalMediaFromDb(id);

        return res;
        
    } catch (err) {
        console.log(err);
    }
}