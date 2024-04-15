import express from 'express';
const app = express();

app.use(() => {
    console.log("새로운 요청이 들어왔습니다.");
});

app.listen(8080, () => {
    console.log('8080번 포트로 서버가 시작되었습니다.');
});