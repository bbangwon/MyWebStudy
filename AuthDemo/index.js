import express, { urlencoded } from 'express';
import mongoose from 'mongoose';
import { fileURLToPath } from "url";
import User from './models/user.js';
import bcrypt from 'bcrypt';

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

app.get('/', (req, res) => {
    res.send('This is the home page');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    const hash = await bcrypt.hash(password, 12);
    const user = new User({ username, password: hash });
    await user.save();
    res.redirect('/');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
        res.send('You are now logged in');
    } else {
        res.send('Try again');
    }
});


app.get('/secret', async (req, res) => {
    res.send('This is a secret page');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});