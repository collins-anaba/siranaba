require('dotenv').config();
const express = require('express');
const session = require('express-session');
const app = express();
const massive = require('massive');
const authController = require('./controllers/authController');
const newsController = require('./controllers/newsController');
const reviewsController = require('./controllers/authController');

//express-session
app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))

//massive database connection
massive(process.env.CONNECTION_STRING).then( db =>{
    app.set('db',db);
    console.log('Database Connected')
})
//port
app.listen(5000, () => console.log('Listening on Port 5000'))
