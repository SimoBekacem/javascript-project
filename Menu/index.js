let contaner2=document.querySelector(".contaner2")
let all = document.querySelector(".all")
let breakfast = document.querySelector(".breakfast")
let lumch = document.querySelector(".lumch")
let shakes = document.querySelector(".shakes")
let dinner = document.querySelector(".dinner")
let item1 = document.querySelector(".item1")
let item2 = document.querySelector(".item2")
let item3 = document.querySelector(".item3")
let item4 = document.querySelector(".item4")
let item5 = document.querySelector(".item5")
let item6 = document.querySelector(".item6")
let item7 = document.querySelector(".item7")
let item8 = document.querySelector(".item8")
let item9 = document.querySelector(".item9")
let item10 = document.querySelector(".item10")
function button1(){
    console.log("hello")
    contaner2.style.gridTemplateAreas =`
    "item1 item4"
    "item7 item0"
`;
    console.log(contaner2)
    item1.style.display="block";
    item2.style.display="none";
    item3.style.display="none";
    item4.style.display="block";
    item5.style.display="none";
    item6.style.display="none";
    item7.style.display="block";
    item8.style.display="none"
    item9.style.display="none";
    item10.style.display="none";
}
function button2(){
    console.log("hello")
    contaner2.style.gridTemplateAreas =`
    "item2 item5"
    "item8 item0"
`;
    console.log(contaner2)
    item1.style.display="none";
    item2.style.display="block";
    item3.style.display="none";
    item4.style.display="none";
    item5.style.display="block";
    item6.style.display="none";
    item7.style.display="none";
    item8.style.display="block"
    item9.style.display="none";
    item10.style.display="none";
}
function button3(){
    console.log("hello")
    contaner2.style.gridTemplateAreas =`
    "item3 item6"
    "item9 item0"
`;
    console.log(contaner2)
    item1.style.display="none";
    item2.style.display="none";
    item3.style.display="block";
    item4.style.display="none";
    item5.style.display="none";
    item6.style.display="block";
    item7.style.display="none";
    item8.style.display="none"
    item9.style.display="block";
    item10.style.display="none";
}
function button4(){
    console.log("hello")
    contaner2.style.gridTemplateAreas =`
    "item10 item0"
`;
    console.log(contaner2)
    item1.style.display="none";
    item2.style.display="none";
    item3.style.display="none";
    item4.style.display="none";
    item5.style.display="none";
    item6.style.display="none";
    item7.style.display="none";
    item8.style.display="none";
    item9.style.display="none";
    item10.style.display="block";
}
function button0(){
    console.log("hello")
    contaner2.style.gridTemplateAreas =`
    "item1 item2"
    "item3 item4"
    "item5 item6"
    "item7 item8"
    "item9 item10"
`;
    console.log(contaner2)
    item1.style.display="block";
    item2.style.display="block";
    item3.style.display="block";
    item4.style.display="block";
    item5.style.display="block";
    item6.style.display="block";
    item7.style.display="block";
    item8.style.display="block";
    item9.style.display="block";
    item10.style.display="block";
}
