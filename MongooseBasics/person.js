import mongoose from 'mongoose';

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/shopApp');
    console.log('Database connected');

    //모델 생성
    const personSchema = new mongoose.Schema({
        first: String,
        last: String
    });

    //가상 속성
    personSchema.virtual('fullName').get(function() {
        return `${this.first} ${this.last}`;
    });

    personSchema.virtual('fullName').set(function(v) {
        this.first = v.substr(0, v.indexOf(' '));
        this.last = v.substr(v.indexOf(' ') + 1);
    });

    //pre, post middleware
    personSchema.pre('save', async function() {
        this.first = 'YO';
        this.last = 'MAMA';
        console.log('About to save');
    });

    personSchema.post('save', async function() {
        console.log('Just saved');
    });

    const Person = mongoose.model('Person', personSchema);
    const jordan = new Person({ first: 'Jordan', last: 'Hayashi' });

    console.log(jordan.fullName);

    jordan.fullName = 'Michael Jordan';
    console.log(jordan.fullName);
    console.log(jordan.first);
    console.log(jordan.last);

    jordan.save();

    
}