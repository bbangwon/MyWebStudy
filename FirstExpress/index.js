import express from 'express';
const app = express();

// 어떤 요청이든 호출되는 함수(get등을 쓰려면 주석처리)
// app.use((req, res) => {
//     console.log("새로운 요청이 들어왔습니다.");
//     //res.send({name: '홍길동'});
//     res.send('<h1>안녕하세요</h1>');
// });

//root route
app.get('/', (req, res) => {
    res.send('<h1>안녕하세요</h1>');
});

app.post('/cats', (req, res) => {
    res.send('<h1>고양이 POST</h1>');
});

app.get('/cats', (req, res) => {
    res.send('<h1>고양이</h1>');
});

app.get('/dogs', (req, res) => {
    res.send('<h1>강아지</h1>');
});

//라우트 파라미터
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>현재 보고 계신 페이지는 ${subreddit}입니다.</h1>`);
});

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>현재 보고 계신 페이지는 ${subreddit}의 ${postId}번 글입니다.</h1>`);
});

//쿼리
app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('<h1>검색어를 입력하세요.</h1>');
    } else {
        res.send(`<h1>당신이 검색한 쿼리는: ${q}</h1>`);
    }
});

app.get('*', (req, res) => {
    res.send('<h1>해당 경로에는 아무것도 없습니다.</h1>');
});

// 서버를 8080 포트로 시작
app.listen(8080, () => {
    console.log('8080번 포트로 서버가 시작되었습니다.');
});