let clo = document.querySelector(".close");
let ope = document.querySelector(".open");
let content = document.querySelector(".content");
let project = document.querySelector(".project");
ope.addEventListener('click',function(){
    content.style.display="block"
    project.style.display="none";
    console.log("open")
})
clo.addEventListener('click',function(){
    content.style.display="none";
    project.style.display="block";
    console.log("close")
})