import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import routerAuth from './routes/auth.route.js';
import routerHotels from './routes/hotels.route.js';
import routerUsers from './routes/users.route.js';
import routerRoom from './routes/rooms.route.js';

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
app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', routerAuth);
app.use('/api/users', routerUsers);
app.use('/api/hotels', routerHotels);
app.use('/api/rooms', routerRoom);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 'Something went wrong!';
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
  connect();
  console.log('Connected to backend');
});
