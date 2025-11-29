const express = require('express');
const path = require('path');
const connectDB = require('./db/db');

const app = express();

connectDB();


app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

app.use('/admin', require('./Routes/admin.route'));

app.get('/', (req, res) => {
    res.render('home');
});
app.get('/candidates', (req, res) => res.render('candidates'));
app.get('/results', (req, res) => res.render('results'));
app.get('/login', (req, res) => res.render('login'));
app.get('/profile', (req, res) => res.render('profile'));
app.get('/admin', (req, res) => res.render('admin-dashboard'));

app.get("/signup", (req, res) => {
  res.render("signup");
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});
