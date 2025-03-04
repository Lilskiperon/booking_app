const jwt = require("jsonwebtoken");
const { User } = require("../models");

const authenticateToken = async (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "Токен не предоставлен" });
  }

  try {
    const decoded = jwt.verify(token, "SECRET_KEY"); // Use environment variable for the secret key
    req.user = await User.findByPk(decoded.id);

    if (!req.user) {
      return res.status(404).json({ message: "Пользователь не найден" });
    }

    next(); // Token is valid, proceed to next middleware
  } catch (error) {
    console.error("Ошибка при верификации токена:", error);
    res.status(403).json({ message: "Недействительный токен" });
  }
};

module.exports = authenticateToken;
