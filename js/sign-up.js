const agree = document.querySelector(".agree");
const eyeButton = document.querySelector(".fa-eye");
const password = document.querySelector("#password") ;
const student = document.querySelector(".first");
const teacher = document.querySelector(".second");
agree.addEventListener("click",()=>{
    agree.classList.toggle("agreed");
})
student.addEventListener("click",()=>{
    student.classList.toggle("agreed");
    teacher.classList.remove("agreed");
})
teacher.addEventListener("click",()=>{
    teacher.classList.toggle("agreed");
    student.classList.remove("agreed");
})
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
