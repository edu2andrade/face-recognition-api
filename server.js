const express = require('express');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const knex = require('knex');

const signin = require('./controllers/signin');
const register = require('./controllers/register');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1', // Localhost
    port : 5432,
    user : 'postgres',
    password : 'test',
    database : 'face-recognition'
  }
});

const app = express();

app.use(express.json()); // parse
app.use(cors()); // cors

// Designing our routes:
// / --> res = Server is ok!
app.get('/', (req, res) => { res.send('Success!') })

// /signin --> POST = success/fail
app.post('/signin', (req, res) => { signin.handleSignin(req, res, db, bcrypt) }) // dependency injection (db, bcrypt)

// /register --> POST = new user
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) }) // dependency injection (db, bcrypt)

// /profile/:userId --> GET = user
app.get('/profile/:id', (req, res) => { profile.handleProfile(req, res, db) }) // dependency injection (db)

// /image --> PUT --> user
app.put('/image', (req, res) => { image.handleImage(req, res, db) }) // dependency injection (db)

app.post('/imageurl', (req, res) => { image.handleApiCall(req, res) }) 

// listening the right port...
let PORT = process.env.PORT;
if (PORT == null || PORT == "") {
  PORT = 3000;
}
app.listen(PORT);
// app.listen(PORT || 3000, () => { console.log(`Server is running on ${PORT}`) })