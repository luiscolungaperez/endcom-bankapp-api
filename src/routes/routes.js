const message = require('../components/user/network');

const routes = (server, alias) => {
  server.use(`${alias}/message`, message);
}

module.exports = routes;
