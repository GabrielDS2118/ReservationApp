import express from 'express';

import {
  createHotel,
  updatedHotel,
  deleteHotel,
  getHotel,
  getAllHotels,
} from '../controllers/hotel.controller.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const routerHotels = express.Router();

//CREATE
routerHotels.post('/', verifyAdmin, createHotel);

//UPDATE
routerHotels.put('/:id', verifyAdmin, updatedHotel);

//DELETE
routerHotels.delete('/:id', verifyAdmin, deleteHotel);

//GET
routerHotels.get('/:id', getHotel);

//GET ALL
routerHotels.get('/', getAllHotels);

export default routerHotels;
