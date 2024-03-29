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

//화살표 함수로 변경
const doubles2 = numbers.map(el => el * 2);
console.log(doubles2);

// setInterval() 함수는 일정 시간 간격으로 지정된 함수를 실행합니다.
const id = setInterval(() => console.log("HELLO!!"), 1000);

// setTimeout() 함수는 일정 시간이 지난 후에 지정된 함수를 실행합니다.
setTimeout(() => clearInterval(id), 5000);

//filter() 함수는 배열의 각 요소에 대해 한 번씩 제공된 함수를 실행하고, 그 결과가 참인 요소만 모아 새로운 배열을 반환합니다.
let even = numbers.filter(function (el) {
    return el % 2 === 0;
});
console.log(even);

//every() 함수는 배열의 모든 요소가 주어진 판별 함수를 통과하는지 테스트합니다.
let allEven = numbers.every(function (el) {
    return el % 2 === 0;
});
console.log(allEven);

//some() 함수는 배열의 요소 중 하나라도 주어진 판별 함수를 통과하는지 테스트합니다.
let someEven = numbers.some(function (el) {
    return el % 2 === 0;
});
console.log(someEven);

//reduce() 함수는 배열의 각 요소에 대해 주어진 함수를 실행하고, 하나의 결과값을 반환합니다.
let sum = numbers.reduce(function (acc, el) {
    return acc + el;
}, 0);
console.log(sum);


const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    fullName2: () => {
        //화살표 함수 내부에서 this를 사용하면, 외부에서 this를 참조한다.
        console.log(this);
        return this.firstName + " " + this.lastName;
    },
    shoutName: function() {
        setTimeout(function () {
            //여기서 this는 window 객체를 참조(setTimeout 내부)한다.
            //setTimeout 내부의 this는 window 객체를 참조하기 때문에, this.firstName과 this.lastName는 undefined가 된다.
            console.log(this);
            console.log(this.firstName + " " + this.lastName);
        }, 3000);
    },
    shoutName2: function() {
        setTimeout(() => {
            //화살표 함수 내부에서 this는 외부의 this를 참조한다.
            //setTimeout 내부의 this는 shoutName2 함수의 this를 참조하기 때문에, this.firstName과 this.lastName는 정상적으로 참조된다.
            console.log(this);
            console.log(this.firstName + " " + this.lastName);
        }, 3000);
    }


}

console.log(person.fullName());
console.log(person.fullName2());