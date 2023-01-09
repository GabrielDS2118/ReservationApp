import express from 'express';

import { createHotel } from '../controllers/hotel.controller.js';
import { updatedHotel } from '../controllers/hotel.controller.js';
import { deleteHotel } from '../controllers/hotel.controller.js';
import { getHotel } from '../controllers/hotel.controller.js';
import { getAllHotels } from '../controllers/hotel.controller.js';

const routerHotels = express.Router();

//CREATE
routerHotels.post('/', createHotel);

//UPDATE
routerHotels.put('/:id', updatedHotel);

//DELETE
routerHotels.delete('/:id', deleteHotel);

//GET
routerHotels.get('/:id', getHotel);

//GET ALL
routerHotels.get('/', getAllHotels);

export default routerHotels;
