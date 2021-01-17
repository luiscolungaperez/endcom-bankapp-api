const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cfg = require('./config');
const router = require('./network/routes');
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/api/v1', router)
router(app, '/api/v1');

app.listen(cfg.port, () => {
  console.log(`Server on http://localhost:${cfg.port}/api/v1`);
});
