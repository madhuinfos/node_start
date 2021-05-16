const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const log = require('./app/middleware/logger');
const test = require('./app/routes/test');
const genere = require('./app/routes/genre');

const app = express();
app.use(helmet());
app.use(express.json());

if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
  console.log('Morgan enabled');
}
app.use(log);

app.use('/', test);
app.use('/api/genres', genere);

const portNo = process.env.PORT || 2500;

app.listen(portNo, () => console.log(`listening on port no: ${portNo}`));
