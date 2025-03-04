const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Booking = sequelize.define("Booking", {
  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
  },
  user_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
  },
  room_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false 
  },
  start_date: { 
    type: DataTypes.DATE, 
    allowNull: false 
  },
  end_date: { 
    type: DataTypes.DATE, 
    allowNull: false 
  },
  status: { 
    type: DataTypes.ENUM('confirmed', 'pending', 'cancelled'), // Используем ENUM для статуса
    allowNull: false 
  },
  created_at: { 
    type: DataTypes.DATE, 
    allowNull: false, 
    defaultValue: DataTypes.NOW, 
    field: 'created_at'  // Переименовываем в 'created_at', если необходимо
  }
}, {
  timestamps: false,  // Если не нужно использовать автоматически сгенерированные поля `createdAt` и `updatedAt`
  tableName: 'bookings'  // Указываем имя таблицы, если оно отличается от стандартного
});

module.exports = Booking;
