const jwt = require("jsonwebtoken");
require('dotenv').config();

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Extract token from header

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
    req.user = decoded; // Store user data in request object
    next(); // Proceed to the next middleware/controller
  } catch (error) {
    return res.status(403).json({ message: "Invalid token." });
  }
};

module.exports = authMiddleware;
