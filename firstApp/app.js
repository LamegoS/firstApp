const express = require('express');
const app = express();
require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite

//Julio: Testing commit
//Second commit

const { auth } = require('express-openid-connect');
app.use(
  auth({
    authRequired: false,
    auth0Logout: true,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    secret: process.env.SECRET,
  })
);

app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'logged in' : 'logged out');
});

const port = process.env.PORT || 3000;
app.listen(port,() => {
  console.log(`Example app at http://localhost:${port}`);
});

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

