import express from "express";
const router = express.Router();

import {getAllMcuMedia} from '../models/mcu.js';

/* GET users listing. */
router.get("/", function (req, res, next) {
    res.json(getAllMcuMedia());

  });
  
export default router;