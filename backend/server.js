import dotenv from "dotenv";
dotenv.config();
import connectToDb from "./config/connectToDb.js";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";
import path from "path";
import "./config/connectToDb.js";
import { userRouter } from "./routes/userRoutes.js";
import { residenceRouter } from "./routes/residenceRoute.js";

const app = express();

connectToDb();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));

app.use("/", userRouter);
app.use("/residences", residenceRouter);

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
