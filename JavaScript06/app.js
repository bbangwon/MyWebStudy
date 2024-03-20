const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// forEach() 함수는 배열의 각 요소에 대해 한 번씩 제공된 함수를 실행합니다.
numbers.forEach(function (el) {
    if(el % 2 === 0)
        console.log(el);
});

//map() 함수는 배열의 각 요소에 대해 한 번씩 제공된 함수를 실행하고, 그 결과를 모아 새로운 배열을 반환합니다.
const doubles = numbers.map(function (el) {
    return el * 2;
});
console.log(doubles);
