import dotenv from "dotenv";
dotenv.config();
import connectToDb from "./config/connectToDb.js";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "./config/connectToDb.js";
import { userRouter } from "./routes/userRoutes.js";

const app = express();

connectToDb();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));

// app.use("/residence", residenceRouter);
app.use("/", userRouter);

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
