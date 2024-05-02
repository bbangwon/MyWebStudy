import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const productSchema = new Schema({
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
    },
    farm: {
        type: Schema.Types.ObjectId,
        ref: 'Farm'
    }
});

const Product = mongoose.model('Product', productSchema);

export default Product;