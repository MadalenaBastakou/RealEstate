import jwt from "jsonwebtoken";

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
        // res.role = decoded.role;
        next();
      }
    });
  }
};

export { verifyUser };
