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

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

const userSchema = new Schema({
    username: String,
    age: Number
});

const Tweet = mongoose.model('Tweet', tweetSchema);
const User = mongoose.model('User', userSchema);


// const makeTweets = async () => {
//     //const user = new User({ username: 'chickenfan99', age: 61 });
//     const user = await User.findOne({ username: 'chickenfan99' });
//     //const tweet1 = new Tweet({ text: 'omg I love my chicken family', likes: 0 });
//     const tweet2 = new Tweet({ text: 'I want a chicken', likes: 123 });
//     tweet2.user = user;
//     //user.save();
//     tweet2.save();
// }

// makeTweets();

const findTweet = async () => {
    const t = await Tweet.find({}).populate('user', 'username');
    console.log(t);
}

findTweet();
    