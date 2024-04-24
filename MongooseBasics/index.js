import mongoose from 'mongoose';

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/movieApp');
    console.log('Database connected');

    //모델 생성
    const movieSchema = new mongoose.Schema({
        title: String,
        year: Number,
        score: Number,
        rating: String
    });

    const Movie = mongoose.model('Movie', movieSchema);

    //새로운 데이터 생성 및 저장
    // const amadeus = new Movie({ title: 'Amadeus', year: 1984, score: 9.2, rating: 'R' });
    // await amadeus.save();

    //대량 데이터 추가
    Movie.insertMany([
        { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
        { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
        { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
        { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
        { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
    ]);

    


}




