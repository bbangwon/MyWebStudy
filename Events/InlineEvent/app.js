const btn = document.querySelector('#v2');

btn.onclick = function() {
    console.log('Button Clicked!');    
}

function scream(){
    console.log('AAAAAAHHHHHH');
}

btn.onmouseenter = scream;
