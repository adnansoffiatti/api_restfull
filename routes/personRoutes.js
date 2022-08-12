const router = require('express').Router();

const Person = require('../models/Person');


// CREATE - criação de dados
router.post('/', async (req, res) => {

  const { name, salary, approved } = req.body;

  // validação
  if(!name) {
    res.status(422).json({ error: 'O nome é obrigatório!' });
    return;
  };

  const person = {
    name,
    salary,
    approved,
  };

  try {

    // criando dados
    await Person.create(person);

    res.status(201).json({ message: 'Pessoa inserida no sistema com sucesso!' });

  } catch(error) {
    res.status(500).json({ error: error });
  }
});

// READ - leitura de dados
router.get('/', async (req, res) => {

  try {

    const people = await Person.find();

    res.status(200).json(people);

  } catch(error) {
    res.status(500).json({ error: error });
  }
})

module.exports = router;