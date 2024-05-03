import express from 'express';
import sheltersRouter from './routes/shelters.js';
import dogsRouter from './routes/dogs.js';

const app = express();

app.use('/shelters', sheltersRouter);
app.use('/dogs', dogsRouter);

app.listen(3000, () => {   
    console.log('Server is running on port 3000');
});
    