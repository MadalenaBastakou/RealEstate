import express from "express";
import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (role === "user") {
      const user = await User.findOne({ username });
      if (!user) {
        return res.json({ message: "user not registered" });
      }
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.json({ message: "Wrong Password" });
      }
      const token = jwt.sign(
        { username: user.username, role: "user" },
        process.env.User_Key
      );
      res.cookie("token", token, { httpOnly: true, secure: true });
      return res.json({ login: true, role: "user" });
    }
  } catch (err) {
    res.json(err);
  }
});

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ message: "User is not valid" });
  } else {
    jwt.verify(token, process.env.User_Key, (err, decoded) => {
      if (err) {
        return res.json({ message: "Invalid Token" });
      } else {
        req.username = decoded.username;
        res.role = decoded.role;
        next();
      }
    });
  }
};

router.get("/verify", verifyUser, (req, res) => {
  return res.json({ login: true, role: req.role });
});

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ logout: true });
});
export { router as UserRouter, verifyUser };
