function makeRandColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll('button');
for(const button of buttons) {
    button.addEventListener('click', 
    // function() {
    //     button.style.backgroundColor = makeRandColor();
    //     button.style.color = makeRandColor();
    // });
    colorize);
}

const h1s = document.querySelectorAll('h1');
for(const h1 of h1s) {
    h1.addEventListener('click', 
    // function() {
    //     h1.style.backgroundColor = makeRandColor();
    //     h1.style.color = makeRandColor();
    // });
    colorize);
}

function colorize() {
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
}
