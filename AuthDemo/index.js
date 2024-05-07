import express, { urlencoded } from 'express';
import mongoose from 'mongoose';
import { fileURLToPath } from "url";
import User from './models/user.js';
import bcrypt from 'bcrypt';
import session from 'express-session';

const app = express();

//Mongoose MongoDB 연결
mongoose.connect('mongodb://localhost:27017/authDemo')
    .then(() => {
        console.log('Database connected');
    })
    .catch(err => {
        console.log('Error');
        console.log(err);
    });


app.set('view engine', 'ejs');

const viewsFolder = fileURLToPath(new URL("./views", import.meta.url));
app.set('views', viewsFolder);

app.use(urlencoded({ extended: true }));
app.use(session({
    secret: 'notagoodsecret',
    resave: false,
    saveUninitialized: true
}));

const requireLogin = (req, res, next) => { 
    if (!req.session.user_id) {
        return res.redirect('/login');
    }
    next();
}

app.get('/', (req, res) => {
    res.send('This is the home page');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/secret');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const foundUser = await User.findAndValidate(username, password);
    if (foundUser) {
        req.session.user_id = foundUser._id;
        return res.redirect('/secret');
    } else {
        res.redirect('/login');
    }
});

app.post('/logout', (req, res) => {
    req.session.user_id = null;
    req.session.destroy();
    res.redirect('/login');
});


app.get('/secret', requireLogin, async (req, res) => {
    const user = await User.findOne({ _id: req.session.user_id });
    res.render('secret', { user });
});

app.get('/topsecret', requireLogin, (req, res) => {
    res.send('This is top secret');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});