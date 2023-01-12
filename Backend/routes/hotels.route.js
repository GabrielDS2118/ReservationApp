import express from 'express';

import {
  createHotel,
  updatedHotel,
  deleteHotel,
  getHotel,
  getAllHotels,
  countByCity,
  countByType,
} from '../controllers/hotel.controller.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const routerHotels = express.Router();

//GET ALL
routerHotels.get('/', getAllHotels);
routerHotels.get('/countByCity', countByCity);
routerHotels.get('/countByType', countByType);

//CREATE
routerHotels.post('/', verifyAdmin, createHotel);

//UPDATE
routerHotels.put('/:id', verifyAdmin, updatedHotel);

//DELETE
routerHotels.delete('/:id', verifyAdmin, deleteHotel);

//GET
routerHotels.get('/:id', getHotel);

export default routerHotels;
