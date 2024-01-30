import express from "express";
import userController from "../controllers/userControllers.js";
import { verifyUser } from "../middleware/verifyUser.js";

const userRouter = express.Router();

// user's registration request
userRouter.post("/register", userController.register);
// user's login request
userRouter.post("/login", userController.login);

// user's verification request
userRouter.get("/verify", verifyUser, userController.verify);
// logout the user
userRouter.get("/logout", userController.logout);
// get the user's data
userRouter.get("/users/:id", userController.fetchUser);

export { userRouter };
