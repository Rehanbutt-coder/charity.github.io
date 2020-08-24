let close = document.querySelector('.close');
let burger = document.querySelector('.burger');
let darkBar = document.querySelector('.darkbar .wrapperr');

burger.addEventListener('click', function(){
  darkBar.style.display = 'block';
});

close.addEventListener('click', function(){
  darkBar.style.display = 'none';
});



