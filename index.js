const express = require('express');
const loggger = require('./logger');
const app = express();
const portNo = 3500;

app.get('/', (req, res) => {

    console.log(loggger);
    loggger.log(req.body);
    res.status(200).send('ok');
})

app.listen(portNo, () => console.log(`listerning on port no ${portNo}`));
