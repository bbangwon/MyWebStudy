import mongoose from 'mongoose';

//Mongoose MongoDB 연결
mongoose.connect('mongodb://localhost:27017/relationshipDB')
    .then(() => {
        console.log('Database connected');
    })
    .catch(err => {
        console.log('Error');
        console.log(err);
    });

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {        
            _id: {_id: false},    
            street: String,
            city: String,
            state: String,
            country: String
        }
    ]
});    

const User = mongoose.model('User', userSchema);
const makeUser = async () => {
    const u = new User({
        first: 'Harry',
        last: 'Potter'
    });
    u.addresses.push({
        street: '123 Sesame St.',
        city: 'New York',
        state: 'NY',
        country: 'USA'
    });
    const res = await u.save();
    console.log(res);
}

const addAddresss = async(id) => {    
    const user = await User.findById(id);
    user.addresses.push({
        street: '99 3rd St.',
        city: 'New York',
        state: 'NY',
        country: 'USA'
    });
    const res = await user.save();
    console.log(res);
}

//makeUser();
addAddresss('6632d1e5cb38af912535f56c');