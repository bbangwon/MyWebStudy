const form = document.querySelector('#shelterForm');
const input = document.querySelector('#catName');
const list = document.querySelector('#cats');

form.addEventListener('submit', function(evt) {    
    //기본 이벤트를 막는다.
    evt.preventDefault();  
    
    console.log(input.value);

    const li = document.createElement('li');
    li.innerText = input.value;
    list.appendChild(li);
    input.value = '';
});

//이벤트 위임 li를 클릭하면 삭제된다.
list.addEventListener('click', function(evt) {
    const tgt = evt.target;
    if (tgt.tagName.toUpperCase() === 'LI') {
        tgt.remove();
    }
});

//input 요소의 값이 변경될 때마다 이벤트가 발생한다.
//(change 이벤트는 input 요소의 값이 변경될 때 발생한다.)
input.addEventListener('change', function(evt) {
    console.log('input changed');
});

//input 요소의 값이 변경될 때마다 이벤트가 발생한다.
//(input 이벤트는 키보드 입력이 발생할 때마다 발생한다.)
input.addEventListener('input', function(evt) {
    console.log('input event');
});

const eventBubble = document.querySelector('#eventBubble');
eventBubble.addEventListener('click', function(evt) {
    alert('eventBubble clicked');
    
    //이벤트 전파를 막는다.
    evt.stopPropagation();
});