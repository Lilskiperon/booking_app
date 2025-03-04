const User = require('../models/User');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Логин пользователя
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Ищем пользователя по email
    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ message: "Неверный email или пароль" });
    }

    // Сравниваем хеш пароля с введенным
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Неверный email или пароль" });
    }

    // Генерируем JWT токен
    const token = jwt.sign(
      { id: user.id, role: user.role }, // Используем роль напрямую из поля user.role
      "SECRET_KEY",
      { expiresIn: "1h" }
    );

    // Возвращаем токен и пользователя
    res.json({ token, user: { id: user.id, email: user.email, role: user.role } });
  } catch (error) {
    console.error("Ошибка при авторизации:", error);
    res.status(500).json({ message: "Ошибка сервера" });
  }
};

module.exports = { loginUser };
