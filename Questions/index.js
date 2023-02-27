let q1 = document.querySelectorAll(".tohide1");
let q2 = document.querySelectorAll(".tohide2");
let q3 = document.querySelectorAll(".tohide3");
let openq1 = document.querySelector(".openq1");
let openq2 = document.querySelector(".openq2");
let openq3 = document.querySelector(".openq3");
let test1 = false
let test2 = false
let test3 = false
let img1 = document.querySelector(".q1 img");
let img2 = document.querySelector(".q2 img");
let img3 = document.querySelector(".q3 img");

openq1.addEventListener('click',function(){
    if(test2==true || test3==true){
        q2.forEach(function(element){
            element.style.display="none";
            openq2.src = "/javascript-project/Questions/icon/plus-symbole-noir.png"
        })
        test2=false
        q3.forEach(function(element){
            element.style.display="none";
            openq3.src = "/javascript-project/Questions/icon/plus-symbole-noir.png"
        })
        test3=false
        q1.forEach(function(element){
            element.style.display="block";
            openq1.src = "/javascript-project/Questions/icon/moins-grand-symbole.png"
        })
        test1=true

    }
    else if(test1==true){
        q1.forEach(function(element){
            element.style.display="none";
            openq1.src = "/javascript-project/Questions/icon/plus-symbole-noir.png"
        })
        test1=false
    }
    else{
        q1.forEach(function(element){
            element.style.display="block";
            openq1.src = "/javascript-project/Questions/icon/moins-grand-symbole.png"
        })
        test1=true
    }
})
openq2.addEventListener('click',function(){
    if(test1==true || test3==true){
        q1.forEach(function(element){
            element.style.display="none";
            openq1.src = "/javascript-project/Questions/icon/plus-symbole-noir.png"
        })
        test1=false
        q3.forEach(function(element){
            element.style.display="none";
            openq3.src = "/javascript-project/Questions/icon/plus-symbole-noir.png"
        })
        test3=false
        q2.forEach(function(element){
            element.style.display="block";
            openq2.src = "/javascript-project/Questions/icon/moins-grand-symbole.png"
        })
        test2=true

    }
    else if(test2==true){
        q2.forEach(function(element){
            element.style.display="none";
            openq2.src = "/javascript-project/Questions/icon/plus-symbole-noir.png"
        })
        test2=false
    }
    else{
        q2.forEach(function(element){
            element.style.display="block";
            openq2.src = "/javascript-project/Questions/icon/moins-grand-symbole.png"
        })
        test2=true
    }
})
openq3.addEventListener('click',function(){
    if(test1==true || test2==true){
        q1.forEach(function(element){
            element.style.display="none";
            openq1.src = "/javascript-project/Questions/icon/plus-symbole-noir.png"
        })
        test1=false
        q2.forEach(function(element){
            element.style.display="none";
            openq2.src = "/javascript-project/Questions/icon/plus-symbole-noir.png"
        })
        test2=false
        q3.forEach(function(element){
            element.style.display="block";
            openq3.src = "/javascript-project/Questions/icon/moins-grand-symbole.png"
        })
        test3=true

    }
    else if(test3==true){
        q3.forEach(function(element){
            element.style.display="none";
            openq3.src = "/javascript-project/Questions/icon/plus-symbole-noir.png"
        })
        test3=false
    }
    else{
        q3.forEach(function(element){
            element.style.display="block";
            openq3.src = "/javascript-project/Questions/icon/moins-grand-symbole.png"
        })
        test3=true
    }
})


