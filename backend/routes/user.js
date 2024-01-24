import express from "express";
import { User } from "../models/User.js";
import bcrypt from "bcrypt";
const router = express.Router();
import { verifyUser } from "./auth.js";

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.findOne({ username });
    if (user) {
      return res.json({ message: "user is registered" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newuser = new User({
      username,
      email,
      password: hashPassword,
    });
    await newuser.save();
    return res.json({ registered: true });
  } catch (err) {
    return res.json({ message: "Error in registering user" });
  }
});

export { router as userRouter };
