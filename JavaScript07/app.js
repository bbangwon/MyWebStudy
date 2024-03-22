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




