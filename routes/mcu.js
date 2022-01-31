import express from "express";
const router = express.Router();

import {getAllMcuMedia, getAllMcuMovies, getAllMcuTvShows} from '../models/mcu.js';

/* GET all mcu media objects(movies and tvShows). */
router.get("/", function (req, res, next) {
  try{
    getAllMcuMedia().then(data => {
      res.status(200).json(data);
    });
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
});

// GET all mcu movies objects.
router.get('/movies', function(req, res, next) {
  try{
    getAllMcuMovies().then(data => {
      res.status(200).json(data);
    });
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
});

// GET all mcu tv shows objects.
router.get('/tvShows', function(req, res, next) {
  try{
    getAllMcuTvShows().then(data => {
      res.status(200).json(data);
    });
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
});
  
export default router;