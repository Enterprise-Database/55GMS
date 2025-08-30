require("dotenv").config();
const { Sequelize } = require("sequelize");

let sequelize;

if (process.env.POSTGRES_URL) {
  sequelize = new Sequelize(process.env.POSTGRES_URL, {
    dialect: "postgres",
    dialectOptions: {
      ssl: { require: true, rejectUnauthorized: false }
    },
    logging: false
  });
  console.log("✅ Using Supabase Postgres");
} else {
  sequelize = new Sequelize("sqlite:///memory");
  console.log("⚠️ Using SQLite in-memory DB (Codespaces/dev mode)");
}

module.exports = sequelize;
