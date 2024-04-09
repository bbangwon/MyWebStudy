function hex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r,g,b) {
    return `rgb(${r}, ${g}, ${b})`;
}

function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function() {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    };
    color.hex = function() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return color;
}

const firstColor = makeColor(35, 255, 150);
firstColor.rgb(); // 'rgb(35, 255, 150)'




// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;

//     rgb = function() {
//         const { r, g, b } = this;
//         return `rgb(${r}, ${g}, ${b})`;
//     };

//     console.log(this);
// }

// Color.prototype.hex = function() {
//     const { r, g, b } = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// Color.prototype.rgba = function(a = 1.0) {
//     const { r, g, b } = this;
//     return `rgba(${r}, ${g}, ${b}, ${a})`;
// }

// const color1 = new Color(255, 40, 100); // Color {r: 255, g: 40, b: 100}
// console.log(color1.rgb()); // rgb(255, 40, 100)
// const color2 = new Color(0, 0, 0); // Color {r: 0, g: 0, b: 0}
// console.log(color2.hex()); // #000000

class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }

    innerRGB() {
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`;
    }

    rgb() {
        const { r, g, b } = this;
        return `rgb(${this.innerRGB()})`;
    }
    
    rgba(a = 1.0) {
        const { r, g, b } = this;
        return `rgba(${this.innerRGB()}, ${a})`;
    }

    hex() {
        const { r, g, b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);   
    }

    calcHsl() {
        let { r, g, b } = this;
        r /= 255;
        g /= 255;
        b /= 255;
        const l = Math.max(r, g, b);
        const s = l - Math.min(r, g, b);
        const h = s
          ? l === r
            ? (g - b) / s
            : l === g
            ? 2 + (b - r) / s
            : 4 + (r - g) / s
          : 0;
        return [
          60 * h < 0 ? 60 * h + 360 : 60 * h,
          100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
          (100 * (2 * l - s)) / 2,
        ];
    }

    hsl() {
        const [h, s, l] = this.calcHsl();
        return `hsl(${h}, ${s}%, ${l}%)`;
    }
    opposite() {
        const [h, s, l] = this.calcHsl();
        return `hsl(${(h + 180) % 360}, ${s}%, ${l}%)`;    
    }

    fullySaturated() {
        const [h, s, l] = this.calcHsl();
        return `hsl(${h}, 100%, ${l}%)`;
    }
}

const c1 = new Color(255, 67, 89, 'tomato');
const c2 = new Color(230, 126, 34, 'carrot');

class Pet { 
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} is eating!`;
    }

}

class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        super(name, age);
        this.livesLeft = livesLeft;
    }
    meow() {
        return `${this.name} says Meow!`;
    }
}

class Dog extends Pet{
    bark() {
        return `${this.name} says Woof!`;
    }
}
