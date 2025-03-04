const Booking = require('../models/Booking');

// Получение всех бронирований
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка получения данных' });
  }
};

// Создание нового бронирования
exports.createBooking = async (req, res) => {
  try {
    const { user_id, room_id, start_date, end_date, status } = req.body;
    const booking = await Booking.create({ user_id, room_id, start_date, end_date, status });
    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Ошибка создания бронирования' });
  }
};

// Обновление бронирования
exports.updateBooking = async (req, res) => {
  const { id } = req.params;
  const { user_id, room_id, start_date, end_date, status } = req.body;

  try {
    const booking = await Booking.update(
      { user_id, room_id, start_date, end_date, status },
      { where: { id } }
    );
    if (booking[0] === 0) {
      return res.status(404).json({ message: 'Бронирование не найдено' });
    }
    res.json({ message: 'Бронирование обновлено' });
  } catch (error) {
    res.status(500).json({ message: 'Ошибка обновления' });
  }
};

// Удаление бронирования
exports.deleteBooking = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Booking.destroy({ where: { id } });
    if (deleted === 0) {
      return res.status(404).json({ message: 'Бронирование не найдено' });
    }
    res.json({ message: 'Бронирование удалено' });
  } catch (error) {
    res.status(500).json({ message: 'Ошибка удаления' });
  }
};
