import express from 'express';
import { fileURLToPath } from "url";

// JSON 파일을 import 하기 위한 설정 (assert 옵션을 사용하여 JSON 파일임을 명시)
import redditData from './data.json' assert {type: "json"};

const app = express();

//전체 경로를 가져와서 정적 파일을 제공
const publicFolder = fileURLToPath(new URL("./public", import.meta.url));
app.use(express.static(publicFolder));

// EJS 템플릿 엔진 설정
app.set('view engine', 'ejs');

// EJS 파일이 있는 디렉토리 설정(index.js 파일의 디렉토리 경로를 기준으로 views 폴더를 설정)
const viewsFolder = fileURLToPath(new URL("./views", import.meta.url));
app.set('views', viewsFolder);

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/cats', (req, res) => {
    const cats = ['Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'];
    res.render('cats', { cats });
});

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if(data)
    {
        //객체를 펼쳐서 전달하면 EJS에서 객체의 속성을 변수로 사용할 수 있음
        //예) data.name => name, data.description => description
        res.render('subreddit', { ...data });
    }
    else
    {
        res.render('notfound', { subreddit });
    }
});

app.get('/rand', (req, res) =>{
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', {num});
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

