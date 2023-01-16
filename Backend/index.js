import express from 'express';
import cors from 'cors';
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

const whitelist = ['http://localhost:3000', 'http://localhost:8800'];

const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  },
};

app.use(cors(options));

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
