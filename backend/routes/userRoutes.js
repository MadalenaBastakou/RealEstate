import express from "express";
import userController from "../controllers/userControllers.js";
import { verifyUser } from "../middleware/verifyUser.js";

const userRouter = express.Router();

userRouter.post("/register", userController.register);

userRouter.post("/login", userController.login);

userRouter.get("/verify", verifyUser, userController.verify);

userRouter.get("/logout", userController.logout);

export { userRouter };
