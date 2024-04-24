import mongoose from 'mongoose';

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/shopApp');
    console.log('Database connected');

    //모델 생성
    const productSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
    });
    const Product = mongoose.model('Product', productSchema);

    //스키마 유효성 검사
    const bike = new Product({ name: 'Mountain Bike', price: '599', color: 'blue' });
    bike.save()
        .then(data => console.log(data))
        .catch(err => console.log(err));    
}