document.querySelector('button').addEventListener('click', function(evt) {
    console.log(evt);
});

const input = document.querySelector('input');
input.addEventListener('keydown', function(evt) {
    console.log(evt);
});

input.addEventListener('keyup', function(evt) {
    console.log("KeyUp : " + evt.key);
});

window.addEventListener('keydown', function(evt) {
    console.log("KeyDown : " + evt.key);
});