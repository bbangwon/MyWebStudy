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
    const amadeus = new Movie({ title: 'Amadeus', year: 1984, score: 9.2, rating: 'R' });
    await amadeus.save();
}
