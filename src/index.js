const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./routes/routes');
const db = require('./config/mongoConnection');
const cfg = require('./config');
const app = express();

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router(app, '/api/v1');
db();

app.listen(cfg.port, () => {
  console.log(`Server on http://localhost:${cfg.port}/api/v1`);
});
