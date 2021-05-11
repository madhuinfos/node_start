const express = require('express');
const loggger = require('./logger');

const router = express.Router();

const courses = [
    {id: 1, name: "course 1"},
    {id: 2, name: "course 2"},
    {id: 3, name: "course 3"},
]

router.get('/', (req, res) => {
    loggger.log(req.body);
    res.status(200).send('ok');
}); 

router.get('/api/courses', (req, res) =>{
    loggger.log(req.params);
    res.send(['A', 'B', 'C']);
});

router.get('/api/courses/:id', (req, res) =>{
    
   if(req.params.id){
       const course = courses.find( element => element.id === parseInt(req.params.id));

       loggger.log(course);

       if(course){
           return res.status(200).send(course);
       }
   }
   res.status(400).send('not found');
});

router.post('/api/courses/', (req, res) => {
    loggger.log(req.body);
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };

    courses.push(course);
    res.send(course);
})

module.exports = router;
