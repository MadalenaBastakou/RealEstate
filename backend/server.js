import dotenv from "dotenv";
dotenv.config();
import connectToDb from "./config/connectToDb.js";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";
import { v4 as uuidv4 } from 'uuid';
import path from "path";
import "./config/connectToDb.js";
import { userRouter } from "./routes/userRoutes.js";
import { residenceRouter } from "./routes/residenceRoute.js";
import { log } from "console";
import { Residence } from "./models/Residence.js";


const app = express();

connectToDb();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    cb( null,Date.now() + "--" + file.originalname);
  },
});

// const fileFilter = (req, file, cb) => {
//   const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png']
//   if(allowedFileTypes.includes(file.mimetype)) {
//     cb(null, true)
//   } else {
//     cb(null, false)
//   }
// }

let upload = multer({storage: fileStorageEngine})

app.use("/", userRouter);
app.use("/residences", residenceRouter);

app.post("/single", upload.single("image"), (req, res) => {
  console.log(req.file);
  res.send("Single File upload success")
});

app.post("/multiple", upload.array("images", 3), (req, res) => {
  console.log(req.files);
  res.send("Multiple Files upload success")
});

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
