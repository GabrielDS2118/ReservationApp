import express from 'express';
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailability,
} from '../controllers/room.controller.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const routerRoom = express.Router();
//CREATE
routerRoom.post('/:hotelid', verifyAdmin, createRoom);

//UPDATE
routerRoom.put('/availability/:id', updateRoomAvailability);
routerRoom.put('/:id', verifyAdmin, updateRoom);
//DELETE
routerRoom.delete('/:id/:hotelid', verifyAdmin, deleteRoom);
//GET

routerRoom.get('/:id', getRoom);
//GET ALL

routerRoom.get('/', getRooms);

export default routerRoom;
