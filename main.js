function f1(){
    event.preventDefault();
let username=document.getElementById('name');
let usermail=document.getElementById('email');

localStorage.setItem('name',username.value);
localStorage.setItem('mail',usermail.value);
}

------------------------------usingobject---------------------------
   function f1()
{
    
    let obj={

        username:document.getElementById('name').value,
        usermail:document.getElementById('email').value

    };
    let obj_serialized=JSON.stringify(obj);
    localStorage.setItem(obj,obj_serialized);

    var retrievedObject = localStorage.getItem('obj');
    console.log('retrieved data Object: ', JSON.parse(retrievedObject));

}
