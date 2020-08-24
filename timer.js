
// Timer

let body = document.querySelector('.body');



setTimeout(function(){

let age = prompt('How old Are you?' , '1800'); 
if(age < 1800){
  body.style.display = 'none';
  alert('Sorry!!! You cant Watch It');
  
}else{
  alert('Welcome');

}
},1500)