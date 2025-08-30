const express = require("express");
const sequelize = require("./config/database");
const Chat = require("./models/Chat"); // example model

const app = express();
const PORT = process.env.PORT || 8080;

(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connection established!");

    // Sync models
    await sequelize.sync({ alter: true });
    console.log("✅ Models synced!");
  } catch (err) {
    console.error("❌ Database connection failed:", err.message);
  }
})();

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
