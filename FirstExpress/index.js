import express from 'express';
const app = express();

// 어떤 요청이든 호출되는 함수
app.use((req, res) => {
    console.log("새로운 요청이 들어왔습니다.");
    //res.send({name: '홍길동'});
    res.send('<h1>안녕하세요</h1>');
});

app.listen(8080, () => {
    console.log('8080번 포트로 서버가 시작되었습니다.');
});