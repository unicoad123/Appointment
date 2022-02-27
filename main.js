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
------------------------task12-----------------
    function f1()
{
    
  event.preventDefault();
  const emailId = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  if (emailId.length > 0 && name.length > 0) {
    const obj = {
      name: name,
      emailId: emailId
    };
    localStorage.setItem("userDetails" + emailId, JSON.stringify(obj));
    // localStorage.setItem("userDetailEmail" + emailId, emailId);
    // listOfPeople.push(object)
    addNewLineElement(obj);
}

}
function addNewLineElement(object) {
    const ul = document.getElementById("users");
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(object.name + " " + object.emailId + " ")
    );
    //li.appendChild();
    ul.appendChild(li);

  }
