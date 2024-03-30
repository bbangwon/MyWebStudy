const form = document.querySelector('#shelterForm');
form.addEventListener('submit', function(evt) {    
    //기본 이벤트를 막는다.
    evt.preventDefault();  
    
    console.log('Form Submitted');
});