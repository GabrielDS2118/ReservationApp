import express from 'express';

const routerAuth = express.Router();

routerAuth.get('/register', (req, res) => {
  res.send('Hello, auth endpoint');
});

export default routerAuth;
