import jwt from 'jsonwebtoken';
process.loadEnvFile()

const JWT_SECRET = process.env.JWT_SECRET;

const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]
  if (!token) res.status(401).json({ message: "Access denied, no token exists" })

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(400).json({ message: "Invalid token." });
  }
};

export { auth }