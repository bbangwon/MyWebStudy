import express from 'express';
import { fileURLToPath } from "url";
import User from './models/user.js';

const app = express();

app.set('view engine', 'ejs');

const viewsFolder = fileURLToPath(new URL("./views", import.meta.url));
app.set('views', viewsFolder);


app.get('/register', (req, res) => {
    res.render('register');
});
    

app.get('/secret', async (req, res) => {
    res.send('This is a secret page');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});