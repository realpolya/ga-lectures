//require('dotenv').config();
import {} from 'dotenv/config';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('The server is running');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
  console.log(`Your SECET is ${process.env.SECRET_PASSWORD}`);
});

console.log(process.env)