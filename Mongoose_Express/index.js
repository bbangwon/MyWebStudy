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
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const categories = ['fruit', 'vegetable', 'dairy'];
app.get('/products', async (req, res) => {
    const products = await Product.find({});
    res.render('products/index', { products });
});

app.get('/products/new', (req, res) => {
    res.render('products/new', { categories });
});

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
});

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/show', { product });
});

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product, categories });
});

app.put('/products/:id', async (req, res) => {    
    const { id } = req.params;   
    const product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true, new: true});
    console.log(product);
    res.send({ success: true });
}); 

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    res.send({ success: true });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});






