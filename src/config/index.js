require('dotenv').config();

const cfg = {
  prod: (process.env.PROD === 'true'),
  port: parseInt(`${process.env.PORT}`, 10) || 3000,
  db: {
    host: process.env.DB_HOST || 'endcom-bank-api.gcrvq.mongodb.net',
    port: parseInt(`${process.env.DB_PORT}`, 10) || 27017,
    user: process.env.DB_USER || 'admin',
    database: process.env.DB_NAME || 'endcom-bank-api',
    password: process.env.DB_PASS || 'TKWF1uDabrKQ0Mx4'
  }
}

module.exports = cfg;
