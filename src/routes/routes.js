const account = require('../components/account/network');
const movement = require('../components/movement/network');

const routes = (server, alias) => {
  server.use(alias, account);
  server.use(alias, movement);
}

module.exports = routes;
