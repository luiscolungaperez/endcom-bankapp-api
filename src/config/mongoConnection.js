const mongoose = require('mongoose');

const connect = async (url) => {
  try {
    await mongoose.connect(url, {
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
