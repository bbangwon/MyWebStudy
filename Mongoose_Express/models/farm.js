import mongoose from 'mongoose';
import Product from './product.js';
const { Schema } = mongoose;

const farmSchema = new Schema({
    name: {
        type: String,
        required: [true, '이름은 반드시 입력해야합니다.']
    },
    city: {
        type: String
    },
    email: {
        type: String,
        required: [true, '이메일은 반드시 입력해야합니다.']
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }]    
});

farmSchema.post('findOneAndDelete', async function (farm) {
    if (farm.products.length) {
        const res = await Product.deleteMany({ _id: { $in: farm.products } });
        console.log(res);
    }
});

const Farm = mongoose.model('Farm', farmSchema);
export default Farm;
