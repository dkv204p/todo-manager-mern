const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.header("Authorization");
  console.log("Authorization Header:", authHeader); // Debugging

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    console.error("Invalid or missing Authorization header");
    return res.status(401).json({ error: "Access Denied. No token provided." });
  }

  const token = authHeader.replace("Bearer ", "");
  console.log("Token extracted:", token); // Debugging

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Token verified successfully:", verified); // Debugging
    req.user = verified;
    next();
  } catch (error) {
    console.error("JWT Error:", error); // Debugging
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ error: "Token expired. Please log in again." });
    }
    res.status(400).json({ error: "Invalid token" });
  }
};
