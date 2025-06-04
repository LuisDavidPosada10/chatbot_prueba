import { config } from "dotenv";
import { Sequelize } from "sequelize";

config();

const { EXTERNAL_DB_URL, INTERNAL_DB_URL } = process.env;

const connection = new Sequelize(EXTERNAL_DB_URL || INTERNAL_DB_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  logging: false
});

export default connection;