const sing = async () => {
  
  //에러를 리턴하면 Promise가 reject된다.
  throw 'OH NO, PROBLEM!';
  return 'La la la';
}

//async 는 자동으로 Promise를 리턴한다.
sing()
    .then(data => {
        console.log("PROMISE RESOLVED WITH: ", data);
    })
    .catch(err => {
        console.log("OH NO, PROMISE REJECTED!");
        console.log(err);
    });