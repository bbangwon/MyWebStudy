import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('tiny'));

app.use((req, res, next) => {
    req.requestTime = Date.now();
    next();
});

// app.use((req, res, next) => {
//     console.log('Hello, I am a middleware');    
//     return next();
// });

// app.use((req, res, next) => {
//     console.log('Hello, I am another middleware');    
//     return next();
// });

app.get('/', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send('Home Page');
});

app.get('/dogs', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send('Woof Woof');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});