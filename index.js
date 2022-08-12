require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;

// ler json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// rota teste
app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
})

app.listen(port, () => console.log('Servidor rodando...'));