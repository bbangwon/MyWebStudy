import express from 'express';

const app = express();

// EJS 템플릿 엔진 설정
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home.ejs');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

