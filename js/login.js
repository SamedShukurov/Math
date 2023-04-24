const checkbox = document.querySelector(".checkbox")
const eyeButton = document.querySelector(".fa-eye")
const password = document.querySelector("#password") 
function checked(){
    checkbox.classList.toggle("checked")
}
eyeButton.addEventListener("click",()=>{  
    if(eyeButton.classList.contains("fa-eye")){
        eyeButton.classList.replace("fa-eye","fa-eye-slash")
        password.type = "password"
    }
    else{
        eyeButton.classList.replace("fa-eye-slash","fa-eye")
        password.type = "text"
    }

})