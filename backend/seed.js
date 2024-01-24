import express from "express";
import bcrypt from "bcrypt";
import { User } from "./models/User.js";
import "./db.js";

async function UserAccount() {
  try {
    const userCount = await User.countDocuments();
    if (userCount === 0) {
      const hashPassword = await bcrypt.hash("userpassword", 10);
      const newUser = new User({
        username: "user",
        password: hashPassword,
      });
      await newUser.save();
      console.log("Account created");
    } else {
      console.log("Account already existed");
    }
  } catch (err) {
    console.log("error");
  }
}

UserAccount();
