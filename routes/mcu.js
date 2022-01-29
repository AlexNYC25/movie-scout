import express from "express";
const router = express.Router();

import {getAllMcuMedia} from '../models/mcu.js';

/* GET users listing. */
router.get("/", function (req, res, next) {

  getAllMcuMedia().then(data => {
    res.status(200).json(data);
  });
  
  });
  
export default router;