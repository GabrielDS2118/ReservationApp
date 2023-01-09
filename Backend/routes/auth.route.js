import express from 'express';

const routerAuth = express.Router();

router.get('/register', (req, res) => {
  res.send('Hello, auth endpoint');
});

export default routerAuth;
