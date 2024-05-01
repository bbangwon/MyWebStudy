import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, '이름은 반드시 입력해야합니다.']
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        enum: ['fruit', 'vegetable', 'dairy'],        
        lowercase: true
    }
});

const Product = mongoose.model('Product', productSchema);

export default Product;