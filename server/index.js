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

//NewsEndpoints
app.get('/api/news', newsController.getAll)
app.post('/api/news', newsController.create)
app.put('/api/news: title', newsController.update)
app.delete('/api/news:title', newsController.delete)
//reviewsEndpoints
app.get('/api/reviews', reviewsController.getAll)
app.post('/api/reviews', reviewsController.create)
app.put('/api/reviews: title', newsController.update)
app.delete('/api/reviews:title', newsController.delete)
//commentEndpoints
app.get('/api/comments/', commentsController.getAll)
app.post('/api/comments/', commentsController.create)
app.put('/api/comments: title/', commentsController.update)
app.delete('/api/comments: title/', commentsController.delete)
//authEndpoints
app.get('/api/login', authController.loginUser)
app.delete('/api/logout',authController.logOut)
app.post('/api/admin', authController.loginAdmin)
app.post('/api/Register', authController.register)
app.post('/api/userUpdate', authController.updateUser)


//port
app.listen(5000, () => console.log('Listening on Port 5000'))
