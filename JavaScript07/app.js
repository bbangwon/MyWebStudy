const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt', 'Olly'];

// Spread
const allPets = [...cats, ...dogs];
console.log(allPets); // ["Blue", "Scout", "Rocket", "Rusty", "Wyatt", "Olly"]

// Spread with Object
const feline = { legs: 4, family: 'Felidae' };
const canine = { family: 'Caninae', furry: true };

const catDog = { ...feline, ...canine };
console.log(catDog); // {legs: 4, family: "Caninae", furry: true}

// Rest 
function sum(...nums) {
    return nums.reduce((total, el) => total + el);
}
console.log(sum(1, 2, 3, 4, 5)); // 15

function sum()
{
    console.log(arguments);
    
    //arguments is an array-like object
    return Array.from(arguments).reduce((total, el) => total + el);
}

//배열 분해
const scores = [95, 85, 75];
const [high, low, ...rest] = scores;
console.log(high); // 95
console.log(low); // 85
console.log(rest); // [75]

//객체 분해
const user = {
    email: 'a@a.com',
    password: '12345',
    firstName: 'John',
    lastName: 'Doe',
    born: 2000
};
const { email: e_mail, password: pwd, born, ...name } = user;
console.log(e_mail); // 'a@a.com'
console.log(pwd); // '12345'
console.log(born); // 2000
console.log(name); // {firstName: "John", lastName: "Doe"}

// 분해 할당 (Destructuring)
const user2 = {
    firstName: 'CherryGarcia8',
    lastName: 'IceCream',    
}

function fullName({firstName, lastName}) {    
    return `${firstName} ${lastName}`;
}

fullName(user2); // "CherryGarcia8 IceCream"




