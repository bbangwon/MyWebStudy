import mongoose from 'mongoose';
const { Schema } = mongoose;

//Mongoose MongoDB 연결
mongoose.connect('mongodb://localhost:27017/relationshipDB')
    .then(() => {
        console.log('Database connected');
    })
    .catch(err => {
        console.log('Error');
        console.log(err);
    });

const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    }
});


// Product.insertMany([
//     { name: 'Goddess Melon', price: 4.99, season: 'Summer' },
//     { name: 'Sugar Baby Watermelon', price: 4.99, season: 'Summer' },
//     { name: 'Asparagus', price: 3.99, season: 'Spring' }
// ])
//     .then(res => {
//         console.log(res);
//     })
//     .catch(e => {
//         console.log(e);
//     });

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});

const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', farmSchema);

// const makeFarm = async () => {
//     const farm = new Farm({ name: 'Full Belly Farms', city: 'Guinda, CA' });
//     const melon = await Product.findOne({ name: 'Goddess Melon' });
//     farm.products.push(melon);
//     await farm.save();
//     console.log(farm);
// }

// makeFarm();

// const addProduct = async () => {
//     const farm = await Farm.findOne({ name: 'Full Belly Farms' });
//     const watermelon = await Product.findOne({ name: 'Sugar Baby Watermelon' });
//     farm.products.push(watermelon);
//     await farm.save();
//     console.log(farm);
// }

// addProduct();

// populate() 메소드를 사용하여 관계된 데이터를 가져올 수 있다.
Farm.findOne({ name: 'Full Belly Farms' })
    .populate('products')
    .then(farm => console.log(farm))


