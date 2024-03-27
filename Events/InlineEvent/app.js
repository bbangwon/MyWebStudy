const btn = document.querySelector('#v2');

btn.onclick = function() {
    console.log('Button Clicked!');    
}

function scream(){
    console.log('AAAAAAHHHHHH');
}

btn.onmouseenter = scream;

const btn3 = document.querySelector('#v3');

btn3.addEventListener('click', function() {
    alert('Button Clicked');
});


function twist() {
    console.log('twist');
}

function shout() {
    console.log('shout');
}

const tasButton = document.querySelector('#tas');

// tasButton.onclick = twist;
// tasButton.onclick = shout;

// 콜백을 계속 추가
tasButton.addEventListener('click', twist, { once: true });   // once: true로 설정하면 한번만 실행
tasButton.addEventListener('click', shout);


