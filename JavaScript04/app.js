const cat = {
    name: 'Fluffy',
    color: 'White',
    breed: 'Persian',
    meow() {
        console.log(`THIS IS ${this}`);
        console.log(`${this.name} Meow!`);
    },
    meow2: function() {
        console.log(`${this.name} Meow!`);
    }       
}

let meow2 = cat.meow;   //window object
