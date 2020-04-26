import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import logger from "morgan";
import reportRouter from "./routes/reportRouter";

const app = express();
mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection

db.on('error', console.error.bind(console, "Erro de conexão. "));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/accounts', reportRouter);

export default app;
