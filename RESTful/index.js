import express from 'express';
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from 'uuid';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

// EJS 파일이 있는 디렉토리 설정(index.js 파일의 디렉토리 경로를 기준으로 views 폴더를 설정)
const viewsFolder = fileURLToPath(new URL("./views", import.meta.url));
app.set('views', viewsFolder);

let comments = [
    {
        id: uuidv4(),
        username: '홍길동',
        comment: '오늘 날씨가 참 좋네요.'
    },
    {
        id: uuidv4(),
        username: '김철수',
        comment: '저도 날씨가 좋다고 생각해요.'
    },
    {
        id: '6fa8129f-aecd-4fcc-8743-375760828b0b',
        username: '이영희',
        comment: '날씨가 좋으면 기분이 좋아지죠.'
    }
];
        
app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
});

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
});

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ id: uuidv4() ,username, comment });
    res.redirect('/comments');
});

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(comment => comment.id === id);
    res.render('comments/show', { comment });
});

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(comment => comment.id === id);
    res.render('comments/edit', { comment });
});

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;    
    const newCommentText = req.body.comment;    
    const comment = comments.find(comment => comment.id === id);
    comment.comment = newCommentText;
    res.send({ success: true });
});

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(comment => comment.id !== id);
    res.send({ success: true });
});

app.listen(3000, () => {
    console.log('3000번 포트에서 서버 실행 중입니다.');
});