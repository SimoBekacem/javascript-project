let number=document.getElementById("number");
let x=0;
function test(x){
    if(x<0){
        number.style.color="red";
    }
    else if(x>0){
        number.style.color="green";
    }
    else{
        number.style.color="black";
    }
}
function decrease(){
    x-=1
    number.innerText=x
    test(x)
}
function increase(){
    x+=1
    number.innerText=x
    test(x)
}
function reset(){
    x=0
    number.innerText=x
    test(x)
}