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