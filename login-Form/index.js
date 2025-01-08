window.onload = () =>{
  let signUp = document.getElementById("signUpBtn");
  let logIn = document.getElementById("logInBtn");
  let nameField = document.getElementById("nameField");
  let title = document.getElementById("title");

  logIn.onclick = function(){
    nameField.style.maxHeight ='0';
    title.innerHTML="Log In";
    signUp.classList.add("disable");
    logIn.classList.remove("disable");
  }
  signUp.onclick = function(){
    nameField.style.maxHeight ="60px";
    title.innerHTML=" Sign Up";
    signUp.classList.remove("disable");
    logIn.classList.add("disable");
  } 
}