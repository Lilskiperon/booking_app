const sequelize = require("../config/database");
const User = require("./User");
const Room = require("./Room");
const Booking = require("./Booking");


// Устанавливаем ассоциации
User.hasMany(Booking, { foreignKey: "user_id" });
Room.hasMany(Booking, { foreignKey: "room_id" });
Booking.belongsTo(User, { foreignKey: "user_id" });
Booking.belongsTo(Room, { foreignKey: "room_id" });


 
module.exports = { sequelize, User, Room, Booking };
