import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import "./db.js";
import { UserRouter } from "./routes/auth.js";
import { residenceRouter } from "./routes/residence.js";
import { userRouter } from "./routes/user.js";
import { Residence } from "./models/Residence.js";

const app = express();
app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));
app.use(cookieParser());
dotenv.config();
app.use("/auth", UserRouter);
app.use("/residence", residenceRouter);
app.use("/user", userRouter);

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
