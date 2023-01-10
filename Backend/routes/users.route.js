import express from 'express';

import {
  updatedUser,
  deleteUser,
  getUser,
  getAllUsers,
} from '../controllers/user.controller.js';

import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const routerUsers = express.Router();

routerUsers.get('/checkauthentication', verifyToken, (req, res, next) => {
  res.send('hello user, you are logged in');
});

routerUsers.get('/checkuser/:id', verifyUser, (req, res, next) => {
  res.send('You are logged in and you can delete your account');
});

routerUsers.get('/checkadmin', verifyAdmin, (req, res, next) => {
  res.send('Hello admin, you are logged in and you can delete all accounts');
});

//UPDATE
routerUsers.put('/:id', verifyUser, updatedUser);

//DELETE
routerUsers.delete('/:id', verifyUser, deleteUser);

//GET
routerUsers.get('/:id', verifyUser, getUser);

//GET ALL
routerUsers.get('/', verifyAdmin, getAllUsers);

export default routerUsers;
