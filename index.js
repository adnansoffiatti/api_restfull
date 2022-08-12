require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT;

// ler json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// rota teste
app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
})


// conectando ao banco e configurando rota
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apirestfull.juxnute.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => {
    console.log('Conectamos ao MongoDB');
    app.listen(port, () => console.log('Servidor rodando...'));
  })
  .catch((err) => console.log(err));



