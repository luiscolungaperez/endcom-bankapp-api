const mongoose = require('mongoose');
const cfg = require('.');

const {
  host,
  user,
  database,
  password
} = cfg.db;

const mongoUri = `mongodb+srv://${user}:${password}@${host}/${database}?retryWrites=true&w=majority`;

const connect = async () => {
  console.log();
  try {
    await mongoose.connect(
      mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        w: 'majority'
    });
    console.log('[DB]: Conectado');
  } catch (error) {
    console.error('[DB]: Error al conectarse');
  }
}

module.exports = connect;
