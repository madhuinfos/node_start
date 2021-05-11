const express = require('express');
const test = require('./test');
const genere = require('./genre');

const app = express();
app.use(express.json());
app.use('/', test);
app.use('/api/genre', genere)

console.log(test);
const portNo = process.env.PORT || 2500;


app.listen(portNo, () => console.log(`listening on port no: ${portNo}`));
