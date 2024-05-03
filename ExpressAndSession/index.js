import express from 'express';
import session from 'express-session';

const app = express();
app.use(session({ 
    secret : 'thisisnotagoodsecret',
    resave: false,
    saveUninitialized: false
}));

app.get('/viewcount', (req, res) => {
    req.session.count = req.session.count + 1 || 1;
    res.send(`You have viewed this page ${req.session.count} times`);
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});