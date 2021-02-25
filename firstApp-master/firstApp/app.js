const express = require('express');
const app = express();
const port = 3000;

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite

//Julio: Testing commit
//Dany: Testing commit

app.get('/',(req,res) => {
    res.send('Hello World!');
})

app.get('/user', (req, res) => {
    return res.send('Nuevo usuario');
  });

  app.post('/post', (req, res) => {
    return res.send('Opinión publicada');
  });

  app.put('/post', (req, res) => {
    return res.send('Post recibido');
  });

  app.delete('/post', (req, res) => {
    return res.send('Post eliminado');
  });

app.listen(port,() => {
    console.log(`Example app at http://localhost:${port}`)
})