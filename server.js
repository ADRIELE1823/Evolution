const express = require('express');
const router = require('./router');

const app = express();
const port = process.env.PORT || 3000;
app.use(router);

app.get('/', (req, res) => {
  res.send('Bem-vindo ao meu projeto Node.js!');
});

app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}`);
});
