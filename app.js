import express from 'express';
import {userRouter} from './routes/userRoute.js';
import cookieParser from 'cookie-parser';


export const app = express();

app.use(express.json({limit:"50mb"})); //ugrađeni express middleware koji konvertuje request body u JSON
app.use(express.urlencoded({extended:true, limit: "50mb"}));//ugrađeni express middleware konvertuje form-data u JSON
app.use(cookieParser());

app.use("/api/v1", userRouter);