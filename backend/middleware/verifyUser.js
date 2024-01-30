import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

//user's verification
const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ message: "User is not valid" });
  } else {
    jwt.verify(token, process.env.User_Key, async (err, decoded) => {
      if (err) {
        return res.json({ message: "Invalid Token" });
      } else {
        try {
          const user = await User.findOne({ username: decoded.username });
          if (!user) {
            return res.json({ message: "User not found" });
          }
          req.user = user;
          next();
        } catch (err) {
          return res.json({ message: "Error finding user" });
        }
      }
    });
  }
};

export { verifyUser };
