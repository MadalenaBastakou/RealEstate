import dotenv from "dotenv";
dotenv.config();
import storage from "./storage/storage.js";
const upload = multer({ storage });
import connectToDb from "./config/connectToDb.js";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";

import "./config/connectToDb.js";
import { userRouter } from "./routes/userRoutes.js";
import { residenceRouter } from "./routes/residenceRoute.js";

import bodyParser from "body-parser";

const app = express();

connectToDb();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(
  cors({
    origin: ["https://real-estate-l3zq.onrender.com", "http://localhost:3000"],
    credentials: true,
  })
);

app.post("/upload", upload.single("image"), (req, res) => {
  res.send(req.file);
});

app.use("/", userRouter);
app.use("/residences", residenceRouter);

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
