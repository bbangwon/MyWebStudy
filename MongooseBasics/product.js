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
            min: [0, 'Price must be positive'],
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
        },
        size: {
            type: String,
            enum: ['S', 'M', 'L'],
        }
    });
    
    //인스턴스 메소드
    productSchema.methods.greet = function() {
        console.log('Hello!');
        console.log(`- from ${this.name}`);
    }

    productSchema.methods.toggleOnSale = function() {
        this.onSale = !this.onSale;
        return this.save();
    }

    productSchema.methods.addCategory = function(newCat) {
        this.categories.push(newCat);
        return this.save();
    }

    const Product = mongoose.model('Product', productSchema);


    const findProduct = async () => {
        const foundProduct = await Product.findOne({ name: 'Tire Pump' });
        await foundProduct.toggleOnSale();
        await foundProduct.addCategory('Outdoors');
    }

    findProduct();

    // // 스키마 유효성 검사
    // const bike = new Product({
    //     name: 'Tire Pump', price: 19.50,
    //     categories: ['Cycling'],
    //     size: 'S'
    // });

    // bike.save()
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err));

    // //업데이트 유효성 검사
    // Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: -19.50 }, { new: true, runValidators: true })
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err));


}