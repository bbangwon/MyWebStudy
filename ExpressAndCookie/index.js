import express from 'express';
import sheltersRouter from './routes/shelters.js';
import dogsRouter from './routes/dogs.js';
import admin from './routes/admin.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cookieParser());

app.get('/greet', (req, res) => {
    const { name = "No-name" } = req.cookies;
    res.send('Hello, stranger! ' + name);
});

app.get('/setname', (req, res) => {
    res.cookie('name', 'breadone').send('name has been set');
});

app.use('/admin', admin);
app.use('/shelters', sheltersRouter);
app.use('/dogs', dogsRouter);

app.listen(3000, () => {   
    console.log('Server is running on port 3000');
});
    