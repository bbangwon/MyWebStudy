import express from 'express';
import sheltersRouter from './routes/shelters.js';
import dogsRouter from './routes/dogs.js';
import admin from './routes/admin.js';

const app = express();

app.use('/admin', admin);
app.use('/shelters', sheltersRouter);
app.use('/dogs', dogsRouter);

app.listen(3000, () => {   
    console.log('Server is running on port 3000');
});
    