const user = require('../components/user/network');

const routes = (server, alias) => {
  server.use(`${alias}/create-account`, user);
}

module.exports = routes;
