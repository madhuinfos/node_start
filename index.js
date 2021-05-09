const express = require('express');
const app = express();
const portNo = 3500;

app.get('/', (req, res) => {
    console.log('listerning for the req:', req.body);
    res.status(200).send('ok');
})

app.listen(portNo, () => console.log(`listerning on port no ${portNo}`));
