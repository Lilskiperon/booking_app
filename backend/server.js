const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth",  require("./routes/authRoutes"));
app.use("/api/bookings", require("./routes/bookingRoutes"));
app.use("/api/rooms", require("./routes/roomRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

sequelize.sync().then(() => console.log("Database synchronized"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
