const express = require('express');
const Joi = require('joi');
const router = express.Router();

const generes = [
  { id: 1, name: 'action' },
  { id: 2, name: 'Romance' },
  { id: 3, name: 'Horror' },
  { id: 4, name: 'comedy' },
  { id: 5, name: 'Romantic action' },
];

const genereSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
});

router.get('/', (req, res) => {
  res.send(generes);
});

router.get('/:id', (req, res) => {
  const genere = findGenere(req.params.id);

  if (genere) {
    return res.status(200).send(genere);
  }
  return res.status(404).send('not found');
});

router.post('/', (req, res) => {
  const error = validateGenere(req.body);

  if (error) {
    return res.status(400).send(error.message);
  }

  const genere = {
    id: generes.length + 1,
    name: req.body.name,
  };

  generes.push(genere);
  res.status(201).send(genere);
});

router.put('/:id', (req, res) => {
  const genere = findGenere(req.params.id);
  if (!genere) {
    return res.status(404).send('genere not found');
  }

  const error = validateGenere(req.body);
  if (error) {
    return res.status(400).send(error.message);
  }

  genere.name = req.body.name;

  res.status(200).send(genere);
});

router.delete('/:id', (req, res) => {
  const genere = findGenere(req.params.id);
  if (!genere) {
    return res.status(404).send('genere not found');
  }

  const index = generes.indexOf(genere);
  generes.splice(index, 1);

  res.status(200).send(genere);
});

function findGenere(id) {
  if (id) {
    const genere = generes.find((item) => item.id === parseInt(id));
    return genere;
  }
  return null;
}

function validateGenere(genreName) {
  const { error, value } = genereSchema.validate(genreName);

  return error;
}

module.exports = router;
