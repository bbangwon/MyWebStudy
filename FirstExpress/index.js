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

app.get('*', (req, res) => {
    res.send('<h1>해당 경로에는 아무것도 없습니다.</h1>');
});

// 서버를 8080 포트로 시작
app.listen(8080, () => {
    console.log('8080번 포트로 서버가 시작되었습니다.');
});