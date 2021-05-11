const express = require('express');

const router = express.Router();

const generes = [
    {id: 1, name: 'action'}, 
    {id:2, name: 'Romance'}, 
    {id:3, name: 'Horror'},
    {id: 4, name: 'comedy'},
    {id: 5, name: 'Romantic action'},
];

router.get('/', (req, res) => res.status(200).send(generes));

router.get('/:id', (req, res) => {
    const genere = generes.find(item => item.id === parseInt(req.params.id));

    if(genere){
        return res.status(200).send(genere);
    }
    res.status(404);
});


module.exports = router;