import express from 'express';
import { fileURLToPath } from "url";
import mongoose from 'mongoose';
import Product from './models/product.js';
import Farm from './models/farm.js';
import AppError from './AppError.js';

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



// FARM ROUTES
app.get('/farms', async (req, res) => {
    const farms = await Farm.find({});
    res.render('farms/index', { farms });
});

app.get('/farms/new', (req, res) => {
    res.render('farms/new');    
});

app.post('/farms', async (req, res) => {
    const farm = new Farm(req.body);
    await farm.save();
    res.redirect('/farms');
});


const categories = ['fruit', 'vegetable', 'dairy'];
app.get('/products', wrapAsync(async (req, res, next) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category });
        res.render('products/index', { products, category });
    } else {
        const products = await Product.find({});
        res.render('products/index', { products, category: 'All' });
    }
}));

app.get('/products/new', (req, res) => {
    res.render('products/new', { categories });
});

app.post('/products', wrapAsync(async (req, res, next) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
}));

function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(e => next(e));
    }
}

app.get('/products/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        throw new AppError(404, 'Product not found');
    }
    res.render('products/show', { product });
}));

app.get('/products/:id/edit', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        throw new AppError(404, 'Product not found');
    }
    res.render('products/edit', { product, categories });
}));

const handleValidationErr = err => {
    console.dir(err);
    return new AppError(400, `Validation failed...${err.message}`);
}

app.use((err, req, res, next) => {
    console.log(err.name);
    if(err.name === 'ValidationError') 
        err = handleValidationErr(err);
    next(err);
});

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong' } = err;
    res.status(status).send(message);
});

app.put('/products/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    console.log(product);
    res.send({ success: true });
}));

app.delete('/products/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    res.send({ success: true });
}));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
