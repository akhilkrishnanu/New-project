let email = document.getElementById("exampleInputEmail1");
let error = document.getElementById("error");
function validate(){
    let regExp= /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
    if(regExp.test(email.value)){
        error.innerHTML = "Valid";
        return true;
    }
    else{
        error.innerHTML = "invalid";
        error.style.color = "red";
        return false;
    }
}
