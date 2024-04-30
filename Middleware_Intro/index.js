import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('tiny'));

app.use((req, res, next) => {
    req.requestTime = Date.now();
    next();
});

app.use('/dogs', (req, res, next) => {
    console.log('I love dogs');
    next();
});

const verfyPassword = ((req, res, next) => {
    const { password } = req.query;
    if(password === 'chickennugget') {
        return next();
    }
    throw new Error('Password required!');
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

app.get('/error', (req, res) => {
    chicken.fly();
});

app.get('/dogs', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`);
    res.send('Woof Woof');
});

app.get('/secret', verfyPassword, (req, res) => {
    res.send('My secret is: Sometimes I wear headphones in public so I don\'t have to talk to anyone');
});

app.use((req, res) => {
    res.status(404).send('Not Found');
})

//에러 핸들러
app.use((err, req, res, next) => {
    console.log('*******************************');
    console.log('**********ERROR HANDLER********');
    console.log('*******************************');
    console.log(err);

    //빌트인 에러핸들러 실행
    next(err);
    //res.status(500).send('Something went wrong');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});