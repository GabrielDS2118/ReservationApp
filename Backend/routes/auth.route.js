import express from 'express';

import { login, register } from '../controllers/auth.controller.js';

const routerAuth = express.Router();

routerAuth.post('/register', register);
routerAuth.post('/login', login);

export default routerAuth;
