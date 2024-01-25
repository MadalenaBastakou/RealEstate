import { User } from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.findOne({ username });
    if (user) {
      return res.json({ message: "User is registered" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    await User.create({ username, email, password: hashPassword });
    if (!email || !password || !username) {
      return res.status(400).json({ message: "Please enter all the fields" });
    }
    return res.status(200).json({ registered: true });
  } catch (err) {
    return res.json({ message: "Error in registering user" });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    //   if (role === "user") {
    const user = await User.findOne({ username });
    if (!user) {
      return res.json({ message: "User not registered" });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.json({ message: "Wrong Password" });
    }
    const token = jwt.sign({ username: user.username }, process.env.User_Key);
    res.cookie("token", token, { httpOnly: true, secure: true });
    return res.json({ login: true });
  } catch (err) {
    res.json(err);
  }
};

const verify = (req, res) => {
  try {
    return res.json({ login: true });
  } catch (err) {
    return res.json({ login: false });
  }
};

const logout = (req, res) => {
  res.clearCookie("token");
  return res.json({ logout: true });
};

export default { register, login, verify, logout };
