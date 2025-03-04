const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Room = sequelize.define("Room", {
  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
  },
  number: { 
    type: DataTypes.STRING, 
    allowNull: false, 
    unique: true 
  },
  type: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  price: { 
    type: DataTypes.FLOAT, 
    allowNull: false 
  },
  status: { 
    type: DataTypes.ENUM("available", "booked"), 
    defaultValue: "available" 
  },
  created_at: { 
    type: DataTypes.DATE, 
    allowNull: false, 
    defaultValue: DataTypes.NOW, 
    field: 'created_at'
  }
}, {
  timestamps: false, // Отключаем автоматические поля createdAt/updatedAt
  tableName: 'rooms' // Указываем явное имя таблицы, если оно не соответствует стандартному
});

module.exports = Room;
