const jwt = require("jsonwebtoken");
const jwtSecret =
  "https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjM0MDMwYzFjNTlkNzZhNzgxMzIzMCIsInVzZXJuYW1lIjoiYWE0MDJAZ21haWwuY29tIiwicm9sZSI6IkJhc2ljIiwibmFtZSI6IkFudXNoYSIsInBob25lIjoiNjMwNTUxNjkzNyIsImlhdCI6MTY2MzI1NDU3NiwiZXhwIjoxNjYzMjY1Mzc2fQ._urucqrolAPuTdYlikvacOo3IHQ-YVRoobc6ALGsTEU%3BMax-Age%3D10800%3BPath%3D%2F%3BExpires%3DThu%2C15Sep202218%3A09%3A36GMT%3BHttpOnly";

exports.adminAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ message: "Not authorized" });
      } else {
        if (decodedToken.role !== "admin") {
          return res.status(401).json({ message: "Not authorized" });
        } else {
          next();
        }
      }
    });
  } else {
    return res
      .status(401)
      .json({ message: "Not authorized, token not available" });
  }
};
exports.userAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ message: "Not authorized" });
      } else {
        if (decodedToken.role !== "Basic") {
          return res.status(401).json({ message: "Not authorized" });
        } else {
          next();
        }
      }
    });
  } else {
    return res
      .status(401)
      .json({ message: "Not authorized, token not available" });
  }
};
