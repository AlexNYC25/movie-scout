import express from 'express';
const router = express.Router();

import {getMediaDetails, getMediaRequirments, getMediaOptional} from '../models/media.js';

// using a cetain media's id retrieve the media's details, and the details of what 
// media is recomeneded and optional to watch the media
router.get('/:id', function (req, res, next) {
    let id = req.params.id;

    let result = Promise.all([getMediaDetails(id), getMediaRequirments(id), getMediaOptional(id)])

    result.then(function (values) {
        let media = values[0];
        let requirments = values[1];
        let optional = values[2];

        res.json({
            media: media,
            requirments: requirments,
            optional: optional
        });
    })

});

export default router;