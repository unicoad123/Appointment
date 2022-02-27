function f1(){
    event.preventDefault();
let username=document.getElementById('name');
let usermail=document.getElementById('email');

localStorage.setItem('name',username.value);
localStorage.setItem('mail',usermail.value);
}