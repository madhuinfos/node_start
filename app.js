const express = require('express');
const helmet = require('helmet');

const log = require('./logger');
const test = require('./test');
const genere = require('./genre');

const app = express();
app.use(helmet());
app.use(express.json());
app.use(log);

app.use('/', test);
app.use('/api/genres', genere);

const portNo = process.env.PORT || 2500;

app.listen(portNo, () => console.log(`listening on port no: ${portNo}`));
