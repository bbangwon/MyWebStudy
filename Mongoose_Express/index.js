import express from 'express';
import { fileURLToPath } from "url";
import mongoose from 'mongoose';
import Product from './models/product.js';

//Express
const app = express();

//Mongoose MongoDB 연결
mongoose.connect('mongodb://localhost:27017/farmStand')
.then(() => {
    console.log('Database connected');
})
.catch(err => {
    console.log('Error');
    console.log(err);
});

const viewsFolder = fileURLToPath(new URL("./views", import.meta.url));
app.set('views', viewsFolder);

app.set('view engine', 'ejs');

app.get('/products', async (req, res) => {
    const products = await Product.find({});
    res.render('products/index', { products });
});

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/show', { product });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});






