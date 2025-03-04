const Room = require('../models/Room');

// Получить все комнаты
exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.findAll({
      order: [['id', 'ASC']]  // Сортировка по id по возрастанию
    });
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка получения данных' });
  }
};

// Создание комнаты
exports.createRoom = async (req, res) => {
  const { number, type, price, status } = req.body;

  try {
    const room = await Room.create({ number, type, price, status });
    res.json(room);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка создания комнаты' });
  }
};

// Обновление комнаты
exports.updateRoom = async (req, res) => {
  const { id } = req.params;
  const { number, type, price, status } = req.body;

  try {
    const room = await Room.update(
      { number, type, price, status },
      { where: { id } }
    );
    if (room[0] === 0) {
      return res.status(404).json({ message: 'Комната не найдена' });
    }
    res.json({ message: 'Комната обновлена' });
  } catch (error) {
    res.status(500).json({ message: 'Ошибка обновления' });
  }
};

// Удаление комнаты
exports.deleteRoom = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Room.destroy({ where: { id } });
    if (deleted === 0) {
      return res.status(404).json({ message: 'Комната не найдена' });
    }
    res.json({ message: 'Комната удалена' });
  } catch (error) {
    res.status(500).json({ message: 'Ошибка удаления' });
  }
};

exports.getAvailableRooms = async (req, res) => {
  try {
    const availableRooms = await Room.findAll({ where: { status: "available" } });
    res.json(availableRooms);
  } catch (error) {
    console.error("Ошибка загрузки доступных номеров:", error);
    res.status(500).json({ message: "Ошибка сервера" });
  }
};
// Получить комнату по ID
exports.getRoomById = async (req, res) => {
  const { id } = req.params;
  try {
    const room = await Room.findByPk(id);
    if (!room) {
      return res.status(404).json({ message: 'Комната не найдена' });
    }
    res.json(room);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка получения комнаты' });
  }
};
