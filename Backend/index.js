import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import routerAuth from './routes/auth.route.js';
import routerHotels from './routes/hotels.route.js';
import routerUsers from './routes/users.route.js';

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('Connected to MongoDb');
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on('disconnected', () => {
  console.log('mongoDb disconnected!');
});

mongoose.connection.on('connected', () => {
  console.log('mongoDb connected!');
});

//Middlewares
app.use('/api/auth', routerAuth);
app.use('/api/users', routerUsers);
app.use('/api/hotels', routerHotels);

app.lHsten(8800, () => {
  connect();
  console.log('Connected to backend');
});
