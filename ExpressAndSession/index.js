import express from 'express';
import session from 'express-session';

const app = express();

const sessionOptions = { 
    secret : 'thisisnotagoodsecret',
    resave: false,
    saveUninitialized: false
};

app.use(session(sessionOptions));

app.get('/viewcount', (req, res) => {
    req.session.count = req.session.count + 1 || 1;
    res.send(`You have viewed this page ${req.session.count} times`);
});

app.get('/register', (req, res) => {
    const { username = 'Anonymous' } = req.query;
    req.session.username = username;
    res.redirect('/greet');
});

app.get('/greet', (req, res) => {
    const { username } = req.session;
    res.send(`Welcome back, ${username}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});