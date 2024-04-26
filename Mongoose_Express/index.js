import express from 'express';
import { fileURLToPath } from "url";
import mongoose from 'mongoose';

//Express
const app = express();

const viewsFolder = fileURLToPath(new URL("./views", import.meta.url));
app.set('views', viewsFolder);

app.set('view engine', 'ejs');

app.get('/dogs', (req, res) => {
   res.send('Dogs');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


//Mongoose MongoDB 연결
mongoose.connect('mongodb://localhost:27017/movieApp')
.then(() => {
    console.log('Database connected');
})
.catch(err => {
    console.log('Error');
    console.log(err);
});



