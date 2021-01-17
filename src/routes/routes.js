const user = require('../components/user/network');

const routes = (server, alias) => {
  server.use(alias, user);
}

module.exports = routes;
