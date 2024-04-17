import express from 'express';
import { fileURLToPath } from "url";

const app = express();

// EJS 템플릿 엔진 설정
app.set('view engine', 'ejs');

// EJS 파일이 있는 디렉토리 설정(index.js 파일의 디렉토리 경로를 기준으로 views 폴더를 설정)
const viewsFolder = fileURLToPath(new URL("./views", import.meta.url));
app.set('views', viewsFolder);

app.get('/', (req, res) => {
    res.render('home.ejs');
});

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.render('subreddit.ejs', { subreddit });
});

app.get('/rand', (req, res) =>{
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random.ejs', {num});
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

