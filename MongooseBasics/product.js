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
            maxlength: 20,
        },
        price: {
            type: Number,
            required: true,
            min: 0,
        },
        onSale: {
            type: Boolean,
            default: false,
        },
        categories: [String],
        qty: {
            online: {
                type: Number,
                default: 0,
            },
            inStore: {
                type: Number,
                default: 0,
            }
        }
    });
    const Product = mongoose.model('Product', productSchema);

    //스키마 유효성 검사
    const bike = new Product({
        name: 'Bike Helmet', price: 19.50,
        categories: ['Cycling', 'Safety'],
        qty: {
            online: 10,
            inStore: 20
        }
    });

    bike.save()
        .then(data => console.log(data))
        .catch(err => console.log(err));
}