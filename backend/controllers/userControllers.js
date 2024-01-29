import { User } from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";

const register = async (req, res) => {
  try {
    const { username, email, password, favorites } = req.body;
    
    if (!username || !password || !email) {
      return res.status(400).json({ msg: "Please enter all the fields" });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({ msg: "Invalid email format" });
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ msg: "User is registered" });
    }
    if(password.length < 6){
      return res.status(400).json({ msg: "Password should be at least 6 characters" });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    await User.create({ username, email, password: hashPassword, favorites });

    return res.status(200).json({ msg: "User created successfully" });
  } catch (err) {
    res.json(err);
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).send({ msg: "Please enter all the fields" });
    }
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).send({ msg: "User not registered" });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).send({ msg: "Wrong password" });
    }
    const token = jwt.sign({ username: user.username }, process.env.User_Key);
    res.cookie("token", token);
    return res.status(200).json({ login: true });
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

const fetchUser = async (req,res) => {
  try {
    const id = req.params.id;
    const user = await User.findOne({ _id: id});
    return res.json(user);
  } catch (err) {
    return res.json(err);
  }
}

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOneAndUpdate(
      { _id: id},
      req.body,
      { new: true }
    );
    return res.json({ updated: true, user });
  } catch (err) {
    return res.json(err);
  }
};



export default { register, login, fetchUser, updateUser, verify, logout };
