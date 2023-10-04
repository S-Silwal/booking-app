import express from 'express';
import dotenv from "dotenv"
import mongoose from 'mongoose';
import authRoute from './api/routes/auth.js'
import usersRoute from './api/routes/users.js';
import hotelsRoute from './api/routes/hotels.js';
import roomsRoute from './api/routes/rooms.js';
import cookieParser from 'cookie-parser';

const app = express()

dotenv.config()

const connect = async ()=>{
try {
    await mongoose.connect(process.env.MONGO);
  console.log("Connected to MongoDB")
} catch (error) {
    throw error;
  }
};
mongoose.connection.on("disconnected",()=>{
console.log("mongoDB disconnected")
})
app.use(cookieParser())
app.use(express.json())
//middlewares
app.use('/api/auth',authRoute )
app.use('/api/user', usersRoute)
app.use('/api/hotels', hotelsRoute)
app.use('/api/rooms', roomsRoute)
const port = 8800
app.listen(port, ()=>{
    connect()
    console.log(`Connected to port ${port}`)
})