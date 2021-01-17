const cfg = {
  prod: (process.env.PROD === 'true'),
  port: parseInt(`${process.env.PORT}`, 10) || 3000,
  db: {
    host: process.env.DB_HOST || '127.0.0.1',
    port: parseInt(`${process.env.DB_PORT}`, 10) || 12701,
    user: process.env.DB_USER || 'ecom',
    database: process.env.DB_NAME || 'ecom',
    password: process.env.DB_PASS || 'ecom.test'
  },
  jwt: {
    SECRET_TOKEN: process.env.SECRET_TOKEN || 'ecomtest',
    options: { algorithm: 'HS256' }
  }
}

module.exports = cfg;
