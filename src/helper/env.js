require('dotenv').config();

module.exports = {
  DB_HOST: process.env.DB_HOSTNAME,
  DB_USER: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_DATABASE: process.env.DB_DATABASE,
  DB_PORT: process.env.DB_PORT,
  JWT_SECRET: process.env.JWT_SECRET,
};
