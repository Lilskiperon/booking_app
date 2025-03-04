const bcrypt = require('bcryptjs');
const { User } = require('./models'); // Путь до модели User, если он другой, поправьте

const updatePasswords = async () => {
  try {
    const users = await User.findAll(); // Получаем всех пользователей

    for (const user of users) {
      const hashedPassword = await bcrypt.hash('11111111', 10); // Хешируем пароль
      await user.update({ password: hashedPassword }); // Обновляем пароль
      console.log(`Пароль для пользователя с ID ${user.id} обновлен`);
    }

    console.log('Пароли обновлены для всех пользователей');
  } catch (error) {
    console.error('Ошибка при обновлении паролей:', error);
  }
};

updatePasswords();
